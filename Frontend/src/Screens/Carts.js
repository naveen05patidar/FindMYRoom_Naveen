import React from "react";
// import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { orderCartFind, orderFind } from '../ApiRouter';
import { useSelector } from 'react-redux';
import NavBar from "../Cards/Navbar";
import Carousel from "../Cards/Carousel";

function Cart() {
    const [cartData, setCartData] = useState([]);

    const userId = useSelector((state) => state.email);

    // const navigate = useNavigate();

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


    return (
        <div className="np-ordercard">
            <NavBar />
            <Carousel />
            <div>
                <div>
                    {cartData &&
                        cartData.map((item) => (
                            <div key={item.orderId} class="container-fluid">
                                <div class="row justify-content-center mb-0">
                                    <div class="col-md-12 col-xl-10">
                                        <div class="card shadow-0 border rounded-3 mt-5 mb-3">
                                            <div class="card-body">

                                                <div class="row">
                                                    <div class="col-md-12 col-lg-3 mb-4 mb-lg-0">
                                                        <div class="bg-image rounded hover-zoom hover-overlay">
                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp" class="w-100" alt="Product" />
                                                            <a href="#!">
                                                                <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                                                {/* background-color: rgba(251, 251, 251, 0.15) */}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h5>Category : {item.category}</h5>
                                                        <div class="d-flex flex-row">

                                                            <span>Order Id : {item.orderId}</span>
                                                        </div>
                                                        <div class="mt-1 mb-0 text-muted small">
                                                            <span>Members {item.member}</span>
                                                            <span class="text-primary"> • </span>
                                                            <span>Food Priority {item.foodPriority}</span>
                                                            <span class="text-primary"> • </span>
                                                            <span>{item.freedom}</span>
                                                        </div>
                                                        <div class="mb-2 text-muted small">
                                                            <span>Ocupation a {item.ocupation}</span>
                                                            <span class="text-primary"> • </span>
                                                            <span> {item.merital}</span>
                                                            <span class="text-primary"> • </span>
                                                            <span> Parking Area {item.parkingArea}</span>
                                                        </div>
                                                        <p class="text-truncate mb-4 mb-md-0">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div class="col-md-6 col-lg-3 border-sm-start-none border-start">
                                                        <div class="d-flex flex-row align-items-center mb-1">
                                                            <h4 class="mb-1 me-1">Rs. {item.price}</h4>
                                                            <span class="text-danger"><s>Maint Charge : Rs. {item.mainCharge}</s></span>
                                                        </div>
                                                        <h6 class="text-success">Free shipping</h6>
                                                        <div class="d-flex flex-column mt-4">
                                                            <button class="btn btn-primary btn-sm">Details</button>
                                                            <button class="btn btn-outline-primary btn-sm mt-2" onClick={() => handleRemoveToCard(item.orderId, item.userId)}>Add to wish list</button>
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