import React from "react";
import PropTypes from "prop-types";

import { handleSubmit } from "../../utils";
import "./form.css";

function Form({ children, onValidate, onSubmit }) {
	return (
		<form
			noValidate
			onSubmit={(event) => {
				handleSubmit(event, onValidate, onSubmit);
			}}
		>
			{children}
		</form>
	);
}

Form.propTypes = {
	children: PropTypes.element.isRequired,
	onValidate: PropTypes.func,
	onSubmit: PropTypes.func,
};

export default Form;
