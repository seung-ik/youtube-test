import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Naver = () => {
	const navigate = useNavigate();
	// const code = window.location.search.split("?code=")[1];
	const code = new URL(window.location.href).searchParams.get("code");

	const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
	const clientSecret = process.env.REACT_APP_NAVER_CLIENT_SECRET;
	const redirectUri = "http://localhost:3000/naver";
	const grant_type = "authorization_code";
	const [token, setToken] = useState("");

	//인가코드로 엑세스토큰받기
	useEffect(() => {
		function getToken(_code) {
			axios
				.post(
					`https://nid.naver.com/oauth2.0/token?grant_type=${grant_type}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${_code}&state=12ds1fas`
				)
				.then(({ data }) => {
					console.log(data);
					setToken(data.access_token);
				});
		}

		if (code) {
			getToken(code);
		}
	}, [code, clientId, clientSecret]);

	// 엑세스토큰으로 유저정보 받기
	useEffect(() => {
		if (token) {
			console.log("123123123", token);
			axios
				.get("https://openapi.naver.com/v1/nid/me", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(({ data }) => {
					console.log("네이버유저정보 전체: ", data);
				});
		}
	}, [navigate, token]);

	return <div>Naver</div>;
};

export default Naver;
