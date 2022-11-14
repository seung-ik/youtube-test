import React from "react";

const GoogleTest = () => {
	const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	const googleRedirectUri = "http://localhost:3000/google";
	const googlehref = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${googleRedirectUri}&client_id=${googleClientId}`;

	return (
		<div style={{ marginTop: "30px" }}>
			<a href={googlehref}>
				<button>구글 로그인 하기</button>
			</a>
		</div>
	);
};

export default GoogleTest;
