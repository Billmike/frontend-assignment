import React from "react";
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

export default Form;
