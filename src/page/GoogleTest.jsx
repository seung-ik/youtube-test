import React from "react";

const GoogleTest = () => {
	const googleClientId = "628505447764-8ashfjb72t8tc9pq3ienf105viq9pdjs.apps.googleusercontent.com";
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
