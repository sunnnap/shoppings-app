
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Menclothing } from "./Menclothing";
import { ProductDetaile } from "./ProductDetaile";
import { ProductComponent } from "./ProductComponent";
import { ShopingCategories } from "./ShopingCategories";
import { Kidclothing } from "./Kidclothing";
import { ShoppingHome } from "./ShoppingHome";

import './ShopingsiteRouter.css';

import { Womenclothin } from "./Womenclothin";
import { LoginComponent } from "./LoginComponent";
import { Loginerror } from "./Loginerror";


export function  RouterComponent() {

    return (

        <div className="container-fluid m-0">

            <BrowserRouter>

                <header className="d-flex justify-content-between bg-dark text-white p-2">

                    <div>

                        <span style={{ fontWeight: 'bold', fontSize: '22px' }}>Shopper.</span>

                    </div>
                    <div>
                        <span className="me-3"><Link to="home">Home</Link></span>
                        <span className="me-3"><Link to="men">Mens </Link></span>
                        <span className="me-3"><Link to="women">Women</Link></span>
                        
                        <span className="me-3"><Link to="categories">Categories</Link></span>
                        <span className="me-3"><Link to="products"></Link></span>
                        {/* <span className="me-3"><Link to="details"></Link></span> */}
                        <span className="me-3"><Link to="LoginComponent"></Link></span>
                        <span className="me-3"><Link to="Login"></Link></span>
                    </div>

                    <div>

                        <Link to="Login" className="text-white"><span className="bi bi-person me-3" /></Link>

                        <span className="bi bi-heart me-3"></span>

                        <span className="bi bi-cart4 me-3"></span>

                    </div>

                </header>

                <section className="mt-2" style={{ height: "400px" }}>

                    <Routes>
                        <Route path="/" element={<ShoppingHome />} />
                        <Route path="/home" element={<ShoppingHome />} />
                        <Route path="/women" element={<Womenclothin />} />
                        <Route path="/categories" element={<ShopingCategories />} />
                        <Route path="/men" element={<Menclothing />} />
                        <Route path="/kid" element={<Kidclothing />} />
                        <Route path="/products/:category" element={<ProductComponent />}></Route>
                        <Route path="/details/:id" element={<ProductDetaile />} />
                        <Route path="/Login" element={<LoginComponent />} />
                        <Route path="/error" element={<Loginerror />} />
                        <Route path="*" element={<code>Page you requested - Not Found</code>} />
                    </Routes>
                </section>
                <footer className="row p-3 bg-dark text-white m-1">
                    <div className="col">
                        <ul className="list-unstyled">
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Size Guide</li>
                            <li>Shipping & Returns</li>

                        </ul>

                    </div>

                    <div className="col">

                        <ul className="list-unstyled">

                            <li>Contact Us</li>

                            <li>FAQs</li>

                            <li>Size Guide</li>

                            <li>Shipping & Returns</li>

                        </ul>

                    </div>

                    <div className="col">

                        <ul className="list-unstyled">

                            <li>Contact Us</li>

                            <li>FAQs</li>

                            <li>Size Guide</li>

                            <li>Shipping & Returns</li>

                        </ul>

                    </div>

                    <div className="col">

                        <ul className="list-unstyled">

                            <li>Contact Us</li>

                            <li>FAQs</li>

                            <li>Size Guide</li>

                            <li>Shipping & Returns</li>

                        </ul>

                    </div>

                </footer>

            </BrowserRouter>

        </div>

    )

}

