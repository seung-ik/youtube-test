import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
	const prevToken = localStorage.getItem("accessToken");
	const clientId = process.env.REACT_APP_CLIENT_ID;
	const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=https://localhost:3000/complete&scope=https://www.googleapis.com/auth/youtube.readonly&response_type=token`;

	const onClickVideo = async () => {
		const res = await axios.get(
			"https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDqN5pmnzUDNhkfgDlF2m7iXNFkLWFwW-w"
		);

		console.log(res);
	};

	useEffect(() => {
		const verifyToken = () => {
			axios
				.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${prevToken}`)
				.then((res) => console.log(res.data))
				.catch((err) => alert("토큰만료"));
		};
		if (prevToken) {
			verifyToken();
		}
	}, [prevToken]);

	return (
		<div>
			<h1>youtube test</h1>
			<button>
				<a href={url}>유투브 계정인증</a>
			</button>
			<button onClick={onClickVideo}>비디오</button>
		</div>
	);
};

export default Home;
