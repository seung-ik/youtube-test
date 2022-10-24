import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const prevToken = localStorage.getItem("accessToken");
	const clientId = process.env.REACT_APP_CLIENT_ID;
	const apiKey = process.env.REACT_APP_API_KEY;
	const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=https://localhost:3000/complete&scope=https://www.googleapis.com/auth/youtube.readonly&response_type=token`;

	const onClickVideo = async () => {
		const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${apiKey}`);
	};

	const onClickLogout = () => {
		console.log("로그아웃");
		if (prevToken) {
			console.log(prevToken);
			axios.post(`https://oauth2.googleapis.com/revoke?token=${prevToken}`).then((res) => {
				setIsLoggedIn(false);
				localStorage.setItem("accessToken", "");
				alert("로그아웃~");
			});
		}
	};

	useEffect(() => {
		const verifyToken = () => {
			axios
				.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${prevToken}`)
				.then((res) => {
					setIsLoggedIn(true);
					console.log(res);
				})
				.catch((err) => {
					localStorage.setItem("accessToken", "");
					alert("토큰만료");
					setIsLoggedIn(false);
				});
		};

		if (prevToken) {
			verifyToken();
		}
	}, [prevToken]);

	useEffect(() => {
		axios.defaults.headers.common["Authorization"] = `Bearer ${prevToken}`;
		const getSubscribers = async () => {
			await axios.get("https://www.googleapis.com/youtube/v3/channels").then((res) => {
				console.log(res);
			});
		};
		if (isLoggedIn) {
			getSubscribers();
		}
	}, [isLoggedIn, prevToken]);

	return (
		<>
			<h1>youtube test</h1>
			<div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
				{isLoggedIn ? (
					<button onClick={onClickLogout}>로그아웃</button>
				) : (
					<button>
						<a href={url}>유투브 계정인증</a>
					</button>
				)}
				<button onClick={onClickVideo}>비디오</button>
			</div>
			{isLoggedIn && <div>구독자 수 :</div>}
			{/* <iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/nMPCXuvL8EM"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe> */}
		</>
	);
};

export default Home;
