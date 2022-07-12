import React from "react";
import "./checkbox.css";

function Checkbox({ label, name, labelStyle = {}, ...rest }) {
	return (
		<div className="custom-checkbox">
			<input name={name} type="checkbox" {...rest} />
			<label htmlFor={name} style={labelStyle}>
				{label}
			</label>
		</div>
	);
}

export default Checkbox;
