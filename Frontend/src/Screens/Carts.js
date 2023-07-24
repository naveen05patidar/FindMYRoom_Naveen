import React from "react";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { orderCartFind, orderFind } from '../ApiRouter';
import { useSelector } from 'react-redux';
import NavBar from "../Cards/Navbar";
import Carousel from "../Cards/Carousel";

function Cart() {
    const [cartData, setCartData] = useState([]);
    const [allOrder, setAllOrder] = useState([]);


    const userId = useSelector((state) => state.email);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(orderCartFind);
                const orderData = response.data.cartOrder;

                const cartOrder = [];

                for (let i = 0; i < orderData.length; i++) {
                    if (orderData[i].userId === userId) {
                        cartOrder.push(orderData[i].orderId);
                    }
                }

                const responseOrder = await axios.get(orderFind);
                const orderDataFull = responseOrder.data.order;
                setAllOrder(orderDataFull);
                const arr = []

                for (let i = 0; i < cartOrder.length; i++) {
                    for (let j = 0; j < orderDataFull.length; j++) {
                        if (cartOrder[i] === orderDataFull[j].orderId) {
                            arr.push(orderDataFull[j]);
                        }
                    }
                }
                setCartData(arr);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    const handleRemoveToCard = (oid, uid) => {

    }

    const handelDtails = (oid,cat) => {

        const obj = {
            orderId: oid,
            data: allOrder,
            cat:cat
        }
        navigate('/orderdetails', { state: obj })
    }




    return (
        <div classNameName="np-ordercard">
            <NavBar />
            <Carousel />
            <div>
                <div>
                    {cartData &&
                        cartData.map((item) => (
                            <div key={item.orderId} className="container-fluid">
                                <div className="row justify-content-center mb-0">
                                    <div className="col-md-12 col-xl-10">
                                        <div className="card shadow-0 border rounded-3 mt-5 mb-3">
                                            <div className="card-body">

                                                <div className="row">
                                                    <div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
                                                        <div className="bg-image rounded hover-zoom hover-overlay">
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp" className="w-100" alt="Product" />
                                                            <a href="#!">
                                                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                                                {/* background-color: rgba(251, 251, 251, 0.15) */}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5>Category : {item.category}</h5>
                                                        <div className="d-flex flex-row">

                                                            <span>Order Id : {item.orderId}</span>
                                                        </div>
                                                        <div className="mt-1 mb-0 text-muted small">
                                                            <span>Members {item.member}</span>
                                                            <span className="text-primary"> • </span>
                                                            <span>Food Priority {item.foodPriority}</span>
                                                            <span className="text-primary"> • </span>
                                                            <span>{item.freedom}</span>
                                                        </div>
                                                        <div className="mb-2 text-muted small">
                                                            <span>Ocupation a {item.ocupation}</span>
                                                            <span className="text-primary"> • </span>
                                                            <span> {item.merital}</span>
                                                            <span className="text-primary"> • </span>
                                                            <span> Parking Area {item.parkingArea}</span>
                                                        </div>
                                                        <p className="text-truncate mb-4 mb-md-0">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6 col-lg-3 border-sm-start-none border-start">
                                                        <div className="d-flex flex-row align-items-center mb-1">
                                                            <h4 className="mb-1 me-1">Rs. {item.price}</h4>
                                                        </div>
                                                        <h6 className="text-success">Maint Charge : Rs. {item.mainCharge}</h6>

                                                        <div className="d-flex flex-column mt-4">
                                                            <button className="btn btn-primary btn-sm" onClick={() => handelDtails(item.orderId,item.category)}>Details</button>
                                                            <button className="btn btn-outline-primary btn-sm mt-2" style={{ backgroundColor: "red", color: "black", fontWeight: "bolder" }} onClick={() => handleRemoveToCard(item.orderId)}>Remove to wish list</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                </div>
            </div>
        </div>

    )
}

export default Cart;