import React from "react";
import "./form.css";

function Form({ children, onValidate }) {
	return (
		<form
			noValidate
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
						const customCheckbox = document.getElementById("custom-checkbox");
						const errorDiv = document.getElementById(
							`span-${currentRule.field}-error`
						);
						errorDiv?.remove();

						console.log("input", inputWithError);

						if (currentRule.rule) {
							if (currentRule.rule === "required") {
								// handle custom checkbox input
								if (
									inputWithError.type === "checkbox" &&
									!inputWithError.checked
								) {
									error[currentRule.field] = currentRule.message;
									div.className = "custom-error";
									div.id = `span-${currentRule.field}-error`;
									div.innerText = currentRule.message;
									inputWithError?.insertAdjacentElement("afterend", div);
									customCheckbox.style.borderColor = "red";
								} else {
									error[currentRule.field] = "";
									customCheckbox.style.borderColor = "";
								}
							} else {
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
							}
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
