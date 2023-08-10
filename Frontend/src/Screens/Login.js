import React,{useState} from 'react';
import { setToken, setUserId } from '../Actions/actions';
import { useDispatch } from 'react-redux';

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
}
from 'mdb-react-ui-kit';
import NavBar from '../Cards/Navbar';
import { userLogin } from '../ApiRouter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if (email !== null &&  password !==  null) {
      const obj = {
        email: email,
        password: password
      };
      try {
        let response = await axios.post(userLogin,obj);

        if(response.data.success === true){
          const {token} = response.data;
          localStorage.setItem('token',token);
          dispatch(setUserId(email));
          navigate('/dashboard');
          dispatch(setToken(token));

        }
      } catch (error) {
        console.log(error);
      }
     
    } else {
      alert('Please recheck your password is not the same');
    }
  }

  return (
    <MDBContainer fluid>
        <NavBar></NavBar>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <form onSubmit={handleSubmit}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' onChange={(e)=>setEmail(e.target.value)} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
        </form>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;