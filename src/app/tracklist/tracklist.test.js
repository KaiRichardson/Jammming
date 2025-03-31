import { render, screen } from "@testing-library/react";
import Tracklist from "./tracklist";

test("renders learn react link", () => {
	render(<Tracklist />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
