import React from "react";
import "./form.css";

function Form({ children, onValidate }) {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				const formElements = Array.from(event.currentTarget);
				const formState = formElements.reduce((acc, currentElement) => {
					if (currentElement.name) {
						acc[currentElement.name] = currentElement.value;
					}

					return acc;
				}, {});

				if (typeof onValidate === "function") {
					const validationRules = onValidate();
				  validationRules.reduce((error, currentRule) => {
						const inputWithError = document.getElementsByName(
							currentRule.field
						)[0];
						const div = document.createElement("div");
						const errorDiv = document.getElementById(
							`span-${currentRule.field}-error`
						);
						errorDiv?.remove();

						if (!currentRule.rule.test(formState[currentRule.field])) {
							error[currentRule.field] = currentRule.message;
							div.className = "custom-error";
							div.id = `span-${currentRule.field}-error`;
							div.innerText = currentRule.message;
							inputWithError.insertAdjacentElement("afterend", div);
							inputWithError.style.borderColor = "#F54545";
						} else {
							error[currentRule.field] = "";
							inputWithError.style.borderColor = "";
						}

						return error;
					}, {});
				}
			}}
		>
			{children}
		</form>
	);
}

export default Form;
