import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "../components/input";

describe("Input Component", () => {
	it("should render the Input component correctly", () => {
		render(
			<Input
				id="Test Input"
				name="Test name"
				label="Test Input"
				placeholder="Test placeholder"
			/>
		);

		expect(screen.getByLabelText("Test Input")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Test placeholder")).toBeInTheDocument();
	});

	it("should update the value of the input field", async () => {
		render(
			<Input
				id="Test Input"
				name="Test name"
				label="Test Input"
				placeholder="Test placeholder"
			/>
		);
		userEvent.type(
			screen.getByPlaceholderText("Test placeholder"),
			"Value was entered"
		);

		await waitFor(() => {
			expect(screen.getByDisplayValue("Value was entered")).toBeTruthy();
		});
	});
});
