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
					console.log("state", formState);
					console.log("type of onValidate", validationRules);
					const createErrors = validationRules.reduce((error, currentRule) => {
						if (!currentRule.rule.test(formState[currentRule.field])) {
							error[currentRule.field] = currentRule.message;
							const inputWithError = document.getElementsByName(
								currentRule.field
							)[0];
							const span = document.createElement("span");
							span.className = "custom-error";
							span.innerHTML = currentRule.message;
							inputWithError.insertAdjacentElement("afterend", span);
							inputWithError.style.borderColor = "#F54545";
						}

						return error;
					}, {});

					console.log("the errors", createErrors);
				}
			}}
		>
			{children}
		</form>
	);
}

export default Form;
