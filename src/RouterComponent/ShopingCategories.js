 
import { useEffect, useState } from "react";
 import { Link ,useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
export function ShopingCategories(){
    const [ categories,setCategories]=useState([])
    const[data,setData]=useState([]);
    const[cookies,setCookies,removeCookies]=useCookies();
    const[username,setUsername]=useState('');
    const navigate=useNavigate();
     

    
  useEffect(() => {

    fetch("http://fakestoreapi.com/products/categories")

      .then(response => response.json())

      .then(data => {

        setData(data);
      })

  }, [])
  useEffect(() => {
    if (cookies["username"]==undefined) {
      navigate("/login");
    } else {
      fetch("http://fakestoreapi.com/products/categories")

        .then(response => response.json())

        .then(data => {

          setCategories(data);

        });
      setUsername(cookies["username"]);
    }

  }, [])
  function Logoutclick() {
    removeCookies("username");
    navigate("/login");
  }

    return(

        <div className="container-fluid">
            <ul className="list list-unstyled" >
                {
                      data.map(category=>
                        <li className="btn btn-dark w-25 mb-2 d-block" key={category}><Link to={'/products/' + category}>{category}</Link></li>
                        )
                }
            </ul>
            <button className="btn  btn-danger" onClick={Logoutclick}>sign out</button>
                </div>
)
}
