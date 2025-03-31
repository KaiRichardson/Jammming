import { render, screen } from "@testing-library/react";
import Playlist from "./playlist";

test("renders learn react link", () => {
	render(<Playlist />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
