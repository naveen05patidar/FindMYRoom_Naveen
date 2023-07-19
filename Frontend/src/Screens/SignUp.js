import React, { useState } from 'react';
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
import NavBar from '../Cards/Navbar';
import axios from 'axios';
import { userPost } from '../ApiRouter';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repass, setRePass] = useState('');
  const [mobile, setMobile] = useState('');
  

  const navigate = useNavigate();

  const handleSubmit =async (e) => {
       e.preventDefault();
    if (password === repass) {
      const obj = {
        name: name,
        email: email,
        password: password,
        mobile:mobile
      };

      try {
        const response = await axios.post(userPost, obj);
        if (response.data.success === true) {
          alert('Data saved');
          navigate('/login'); // Replace 'navigate' with your navigation function
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please recheck your password; it is not the same');
    }
  };

  return (
    <MDBContainer fluid>
      <NavBar />

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <form onSubmit={handleSubmit}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign up</p>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='user me-3' size='lg' />
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='envelope me-3' size='lg' />
                  <MDBInput label='Your Email' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='envelope me-3' size='lg' />
                  <MDBInput label='Your Mobile No.' id='form2' type='number' onChange={(e) => setMobile(e.target.value)} />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput label='Password' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='key me-3' size='lg' />
                  <MDBInput label='Repeat your password' id='form4' type='password' onChange={(e) => setRePass(e.target.value)} />
                </div>

                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='mb-4' size='lg' type='submit'>Register</MDBBtn>
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

export default SignUp;
