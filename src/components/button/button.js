import React from "react";
import "./button.css";

function getThemeStyle(theme, style) {
	if (theme === "gold") {
		return style;
	}

	return {
		...style,
		color: "#fff",
		backgroundColor: "#1472EC",
	};
}

function Button({ children, theme = "gold", style = {}, ...rest }) {
	return (
		<button
			className="custom-button"
			style={getThemeStyle(theme, style)}
			{...rest}
		>
			{children}
		</button>
	);
}

export default Button;
