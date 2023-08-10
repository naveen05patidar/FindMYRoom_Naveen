import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from "../Cards/Navbar";
import Carousel from "../Cards/Carousel";
import axios from 'axios';
import {orderFindById} from '../ApiRouter'

export default function OrderEdit() {
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [member, setMember] = useState();
    const [foodPriority, setFoodPriority] = useState();
    const [freedom, setFreedom] = useState();
    const [mainCharge, setMainCharge] = useState();
    const [ocupation, setOcupation] = useState();
    const [merital, setMerital] = useState();
    const [description, setDescription] = useState();
    const [parkingArea, setParkingArea] = useState();

    const [street, setStreet] = useState();
    const [area, setArea] = useState();
    const [zipCode, setZipCode] = useState();
    const [landmark, setLandmark] = useState();
    const [country, setCountry] = useState();
    const [mobile, setMobile] = useState();
    const [altMobile, setAltMobile] = useState();
    const [files, setFiles] = useState();

    const location = useLocation();
    const oid  = location.state;

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
            const response = await axios.get(orderFindById+oid);
            const Ord = response.data.order
                setCategory(Ord.category);
                setPrice(Ord.price);
                setMember(Ord.member);
                setFoodPriority(Ord.foodPriority);
                setFreedom(Ord.freedom);
                setMainCharge(Ord.mainCharge);
                setOcupation(Ord.ocupation);
                setMerital(Ord.merital);
                setDescription(Ord.description);
                setParkingArea(Ord.parkingArea);
                setStreet(Ord.address.street);
                setArea(Ord.address.area);
                setZipCode(Ord.address.zipCode);
                setLandmark(Ord.address.landmark);
                setCountry(Ord.address.country);
                setMobile(Ord.address.mobile);
                setAltMobile(Ord.address.altMobile);
                setFiles(Ord.files[0])
                
        } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    })
    
    const handleUpload = (e)=>{
        e.preventDefault();
        alert('hello')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('hello')
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="container-fluid h-custom ">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 m-5">
                        <div className="card card-registration card-registration-2" style={{ "borderRadius": "15px" }}>
                            {/* style="border-radius: 15px;" */}
                            <form onSubmit={handleSubmit} enctype="multipart/form-data">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-md-6 p-5 bg-white">
                                            <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>Upload Information</h3>
                                            <div className="mb-4">
                                                <label for="title" className="form-label">Category</label>
                                                <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select form-select-lg" id="title">
                                                    <option hidden>Select</option>
                                                    <option>RK</option>
                                                    <option>01 BHK</option>
                                                    <option>02 BHK</option>
                                                    <option>03 BHK</option>
                                                    <option>Full House </option>
                                                </select>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="firstName" className="form-label">Price</label>
                                                        <input type="Number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control form-control-lg" id="Price" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="lastName" className="form-label">Members Allows</label>
                                                        <input type="number" value={member} onChange={(e) => setMember(e.target.value)} className="form-control form-control-lg" id="lastName" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="firstName" className="form-label">Food Priority</label>
                                                        {/* <input type="text" className="form-control form-control-lg" id="firstName" /> */}
                                                        <select value={foodPriority} onChange={(e) => setFoodPriority(e.target.value)} className="form-select form-select-lg" id="title">
                                                            <option hidden>Select</option>
                                                            <option>Vegitarian</option>
                                                            <option>Non Vegitarian</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="lastName" className="form-label">Freedom</label>
                                                        {/* <input type="text" className="form-control form-control-lg" id="lastName" /> */}
                                                        <select value={freedom} onChange={(e) => setFreedom(e.target.value)} className="form-select form-select-lg" id="title">
                                                            <option hidden>Select</option>
                                                            <option>Full Freedom</option>
                                                            <option>Medium Freedom</option>
                                                            <option>No Freedom</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="firstName" className="form-label">Maintanance Charges</label>
                                                        <input value={mainCharge} onChange={(e) => setMainCharge(e.target.value)} type="Number" className="form-control form-control-lg" id="Price" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="lastName" className="form-label">Ocupation</label>
                                                        <select value={ocupation} onChange={(e) => setOcupation(e.target.value)} className="form-select form-select-lg" id="title">
                                                            <option hidden>Select</option>
                                                            <option>Student</option>
                                                            <option>Employee</option>
                                                            <option>Self Employer</option>
                                                            <option>All of the Above</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="firstName" className="form-label">Parking Area</label>
                                                        <select value={parkingArea} onChange={(e) => setParkingArea(e.target.value)} className="form-select form-select-lg" id="title">
                                                            <option hidden>Select</option>
                                                            <option>Yes, Suficiant</option>
                                                            <option>Not Avalible</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="lastName" className="form-label">Merital Status</label>
                                                        <select value={merital} onChange={(e) => setMerital(e.target.value)} className="form-select form-select-lg" id="title">
                                                            <option hidden>Select</option>
                                                            <option>Marrid</option>
                                                            <option>UnMarid</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="firstName" className="form-label">Upload Pictures</label>
                                                        <input type="file"  onChange={(e) => setFiles(e.target.value)} className="form-control form-control-lg" id="streetNr" />

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-4">
                                                        <label for="lastName" className="form-label">Click the Upload Pictures</label>
                                                        <button name="btn" className="btn btn btn-light form-control form-control-lg" onClick={handleUpload}>Upload</button>

                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="row">
                                                <div className="col-md-6">
                                                <div className="mb-4">

                                                    <label for="title" className="form-label">Upload Rooms Pictures</label>
                                                    <input type="file" multiple onChange={(e) => setFiles(e.target.value)} className="form-control form-control-lg" id="streetNr" />
                                                </div>
                                                </div>
                                                <div className="col-md-6">
                                                <div className="mb-4">
                                                <label for="title" className="form-label">Upload Rooms Pictures</label>
                                                    <button name="btn" onClick={handleUpload}>Upload</button>
                                                </div>
                                                </div>
                                            </div> */}

                                            <div className="mb-4">
                                                <label htmlFor="position" className="form-label">MoreDetails About Your Entity</label>
                                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control form-control-lg" id="position" rows="3"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-6 bg-indigo p-5 np-color">
                                            <h3 className="fw-normal mb-5 text-white" style={{ color: "#4835d4" }}>Contact Details</h3>
                                            <div className="mb-4">
                                                <label for="streetNr" className="form-label text-white">Street</label>
                                                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} className="form-control form-control-lg" id="streetNr" />
                                            </div>
                                            <div className="mb-4">
                                                <label for="additionalInfo" className="form-label text-white">Area</label>
                                                <input type="text" value={area} onChange={(e) => setArea(e.target.value)} className="form-control form-control-lg" id="additionalInfo" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="mb-4">
                                                        <label for="zipCode" className="form-label text-white">Zip Code</label>
                                                        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="form-control form-control-lg" id="zipCode" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="mb-4">
                                                        <label for="place" className="form-label text-white">Landmark</label>
                                                        <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} className="form-control form-control-lg" id="place" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label for="country" className="form-label text-white">Country</label>
                                                {/* <input type="text" className="form-control form-control-lg" id="country" /> */}
                                                <select value={country} onChange={(e) => setCountry(e.target.value)} className="form-select form-select-lg" id="title">
                                                    <option hidden>Select</option>
                                                    <option>India</option>
                                                    <option>Japan</option>
                                                    <option>China</option>
                                                    <option>USA</option>
                                                    <option>UK</option>
                                                    <option>Russia</option>
                                                </select>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="mb-4">
                                                        <label for="additionalInfo" className="form-label text-white"> Mobile No.</label>
                                                        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control form-control-lg" id="additionalInfo" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="mb-4">
                                                        <label for="additionalInfo" className="form-label text-white">Additional Mobile No.</label>
                                                        <input type="text" value={altMobile} onChange={(e) => setAltMobile(e.target.value)} className="form-control form-control-lg" id="additionalInfo" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-check mb-4">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label text-white" for="flexCheckDefault">
                                                    I do accept the Terms and Conditions of your site.
                                                </label>
                                            </div>
                                            <button className="btn btn-light btn-lg">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
