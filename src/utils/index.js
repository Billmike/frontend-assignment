export const validEmailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validPasswordRegex = /^(?=.{6,}$)(?=.*[0-9])(?=.*\W).*$/;

export function handleSubmit(event, onValidate, onSubmit) {
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
		const formErrors = validationRules.reduce((error, currentRule) => {
			const inputWithError = document.getElementsByName(currentRule.field)[0];
			const div = document.createElement("div");
			const customCheckbox = document.getElementById("custom-checkbox");
			const errorDiv = document.getElementById(
				`span-${currentRule.field}-error`
			);

			errorDiv?.remove();

			if (currentRule.rule) {
				if (currentRule.rule === "required") {
					// handle custom checkbox input
					if (inputWithError.type === "checkbox" && !inputWithError.checked) {
						error[currentRule.field] = currentRule.message;
						div.className = "custom-error";
						div.id = `span-${currentRule.field}-error`;
						div.innerText = currentRule.message;
						inputWithError?.insertAdjacentElement("afterend", div);
						customCheckbox.style.borderColor = "#F54545";
					} else {
						error[currentRule.field] = null;
						customCheckbox.style.borderColor = "";
					}
				} else {
					if (!currentRule.rule.test(formState[currentRule.field])) {
						createErrorMessage({
							error,
							currentRule,
							div,
							inputElement: inputWithError,
							formState,
						});
					} else {
						error[currentRule.field] = null;
						inputWithError.style.borderColor = "";
					}
				}
			}

			return error;
		}, {});

		const isFormValid =
			Object.values(formErrors).filter((value) => value !== null).length === 0;

		if (!isFormValid) {
			return;
		}

		onSubmit(formState);
	}
}

function createErrorMessage({
	error,
	currentRule,
	div,
	inputElement,
	formState,
}) {
	if (!currentRule.rule.test(formState[currentRule.field])) {
		error[currentRule.field] = currentRule.message;
		div.className = "custom-error";
		div.id = `span-${currentRule.field}-error`;
		div.innerText = currentRule.message;
		inputElement.insertAdjacentElement("afterend", div);
		inputElement.style.borderColor = "#F54545";
	}
}

export function formValidators() {
	return [
		{
			field: "email",
			rule: validEmailRegex,
			message: "Please provide a valid email address",
		},
		{
			field: "password",
			rule: validPasswordRegex,
			message:
				"Password must be at least 6 characters long, have 1 number, and a special character ",
		},
		{
			field: "terms",
			rule: "required",
			message: "Required",
		},
	];
}