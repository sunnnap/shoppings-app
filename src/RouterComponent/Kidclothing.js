import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import './ShopingsiteRouter.css';


export function  Kidclothing() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cookies, setCookies, removeCookies] = useCookies();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://fakestoreapi.com/products/category/electronics")

      .then(response => response.json())

      .then(data => {

        setProducts(data);
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

  return (

    <div className="container-fluid">
      {


      }
      <div className="d-flex flex-wrap">

        {

          products.map(product =>

            <div className="card m-2" style={{ width: '150px' }}>
               <Link to={'/details/' + product.id }> 
                <img src={product.image} key={product.image} height="150px" className="card-img-to" />
               </Link> 
           
            </div>
          )

        }

      </div>
      <div className="mt-3">
      <button  className="btn btn-danger" onClick={Logoutclick} >sign out</button>
      </div>
    </div>


  )

}

