import { render, screen } from "@testing-library/react";
import Track from "./track";

test("renders learn react link", () => {
	render(<Track />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
