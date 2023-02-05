import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetaDetail = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  

  
 
  useEffect(() => {
    actions.getDetailPlaneta(params.theid)
    

  }, []);

  return (
    
    <div className="bg-dark">
    <br />
    
<h1 className="text-warning">{store.detailPlaneta?.properties?.name}</h1>
<div className="card mb-3" style={{width: "720px", margin: "20px"}}>
    <div className="row g-0">
      <div className="col-md-4 align-self-center" style={{padding: "5px"}}>
      <img
        src={
          "https://starwars-visualguide.com/assets/img/planetas/" +
          params.theid +
          ".jpg"}
      className="img-fluid rounded-start" style={{width: "90%"}} />
      </div>
    <div className="col-md-6">
    <div className="card-body">
      <p className="card-text text-warning">Name: {store.detailPlaneta?.properties?.name}</p>
      <p className="card-text text-warning">Diameter: {store.detailPlaneta?.properties?.diameter}</p>
      <p className="card-text text-warning">Rotation period:{store.detailPlaneta?.properties?.rotation_period}</p>
      <p className="card-text text-warning">Orbital period:{store.detailPlaneta?.properties?.orbital_period}</p>
      <p className="card-text text-warning">Gravity:{store.detailPlaneta?.properties?.gravity}</p>
      <p className="card-text text-warning">Population:{store.detailPlaneta?.properties?.population}</p>
                
    </div>
    </div>
    </div>
</div>
<div>
      <Link to="/">
        <span className="btn btn-warning btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
      </div>
    </div>
  );
};

