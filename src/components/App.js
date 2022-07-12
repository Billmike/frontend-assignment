import logo from "../images/logo.svg";
import { Input } from "./input";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Form } from "./form";
import { Success } from "./success";
import "../index.css";
import { formValidators } from "../utils";
import React from "react";

const App = () => {
	const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

	return (
		<>
			<img src={logo} alt="Timescale" />
			<Form
				onValidate={formValidators}
				onSubmit={(values) => {
					/**
					 * This function is not called if there's an error in the form.
					 * In a real world application, we'd need the form values to send to an API or make a request
					 * We can get that from the values here. Instead, for now we just set the state
					 * of the form to submitted
					 */
					setIsFormSubmitted(true);
				}}
			>
				<div className="form-container">
					{!isFormSubmitted && (
						<>
							<h2 className="heading">Let’s sign you up for Timescale Cloud</h2>
							<Input
								label="Email address"
								placeholder="smith@gmail.com"
								type="email"
								name="email"
								style={{ marginBlock: 10 }}
							/>
							<Input
								label="Password"
								placeholder="6 characters or more"
								type="password"
								name="password"
								style={{ marginBlock: 10 }}
							/>
							<Checkbox
								label="I agree to the Timescale Cloud Terms of Service"
								name="terms"
							/>
							<Button style={{ marginBlock: "1.75rem" }} type="submit">
								Sign Up
							</Button>
						</>
					)}
					{isFormSubmitted && <Success />}
				</div>
			</Form>
		</>
	);
};

export default App;
