import React from "react";
import Modal from "./Modal";
import Logo from "../assets/nike.png";
import ModalRegister from "./ModalRegister";

function Navbar(){

    return(
        <>
        <div className="navbar">
            <div className="navbar-left"> 
            <img className="logo" src ={Logo}></img>
            </div>
            <div className="navbar-right"> 
            <Modal/>
            <ModalRegister/>
             </div>
            
        </div>
         </>
    )
}

export default Navbar