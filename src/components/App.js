import logo from "../images/logo.svg";
import { Input } from "./input";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Form } from "./form";
import "../index.css";
import { validEmailRegex, validPasswordRegex } from "../utils";

const App = () => {
	return (
		<>
			<img src={logo} alt="Timescale" />
			<Form
				onValidate={() => {
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
				}}
			>
				<div className="form-container">
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
				</div>
			</Form>
		</>
	);
};

export default App;
