import React from "react";

const NaverTest = () => {
	const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
	const kakaoRedirectUri = "http://localhost:3000/naver";
	const kakaohref = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}
&redirect_uri=${kakaoRedirectUri}&response_type=code`;

	return (
		<div style={{ marginTop: "30px" }}>
			<a href={kakaohref}>
				<button>네이버 로그인 하기</button>
			</a>
		</div>
	);
};

export default NaverTest;
