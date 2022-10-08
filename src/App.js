import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Oauth from "./page/Oauth";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/complete" element={<Oauth />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
