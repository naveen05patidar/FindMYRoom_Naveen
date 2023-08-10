import React from "react";
import NavBar from "../Cards/Navbar";
import HomeCarousel from "../Cards/Carousel";
import OrderCard from "../Cards/orderCard";
import Filter from "../Cards/Filter";

const Home= ()=>{

    return(
        <div>
            <NavBar/>
            <HomeCarousel/>
            <OrderCard/>

            <br/>
            <br/>
            <br/>
            <Filter/>
        </div>
    )
}

export default Home;