import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
// import { Single } from "./views/single";
import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { PersonajeDetail } from "./views/personajesDetails.jsx";
import { PlanetaDetail } from "./views/planetasDetails.jsx";
import { VehiculoDetail } from "./views/vehiculosDetails.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./views/login.jsx";
import { Registro } from "./views/registro.jsx";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />	
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/login" element={<Login />} />
						<Route path="/registro" element={<Registro />} />
						<Route path="/charactersDetail/:theid" element={<PersonajeDetail />} />
						<Route path="/planetsDetail/:theid" element={<PlanetaDetail />} />
						<Route path="/vehiclesDetail/:theid" element={<VehiculoDetail />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
