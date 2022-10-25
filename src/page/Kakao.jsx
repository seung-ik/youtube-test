import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Kakao = () => {
	const navigate = useNavigate();
	// const code = window.location.search.split("?code=")[1];
	const code = new URL(window.location.href).searchParams.get("code");

	const clientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
	const redirectUri = "http://localhost:3000/kakao";
	const grant_type = "authorization_code";
	const [token, setToken] = useState("");

	//인가코드로 엑세스토큰받기
	useEffect(() => {
		function getToken(_code) {
			console.log(code, "확인");
			axios
				.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${clientId}&redirect_uri=${redirectUri}&code=${_code}`)
				.then(({ data }) => setToken(data.access_token));
		}

		if (code) {
			getToken(code);
		}
	}, [code, clientId]);

	//엑세스토큰으로 유저정보 받기
	useEffect(() => {
		if (token) {
			console.log("token", token);
			axios
				.get("https://kapi.kakao.com/v2/user/me", {
					body: {
						property_keys: ["kakao_account.email"],
					},
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(({ data }) => {
					console.log("카카오유저정보 전체: ", data);
					console.log("이메일: ", data.kakao_account.email);
					// 현재 토큰만료 만 하는 로그아웃 계정은 로그인 되어있음
					// axios
					// 	.get(`https://kauth.kakao.com/oauth/logout?client_id=${clientId}&logout_redirect_uri=http://localhost:3000`, {
					// 		headers: { Authorization: `Bearer ${token}` },
					// 	})
					// 	.then((res) => {
					// 		console.log(res);
					// 		navigate("/");
					// 	})
					// 	.catch((err) => console.log(err));

					// 카카오계정 연결끊기 랑 로그아웃
					axios
						.get(`https://kapi.kakao.com/v1/user/unlink`, {
							headers: { Authorization: `Bearer ${token}` },
						})
						.then((res) => {
							console.log("연결끊기완료", res);
							navigate("/");
						})
						.catch((err) => console.log(err));
				});
		}
	}, [navigate, token]);

	return <div>Kakao</div>;
};

export default Kakao;
