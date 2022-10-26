import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Google = () => {
	const navigate = useNavigate();
	const token = new URL(window.location.href).hash.split("access_token=")[1];
	console.log(token);

	useEffect(() => {
		function getToken(_token) {
			axios
				.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${_token}`, {
					headers: {
						Authorization: `Bearer ${_token}`,
					},
				})
				.then((data) => {
					console.log(data);
					//연결 끊는거 해야댐
				})
				.catch((e) => console.log("oAuth token expired"));
		}

		if (token) {
			getToken(token);
		}
	}, [token]);

	return <div>Google</div>;
};

export default Google;
