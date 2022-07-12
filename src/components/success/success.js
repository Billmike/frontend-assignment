import React from "react";
import "./success.css";

import eonCar from "../../images/eon-car.svg";
import checkMark from "../../images/Union.svg";

function Success() {
	return (
		<div className="success-container">
			<img src={checkMark} alt="Success checkmark" />
			<h2>Thank you!</h2>
			<p>Please check your email.</p>
			<img src={eonCar} alt="Success" />
		</div>
	);
}

export default Success;
