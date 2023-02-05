import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Personajes } from "../component/personajes.jsx";
import { Planetas } from "../component/planetas.jsx";
import { Vehiculos } from "../component/vehiculos.jsx";

export const Home = () => {
   const {store}=useContext(Context)
//console.log(store.demo);

 
  return (
    


    <div className="container-fluid bg-dark p-3">
      <h2 style={{ color: "yellow" }}>Personajes</h2>
      <div className="d-flex flex-row overflow-scroll">
        <div className="d-flex">
        {store.personajes.map((item, index) => {
          return <Personajes key={index} name={item.name} id={item.uid} item={item} />;
        })}
        </div>
      </div>

      <h2 style={{ color: "yellow" }}>Planetas</h2>
      <div className="d-flex flex-row overflow-scroll">
      <div className="d-flex">
        {store.planetas.map((item, index) => {
          return <Planetas key={index} name={item.name} id={item.uid} item={item} />;
          
        })}
        </div>
     </div>
     
      <h2 style={{ color: "yellow" }}>Vehiculos</h2>
      <div className="d-flex flex-row overflow-scroll">
      <div className="d-flex">
        {store.vehiculos.map((item, index) => {
          return <Vehiculos key={index} name={item.name} id={item.uid} item={item}  />;
          
        })}
     </div>
     </div>
    </div>
  );
};

