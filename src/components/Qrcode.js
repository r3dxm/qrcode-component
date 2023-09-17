import React from "react";
import styles from "./Qrcode.module.css";

function Qrcode(props) {
	return (
		<div className={styles.container}>
			<img src={props.image} alt="qr code" />
			<div className={styles.text}>
				<h3>Improve your front-end skills by building projects</h3>
				<p>
					Scan the qr code to visit Frontend mentor and take your coding skills
					to the next level
				</p>
			</div>
		</div>
	);
}

export default Qrcode;
