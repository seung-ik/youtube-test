import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Oauth from "./page/Oauth";
import KakaoTest from "./page/KakaoTest";
import Kakao from "./page/Kakao";
import NaverTest from "./page/NaverTest";

const App = () => {
	return (
		<BrowserRouter>
			<Link to="/">
				<button>카카오</button>
			</Link>
			<Link to="/n">
				<button>네이버</button>
			</Link>
			<Link to="/study">
				<button>2차시도</button>
			</Link>
			<Routes>
				<Route path="/" element={<KakaoTest />} />
				<Route path="/kakao" element={<Kakao />} />
				<Route path="/n" element={<NaverTest />} />
				<Route path="/complete" element={<Oauth />} />
				<Route path="/study" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
