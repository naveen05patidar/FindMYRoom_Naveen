import React, { useState, useEffect } from "react";
import { orderCart, orderFind } from "../ApiRouter";
import axios from "axios";
import { MDBContainer } from "mdb-react-ui-kit";
import "../Assets/CSS/ecommerce-category-product.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderCard = () => {
    const [rk, setRK] = useState(null);
    const [oneBHK, setOneBHK] = useState(null);
    const [twoBHK, setTwoBHK] = useState(null);
    const [threeBHK, setThreeBHK] = useState(null);
    const [fullHouse, setFullHouse] = useState(null);
    const [allOrder, setAllOrder] = useState(null);


    const uid = useSelector((state)=>state.email);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(orderFind);
                const orderData = response.data.order;
                setAllOrder(response.data.order);

                const rkOrders = [];
                const oneBHKOrders = [];
                const twoBHKOrders = [];
                const threeBHKOrders = [];
                const fullHouseOrders = [];

                for (let i = 0; i < orderData.length; i++) {
                    if (orderData[i].category === "RK") {
                        rkOrders.push(orderData[i]);
                    } else if (orderData[i].category === "01 BHK") {
                        oneBHKOrders.push(orderData[i]);
                    } else if (orderData[i].category === "02 BHK") {
                        twoBHKOrders.push(orderData[i]);
                    } else if (orderData[i].category === "03 BHK") {
                        threeBHKOrders.push(orderData[i]);
                    } else if (orderData[i].category === "Full House") {
                        fullHouseOrders.push(orderData[i]);
                    }
                }

                setRK(rkOrders);
                setOneBHK(oneBHKOrders);
                setTwoBHK(twoBHKOrders);
                setThreeBHK(threeBHKOrders);
                setFullHouse(fullHouseOrders);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleAddToCard = async (oId) => {


        if (!localStorage.getItem('token')) {
            alert("You have been not login Please login first")
            navigate('/login');
        }
        else if (localStorage.getItem('token')) {
            try {
                const obj = {
                    orderId: oId,
                    userId: uid
                }

                const response = await axios.post(orderCart,obj);
                if (response.data.success === true) {
                    alert('Data saved ')
                }
                else if (response.data.success === false) {
                    alert('Data not save')
                }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }
    }

    const handelDtails = (oid,cat)=>{

        const obj = {
            orderId :oid,
            data:allOrder,
            cat:cat
        }
        navigate('/orderdetails',{state:obj})
    }

    return (
        <div className="np-ordercard">
            {/* <h1>This is order Data </h1> */}
            <MDBContainer fluid>
                <div>
                    {rk &&
                        rk.map((item) => (
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
                                                        </div>
                                                        <h6 className="text-success">Maint Charge : Rs. {item.mainCharge}</h6>
                                                        
                                                        <div class="d-flex flex-column mt-4">
                                                            <button class="btn btn-primary btn-sm"onClick={()=>handelDtails(item.orderId,item.category)}>Details</button>
                                                            <button class="btn btn-outline-primary btn-sm mt-2" onClick={() => handleAddToCard(item.orderId)}>Add to wish list</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                    {oneBHK &&
                        oneBHK.map((item) => (
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
                                                        </div>
                                                        <h6 className="text-success">Maint Charge : Rs. {item.mainCharge}</h6>
                                                        <div class="d-flex flex-column mt-4">
                                                            <button class="btn btn-primary btn-sm"onClick={()=>handelDtails(item.orderId,item.category)}>Details</button>
                                                            <button class="btn btn-outline-primary btn-sm mt-2" onClick={() => handleAddToCard(item.orderId, item.userId)} >Add to wish list</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                    {twoBHK &&
                        twoBHK.map((item) => (
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
                                                        </div>
                                                        <h6 className="text-success">Maint Charge : Rs. {item.mainCharge}</h6>
                                                        <div class="d-flex flex-column mt-4">
                                                            <button class="btn btn-primary btn-sm"onClick={()=>handelDtails(item.orderId,item.category)}>Details</button>
                                                            <button class="btn btn-outline-primary btn-sm mt-2" onClick={() => handleAddToCard(item.orderId, item.userId)} >Add to wish list</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}


                    {threeBHK &&
                        threeBHK.map((item) => (
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
                                                        </div>
                                                        <h6 className="text-success">Maint Charge : Rs. {item.mainCharge}</h6>
                                                        <div class="d-flex flex-column mt-4">
                                                            <button class="btn btn-primary btn-sm"onClick={()=>handelDtails(item.orderId,item.category)}>Details</button>
                                                            <button class="btn btn-outline-primary btn-sm mt-2" onClick={() => handleAddToCard(item.orderId, item.userId)} >Add to wish list</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    {fullHouse &&
                        fullHouse.map((item) => (
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
                                                        </div>
                                                        <h6 className="text-success">Maint Charge : Rs. {item.mainCharge}</h6>
                                                        <div class="d-flex flex-column mt-4">
                                                            <button class="btn btn-primary btn-sm"onClick={()=>handelDtails(item.orderId,item.category)}>Details</button>
                                                            <button class="btn btn-outline-primary btn-sm mt-2" onClick={() => handleAddToCard(item.orderId, item.userId)} >Add to wish list</button>
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
            </MDBContainer>
        </div>
    );
};

export default OrderCard;




// import React, { useState, useEffect } from "react";
// import { orderFind } from "../ApiRouter";
// import axios from "axios";
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBIcon, MDBRipple, MDBBtn } from "mdb-react-ui-kit";
// import "../Assets/CSS/ecommerce-category-product.css";

// const OrderCard = () => {
//     const [rk, setRK] = useState(null);
//     const [oneBHK, setOneBHK] = useState(null);
//     const [twoBHK, setTwoBHK] = useState(null);
//     const [threeBHK, setThreeBHK] = useState(null);
//     const [fullHouse, setFullHouse] = useState(null);
//     const [allOrder, setAllOrder] = useState(null)

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(orderFind);
//                 const orderData = response.data.order;
//                 setAllOrder(response.data)

//                 const rkOrders = [];
//                 const oneBHKOrders = [];
//                 const twoBHKOrders = [];
//                 const threeBHKOrders = [];
//                 const fullHouseOrders = [];

//                 for (let i = 0; i < orderData.length; i++) {
//                     if (orderData[i].category === "RK") {
//                         rkOrders.push(orderData[i]);
//                     } else if (orderData[i].category === "01 BHK") {
//                         oneBHKOrders.push(orderData[i]);
//                     } else if (orderData[i].category === "02 BHK") {
//                         twoBHKOrders.push(orderData[i]);
//                     } else if (orderData[i].category === "03 BHK") {
//                         threeBHKOrders.push(orderData[i]);
//                     } else if (orderData[i].category === "Full House") {
//                         fullHouseOrders.push(orderData[i]);
//                     }
//                 }

//                 setRK(rkOrders);
//                 setOneBHK(oneBHKOrders);
//                 setTwoBHK(twoBHKOrders);
//                 setThreeBHK(threeBHKOrders);
//                 setFullHouse(fullHouseOrders);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchData();
//     }, []);
//     console.log(allOrder);
//     console.log(rk);

//     return (
//         <div className="np-ordercard">
//             {/* <h1>This is order Data </h1> */}
//             <MDBContainer fluid>
//                 <div>
//                     {
//                    rk && rk.map((item) => {
//                         <div key={item.category}>
//                             <h1>{item.category}</h1>
//                         </div>
//                     })
//                 }
//                 </div>
//             </MDBContainer>
//         </div>
//     )
// }
// export default OrderCard;


// {
//     allOrder !==null? <div>{
//         allOrder.map((item)=>{

//         })
//     }</div>:""
// }


{/* <MDBRow className="justify-content-center mb-3">
                    <MDBCol md="12" xl="10">
                        <MDBCard className="shadow-0 border rounded-3">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                        <MDBRipple
                                            rippleColor="light"
                                            rippleTag="div"
                                            className="bg-image rounded hover-zoom hover-overlay"
                                        >
                                            <MDBCardImage
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                                                fluid
                                                className="w-100"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>Quant olap shirts</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>
                                            <span>289</span>
                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                            <span>100% cotton</span>
                                            <span className="text-primary"> • </span>
                                            <span>Light weight</span>
                                            <span classNAme="text-primary"> • </span>
                                            <span>
                                                Best finish
                                                <br />
                                            </span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            <span>Unique design</span>
                                            <span className="text-primary"> • </span>
                                            <span>For men</span>
                                            <span className="text-primary"> • </span>
                                            <span>
                                                Casual
                                                <br />
                                            </span>
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't
                                            look even slightly believable.
                                        </p>
                                    </MDBCol>
                                    <MDBCol
                                        md="6"
                                        lg="3"
                                        className="border-sm-start-none border-start"
                                    >
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">$14.99</h4>
                                            <span className="text-danger">
                                                <s>$21.99</s>
                                            </span>
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-4">
                                            <MDBBtn color="primary" size="sm">
                                                Details
                                            </MDBBtn>
                                            <MDBBtn outline color="primary" size="sm" className="mt-2">
                                                Add to wish list
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center mb-3">
                    <MDBCol md="12" xl="10">
                        <MDBCard className="shadow-0 border rounded-3">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                        <MDBRipple
                                            rippleColor="light"
                                            rippleTag="div"
                                            className="bg-image rounded hover-zoom hover-overlay"
                                        >
                                            <MDBCardImage
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                                                fluid
                                                className="w-100"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>Quant ruybi shirts</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>
                                            <span>145</span>
                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                            <span>100% cotton</span>
                                            <span className="text-primary"> • </span>
                                            <span>Light weight</span>
                                            <span className="text-primary"> • </span>
                                            <span>
                                                Best finish
                                                <br />
                                            </span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            <span>Unique design</span>
                                            <span className="text-primary"> • </span>
                                            <span>For women</span>
                                            <span className="text-primary"> • </span>
                                            <span>
                                                Casual
                                                <br />
                                            </span>
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't
                                            look even slightly believable.
                                        </p>
                                    </MDBCol>
                                    <MDBCol
                                        md="6"
                                        lg="3"
                                        className="border-sm-start-none border-start"
                                    >
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">$17.99</h4>
                                            <span className="text-danger">
                                                <s>$25.99</s>
                                            </span>
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-4">
                                            <MDBBtn color="primary" size="sm">
                                                Details
                                            </MDBBtn>
                                            <MDBBtn outline color="primary" size="sm" className="mt-2">
                                                Add to wish list
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow> */}