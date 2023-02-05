import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starImage from "../../img/starwars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-black p-2">
      <div className = "container-fluid" ></div>
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img src={starImage} width="80" height="50" />
        </span>
      </Link>

      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-outline-warning">Favorites</button>
        </Link>
        <ul className="dropdown-menu">
          {store.favorites.map((item, id) => (
            <li key={id}>
              <a
                className="dropdown-item"
                onClick={() => actions.addFavorites()}
              >
                {item} 
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )}
