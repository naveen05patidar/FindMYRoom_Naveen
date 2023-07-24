// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Home from './Screens/Home';
// import {Routes,Route} from "react-router-dom"
// import Login from './Screens/Login';
// import SignUp from './Screens/SignUp';
// import Contact from './Screens/Contact';
// import Dashboard from './Screens/Dashboard';
// import UploadRoom from './Screens/Upload';
// import Cart from './Screens/Carts';
// import Profile from './Screens/Profile';

// function App() {
//   return (
//     <div>
//       <div>
//         <Routes>
//           <Route exact path="/" element={<Home></Home>} ></Route>
//           <Route path="/login" element={<Login></Login>} ></Route>
//           <Route path="/signup" element={<SignUp></SignUp>} ></Route>
//           <Route path="/contact" element={<Contact></Contact>} ></Route>
//           <Route path="/about" element={<Home></Home>} ></Route>
//           <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
//           <Route path="/uploadroom" element={<UploadRoom></UploadRoom>} ></Route>
//           <Route path="/carts" element={<Cart></Cart>} ></Route>
//           <Route path="/profile" element={<Profile></Profile>} ></Route>

//         </Routes>
//       </div>

//     </div>
//   );
// }

// export default App;



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './pd.css';
import Home from './Screens/Home';
import { Routes, Route } from "react-router-dom"
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Contact from './Screens/Contact';
import Dashboard from './Screens/Dashboard';
import UploadRoom from './Screens/Upload';
import Cart from './Screens/Carts';
import Profile from './Screens/Profile';
import MyRoom from './Screens/MyRoom';
import OrderDetails from './Screens/OrderDetails';

function App() {
  return (
    <div>
      {
        (localStorage.getItem('token')) ?
          <div>
            <div>
              <Routes>
                <Route exact path="/" element={<Home></Home>} ></Route>
                <Route path="/login" element={<Login></Login>} ></Route>
                <Route path="/signup" element={<SignUp></SignUp>} ></Route>
                <Route path="/contact" element={<Contact></Contact>} ></Route>
                <Route path="/about" element={<Home></Home>} ></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
                <Route path="/uploadroom" element={<UploadRoom></UploadRoom>} ></Route>
                <Route path="/carts" element={<Cart></Cart>} ></Route>
                <Route path="/profile" element={<Profile></Profile>} ></Route>
                <Route path="/myorder" element={<MyRoom></MyRoom>} ></Route>
                <Route path="/orderdetails" element={<OrderDetails></OrderDetails>} ></Route>
              </Routes>
            </div>
          </div>
          :
           <div> 
              <Routes>
             <Route exact path="/" element={<Home></Home>} ></Route>
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/signup" element={<SignUp></SignUp>} ></Route>
          <Route path="/contact" element={<Contact></Contact>} ></Route>
          <Route path="/about" element={<Home></Home>} ></Route>
          <Route path="/orderdetails" element={<OrderDetails></OrderDetails>} ></Route>          
          </Routes>

        </div>
      }

    </div>
  );
}

export default App;

