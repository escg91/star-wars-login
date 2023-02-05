import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiculoDetail = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  

 

  useEffect(() => {
    actions.getDetailVehiculo(params.theid)  }, []);

  return (
    <div className="bg-dark">
    <br />
    
<h1 className="text-warning">{store.detailVehiculo?.properties?.name}</h1>
<div className="card mb-3" style={{width: "720px", margin: "20px"}}>
    <div className="row g-0">
      <div className="col-md-4 align-self-center" style={{padding: "5px"}}>
      <img
        src={
          "https://starwars-visualguide.com/assets/img/vehiculos/" +
          params.theid +
          ".jpg"}
      className="img-fluid rounded-start" style={{width: "90%"}} />
      </div>
    <div className="col-md-6">
    <div className="card-body">
      <p className="card-text text-warning">Name: {store.detailVehiculo?.properties?.name}</p>
      <p className="card-text text-warning">Model: {store.detailVehiculo?.properties?.model}</p>
      <p className="card-text text-warning">Vehicle class: {store.detailVehiculo?.properties?.vehicle_class}</p>
      <p className="card-text text-warning">Manufacturer: {store.detailVehiculo?.properties?.manufacturer}</p>
      <p className="card-text text-warning">Cost in Credits: {store.detailVehiculo?.properties?.cost_in_credits}</p>
      <p className="card-text text-warning">Passengers: {store.detailVehiculo?.properties?.passengers}</p>
                
    </div>
    </div>
    </div>
</div>
        <Link to="/">
          <span className="btn btn-warning btn-lg" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    
  );
};
