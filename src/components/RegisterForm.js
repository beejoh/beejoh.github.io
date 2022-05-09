import React, {useState} from "react";

function RegisterForm({Register}){
    const[details, setDetails] = useState({name:"", email:"", password:""})

    const submitHandler = e => {
        e.preventDefault();

        Register(details);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="nameReg" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email"> Email:</label>
                    <input type="email" name="email" id="emailReg" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="passwordReg" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="REGISTER"/>
            </div>
        </form>
    )
}
export default RegisterForm;