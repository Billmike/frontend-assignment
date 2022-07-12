import React from "react";
import "./input.css";

function Input({ label, type = "text", name, placeholder = "", id, ...rest }) {
	return (
		<div className="custom-input">
			<label aria-labelledby={id || name} htmlFor={id || name}>
				{label}
			</label>
			<input
				name={name}
				id={id || name}
				placeholder={placeholder}
				type={type}
				{...rest}
			/>
		</div>
	);
}

export default Input;
