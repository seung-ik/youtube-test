import React from "react";

const KakaoTest = () => {
	const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
	const kakaoRedirectUri = "http://localhost:3000/kakao";
	const kakaohref = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}
&redirect_uri=${kakaoRedirectUri}&response_type=code`;

	return (
		<div style={{ marginTop: "30px" }}>
			<a href={kakaohref}>
				<button>카카오 로그인 하기</button>
			</a>
		</div>
	);
};

export default KakaoTest;
