import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";

import { Checkbox } from "../components/checkbox";

describe("Checkbox Component", () => {
	it("Should render the checkbox component correctly", () => {
		render(<Checkbox />);
	});
});
