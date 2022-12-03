import React from "react";
import axios from "axios";

const KakaoPay = () => {
	const [url, setUrl] = React.useState("");
	const popup = React.useRef(null);

	React.useEffect(() => {
		if (popup?.current?.location?.search) {
			popup.current.close();
		}
	}, [popup?.current?.location?.search]);
	return (
		<div>
			<button
				style={{ marginTop: "50px" }}
				onClick={() => {
					axios.post("http://localhost:5000/payment").then((res) => {
						popup.current = window.open(res.data, "pop01", "top=10, left=10, width=500, height=700, status=no, menubar=no, toolbar=no, resizable=no");
					});
				}}
			>
				결제
			</button>
			<button onClick={() => console.log(popup.current.location.search)}>look</button>
			<button onClick={() => popup.current.close()}>닫기</button>
		</div>
	);
};

export default KakaoPay;
