import React, {useState} from "react";
import LoginForm from "./LoginForm";

export default function Modal(){
    const  adminUser= {
        email : "admin@admin.com",
        password : "admin"
      }
      const[user, setUser] = useState({name:"", email:""});
      const[error, setError] = useState("");
    
    
      const Login = details =>{
        console.log(details);
        
        if(details.email == adminUser.email && details.password == adminUser.password){
          console.log("Logged in");
          setUser({
            name: details.name,
            email: details.email
          })
        } else{
          console.log("Details do not match!");
          setError("Details do not match!");
        }
      }

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    const Logout = () => {
        console.log("Logout");
        setUser({name:"", email:""});
      }

    return(
        <>
        
        <button onClick={toggleModal} className="btn-modal">LOGIN</button>
        {modal && (
        <div className="modal"> 
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
        {(user.email != "") ? (
        <div className = "welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
        </div>
        ): (
        <LoginForm Login={Login} error={error}/>
        )}
        </div>
        </div>
        )}
        </>
    );
}