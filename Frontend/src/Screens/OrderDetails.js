import React, { useEffect, useState } from "react";
import NavBar from "../Cards/Navbar";
import Carousel from "../Cards/Carousel";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
    const [product, setProduct] = useState([]);
    const [simProduct, setSimProduct] = useState([]);

    const location = useLocation();
    const { orderId, data, cat } = location.state;
    console.log(cat);

    console.log(product);
    console.log(simProduct);

    useEffect(() => {
        const fetchData = async () => {
            const simArr = [];
            const prod = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].orderId === orderId) {
                    prod.push(data[i])
                }
                else if (data[i].category === cat) {
                    simArr.push(data[i]);
                }
            }

            console.log(simArr);
            console.log(prod);
            setProduct(prod);
            setSimProduct(simArr)
        }
        fetchData();
    }, [])

    console.log(orderId);
    console.log(data);


    return (
        <div>
            <div>
                <NavBar></NavBar>
                <Carousel />
            </div>

            {product.length > 0 && product.map((item) => (
                <div key={item.orderId}>
                    <section className="py-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="row gx-4 gx-lg-5 align-items-center">
                                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                                <div className="col-md-6">
                                    <div className="display-4 small mb-1">Category : {item.category}</div>
                                    <h1 className="display-7 fw-bold">Price : {item.price}</h1>
                                    <h1 className="display-10 fw-bold">Maint Charge : {item.mainCharge}</h1>
                                    <div className="fs-5 mb-5">
                                        <span> Food Priority : {item.foodPriority} </span><br />
                                        <span> Fredom : {item.freedom} </span><br />
                                        <span> Member Allows : {item.member} </span><br />
                                        <span> Marital : {item.merital} </span><br />
                                        <span> parkingArea : {item.parkingArea} </span><br />
                                    </div>
                                    <p className="lead">{item.description}</p>
                                    <div className="d-flex">
                                        <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                            <i className="bi-cart-fill me-1"></i>
                                            Add to cart
                                        </button>
                                    </div>
                                    <br />
                                    <div style={{ fontWeight: "bolder" }}>
                                        <span> Address : {item.address.street},{item.address.area},{item.address.landmark},Indore </span><br />
                                        <span>Mobile: {item.address.mobile}, {item.address.altMobile}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ))}

            <section className="py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4">Related products</h2>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {simProduct.length > 0 &&
                            simProduct.slice(0, 4).map((item) => (
                                <div key={item.orderId} className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">Category : {item.category}</h5>
                                                <p className="fw-bolder">Category : {item.price}</p>
                                                <p className="fw-bolder">Location : {item.address.area}</p>
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderDetails;





{/* <div className="col mb-5">
<div className="card h-100">
    <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    <div className="card-body p-4">
        <div className="text-center">
            <h5 className="fw-bolder">Special Item</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
            </div>
            <span className="text-muted text-decoration-line-through">$20.00</span>
            $18.00
        </div>
    </div>
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">
    <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    <div className="card-body p-4">
        <div className="text-center">
            <h5 className="fw-bolder">Sale Item</h5>
            <span className="text-muted text-decoration-line-through">$50.00</span>
            $25.00
        </div>
    </div>
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
</div>
</div>
<div className="col mb-5">
<div className="card h-100">
    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    <div className="card-body p-4">
        <div className="text-center">
            <h5 className="fw-bolder">Popular Item</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
            </div>
            $40.00
        </div>
    </div>
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
</div>
</div> */}
