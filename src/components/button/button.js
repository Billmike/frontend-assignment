import React from "react";
import PropType from "prop-types";
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

Button.propTypes = {
	children: PropType.element.isRequired,
	theme: PropType.oneOf(["gold", "blue"]),
};

export default Button;
