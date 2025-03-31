import { render, screen } from "@testing-library/react";
import SearchResults from "./search-results";

test("renders learn react link", () => {
	render(<SearchResults />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
