import React from "react";
import "./checkbox.css";

function Checkbox({ label, name, ...rest }) {
	return (
		<div>
			<label className="checkbox-container">
				<p>{label}</p>
				<input type="checkbox" name={name} id={name} {...rest} />
				<span className="checkedmark" id="custom-checkbox" />
			</label>
		</div>
	);
}

export default Checkbox;
