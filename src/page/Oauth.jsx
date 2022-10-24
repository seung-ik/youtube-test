import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Oauth = () => {
	const navigate = useNavigate();
	const accessToken = window.location.href.split("#access_token=")[1];
	localStorage.setItem("accessToken", accessToken);

	useEffect(() => {
		if (accessToken) {
			navigate("/");
		}
	}, []);

	return <div>...</div>;
};

export default Oauth;
