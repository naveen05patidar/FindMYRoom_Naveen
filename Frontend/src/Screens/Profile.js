import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { userFind,userUpdate } from '../ApiRouter';
import NavBar from '../Cards/Navbar';
import axios from 'axios';
import { userPost } from '../ApiRouter';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Profile() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [id,setId]=useState();

  const uid = useSelector((state)=>state.email);
  
  const navigate = useNavigate();

  useEffect(()=>{
  const fetchData = async()=>{
    const response = await axios.get(userFind+uid);
    const ProfileData = response.data.user 
      setName(ProfileData.name);
      setMobile(ProfileData.mobile);
      setId(ProfileData._id);
  }
  fetchData()
  },[])

  const handleSubmit =async (e) => {
       e.preventDefault();
       const obj={
        name :name,
        mobile:mobile
       }
       console.log(obj);
       const response = await axios.put(userUpdate+uid,obj);
       console.log(response);
  };

  return (
    <MDBContainer fluid>
      <NavBar />

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <form onSubmit={handleSubmit}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Profile</p>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='user me-3' size='lg' />
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='envelope me-3' size='lg' />
                  <MDBInput label='Your Mobile No.' id='form2' type='number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>

                <div className='mb-4'>
                  {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' /> */}
                  <Link to="/passwordupdate">Click here to Update Password</Link>
                </div>

                <MDBBtn className='mb-4' size='lg' type='submit'>Update</MDBBtn>
              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </form>
      </MDBCard>
    </MDBContainer>
  );
}

export default Profile;
