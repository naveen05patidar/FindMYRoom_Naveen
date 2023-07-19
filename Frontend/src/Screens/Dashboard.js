import React from "react";
import NavBar from "../Cards/Navbar";
import HomeCarousel from "../Cards/Carousel";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderCard from "../Cards/orderCard";


const Dashboard = ()=>{
// const userId = useSelector((state)=>state.email)


    return(
        <div>
            <NavBar/>
            <HomeCarousel/>
            {/* <p>{userId}</p> */}
            <OrderCard/>

        </div>
    )
}

export default Dashboard;