import React from "react";
import "./input.css";

function Input({ label, type = "text", name, placeholder = "", ...rest }) {
	return (
		<div className="custom-input">
			<label htmlFor="email">{label}</label>
			<input name={name} placeholder={placeholder} type={type} {...rest} />
		</div>
	);
}

export default Input;
