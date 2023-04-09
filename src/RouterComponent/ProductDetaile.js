import { useEffect ,useState} from "react";
import { useCookies } from "react-cookie";
import { Route, useParams,Link } from "react-router-dom"
import './ShopingsiteRouter.css';
export  function ProductDetaile(){
    const params=useParams();
    const [products, setProduct] = useState({id:0,title:'',price:0,description:'',rating:{rate:0, count:0}});
    useEffect(()=>{
        fetch(`http://fakestoreapi.com/products/${params.id}`)
        .then(Response=>Response.json())
        .then(data=>{
            setProduct(data)
            console.log(data)
         } )
    },[params.id])

    return(
            <div style={{ }}>
                <h2>Product Detailes</h2>
                <div className="row">
                    <div className="col-3">
                        <img src={products.image} height="150px"/>
                        <div>
                          <Link to={'/products/' + products.category}>back to product</Link>
                          </div>
                    </div>
                    <div className="col-3">
                    <dl>
                        <dt>title</dt>
                        <dd>{products.title}</dd>
                        <dt>price</dt>
                        <dd>{products.price}</dd>
                        <dt>rating</dt>
                        <dd> <span className="bi bi-star-fill text-success"></span> {products.rating.rate}</dd>
                          </dl>
                          </div>
                          <div className="col-5">
                            <h4>Description</h4>
                            <p className="w-50 text-justify">{products.description}</p>
                          </div>
                          
                </div>
            </div>
        
    )
}