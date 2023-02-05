// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Single = (props) => {
//   const { store, actions } = useContext(Context);
//   const params = useParams();
//   const [detailCharacter, setDetailCharacter] = useState({});
  

//   function getDetailCharacter() {
//     fetch("https://www.swapi.tech/api/people/" + params.theid)
//       .then((response) => response.json())
//       .then((data) => console.log(data.result))
//       .then((data) => setDetailCharacter(data.result.properties));
      
//   }

 
//   useEffect(() => {
//     getDetailCharacter()
    

//   }, []);

//   return (
//     <div className="jumbotron">
//       <h1 className="display-4">
//         This will show the demo element: {store.demo[params.theid].title}
//       </h1>
//       <div>
//         <h3>{characters.name}</h3>
//         <p>{characters.gender}</p>
//         <p>{characters.hair}</p>
//         <p>{characters.eyes}</p>
//       </div> 
//       <div>
//         <h3>{planets.name}</h3>
//       </div>
// 	  <div>
//         <h3>{vehicles.name}</h3>
//       </div>
//       <hr className="my-4" />

//       <Link to="/">
//         <span className="btn btn-primary btn-lg" href="#" role="button">
//           Back home
//         </span>
//       </Link>
//     </div>
//   );
// };

// Single.propTypes = {
//   match: PropTypes.object,
// };
