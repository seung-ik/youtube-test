import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Oauth from "./page/Oauth";
import KakaoTest from "./page/KakaoTest";
import Kakao from "./page/Kakao";
import NaverTest from "./page/NaverTest";
import Naver from "./page/Naver";
import GoogleTest from "./page/GoogleTest";
import Google from "./page/Google";
import KakaoPay from "./page/KakaoPay";

const App = () => {
	return (
		<BrowserRouter>
			<Link to="/">
				<button>카카오</button>
			</Link>
			<Link to="/n">
				<button>네이버</button>
			</Link>
			<Link to="/g">
				<button>구글</button>
			</Link>
			<Link to="/kakaopay">
				<button>카카오페이</button>
			</Link>
			<Routes>
				<Route path="/" element={<KakaoTest />} />
				<Route path="/kakao" element={<Kakao />} />
				<Route path="/n" element={<NaverTest />} />
				<Route path="/naver" element={<Naver />} />
				<Route path="/g" element={<GoogleTest />} />
				<Route path="/google" element={<Google />} />
				<Route path="/complete" element={<Oauth />} />
				<Route path="/study" element={<Home />} />
				<Route path="/kakaopay" element={<KakaoPay />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
