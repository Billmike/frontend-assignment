import React from "react";

function Form({ children }) {
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

				console.log("state", formState);
			}}
		>
			{children}
		</form>
	);
}

export default Form;
