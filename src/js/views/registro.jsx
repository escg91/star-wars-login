import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {Navigate} from "react-router-dom"
import PropTypes from "prop-types";

export const Registro = () => {
	const { store, actions } = useContext(Context);
    const[email,setEmail]=useState("")
    const[contraseña,setContraseña]=useState("")
    const[nombre,setNombre]=useState("")
    const[apellido,setApellido]=useState("")

	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
    
    function registro(e){
        e.preventDefault()
        if (nombre!= "" && apellido!= "" && email != "" && contraseña!= "") {
        actions.registro(email, contraseña, nombre, apellido)
        } else {
            alert("Faltan datos por completar")
        }
    }
    

    return (
		<div className="container w-50 mb-5">
            <h1 className="text-center text-warning border-bottom border-warning">REGISTRO</h1>
{store.usuariologueado === true ? <Navigate to="/"/>:
            <form onSubmit={registro}>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input type="password" className="form-control" value={contraseña} onChange={(e)=>setContraseña(e.target.value)} id="contraseña"/>
        </div>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} id="nombre"/>
        </div>

        <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" value={apellido} onChange={(e)=>setApellido(e.target.value)} id="apellido"/>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
   <button type="submit" className="btn btn-lg btn-warning">Submit</button>

   </div>
        </form>
}
</div>
	);

};


Registro.propTypes = {
	match: PropTypes.object
};