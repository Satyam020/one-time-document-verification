// import logo from "./logo.svg";
import "./App.css";
import {  Route, Routes } from "react-router-dom";


/* imports: custom components  */
import Prenavbar from "./components/common/prenavbar/prenavbar";
import Navbar from "./components/common/navbar/navbar";
import Home from "./components/feature/home/home";
import UserDetails from "./components/feature/userDetails/userDetails";
import About from "./components/feature/about/about";
import Verify from "./components/feature/verify/verify";
import Login from "./components/feature/login/login";
import SignUp from "./components/feature/signUp/signUp";
// import Footer from "./components/common/footer/footer";
import UserList from "./components/feature/usersList/usersList";
import { useEffect } from "react";
import  Help from"../src/components/common/help/help";



function App() {

  useEffect(() => {

    return () => {
      localStorage.setItem('authData', null);
    };
  }, []);
  
  return (
    <div>
        <Prenavbar />
        <Navbar />
        <div className="main-container">
          <div className="main-content-wrapper d-flex justify-content-center">
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="userDetails" element={<UserDetails/>}></Route>
                <Route path="UserList" element={<UserList/>}></Route>
                <Route path="about" element={<About/>}></Route>
                <Route path="verify" element={<Verify/>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path="signUp" element={<SignUp/>}></Route>
                <Route path="help" element={<Help/>}></Route>

            </Routes>
          </div>
        </div>
        {/* <div className="footer-wrapper">
          <Footer/>
        </div> */}
    </div>
  );
}

export default App;
