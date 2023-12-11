import { render, screen } from "@testing-library/react"
import Welcome from "../components/pages/Welcome"

it("should load text Welcome", () => {
    render(<Welcome />)

    const WelcomeText = screen.getByText("Welcome to expense tracker!!!");

    expect(WelcomeText).toBeInTheDocument();

})