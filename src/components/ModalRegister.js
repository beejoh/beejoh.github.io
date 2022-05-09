import React, {useState} from "react";
import RegisterForm from "./RegisterForm"

export default function ModalRegister(){
    const  adminUser= {
        email : "admin@admin.com",
        password : "admin"
      }
      const[user, setUser] = useState({name:"", email:""});
      const[error, setError] = useState("");
    
    
      const Register = details =>
        console.log(details);
        

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <>
        <button onClick={toggleModal} className="btn-modal">REGISTER</button>
        {modal && (
        <div className="modal"> 
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
            <RegisterForm Register={Register}/>
        </div>
        </div>
        )}
        </>
    );
}