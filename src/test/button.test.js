import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "../components/button";

describe("Button Component", () => {
	it("should render the Button component correctly", () => {
		render(<Button>Primary Button</Button>);

		expect(screen.getByText("Primary Button")).toBeInTheDocument();
	});
});
