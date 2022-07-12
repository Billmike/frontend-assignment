import { Button } from "../components/button";

export default {
	title: "Button",
	component: Button,
};

function ButtonTemplate(args) {
	return (
		<Button theme={args.theme} {...args}>{`${
			args.theme === "gold" ? "Primary" : "Secondary"
		} Button: ${args.children}`}</Button>
	);
}

export const ButtonStory = ButtonTemplate.bind({});

ButtonStory.args = {
	children: "Feel free to edit me",
	onClick: () => alert("I was clicked!"),
};
