import { render, screen } from "@testing-library/react"
import UpdateProfile from "../components/pages/UpdateProfile";


it("should load contact details text", () => {
    // Arrange
    render(<UpdateProfile />)

    // Act

    // Assertion
    const ContactText = screen.getByText("Contact details");
    expect(ContactText).toBeInTheDocument();
})