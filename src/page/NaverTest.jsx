import React from "react";

const NaverTest = () => {
	const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID;
	const naverRedirectUri = "http://localhost:3000/naver";
	const naverhref = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&state=12ds1fas&redirect_uri=${naverRedirectUri}`;

	return (
		<div style={{ marginTop: "30px" }}>
			<a href={naverhref}>
				<button>네이버 로그인 하기</button>
			</a>
		</div>
	);
};

export default NaverTest;
