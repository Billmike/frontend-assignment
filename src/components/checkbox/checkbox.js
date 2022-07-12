import React from "react";
import PropType from "prop-types";
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

Checkbox.propTypes = {
	label: PropType.string.isRequired,
};

export default Checkbox;
