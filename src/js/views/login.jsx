import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {Navigate} from "react-router-dom"
import PropTypes from "prop-types";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const[email,setEmail]=useState("")
    const[contraseña,setContraseña]=useState("")

	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
    
    function login(e){
        e.preventDefault()
        if (email != "" && contraseña != "") {
        actions.login(email, contraseña)
        } else {
            alert("Faltan datos por completar")
        }
    }
    

    return (
		<div className="container w-50 mb-5">
            <h1 className="text-center text-warning border-bottom border-warning">LOG IN</h1>
{store.usuariologueado === true ? <Navigate to="/"/>:
            <form onSubmit={login}>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input type="password" className="form-control" value={contraseña} onChange={(e)=>setContraseña(e.target.value)} id="contraseña"/>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
   <button type="submit" className="btn btn-lg btn-warning">Submit</button>

   </div>
        </form>
}
</div>
	);

};


Login.propTypes = {
	match: PropTypes.object
};