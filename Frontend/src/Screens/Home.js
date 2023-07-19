import React from "react";
import NavBar from "../Cards/Navbar";
import HomeCarousel from "../Cards/Carousel";
import OrderCard from "../Cards/orderCard";

const Home= ()=>{

    return(
        <div>
            <NavBar/>
            <HomeCarousel/>
            <OrderCard/>
        </div>
    )
}

export default Home;