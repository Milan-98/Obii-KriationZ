import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "../app/page";

describe("Home", () => {
  it("increment and set", async () => {
    user.setup();
    render(<Home />);
    const inp = screen.getByRole("spinbutton");
    const butto1 = screen.getByRole("button",{name : "Increment me"})
    const butto2 = screen.getByRole("button",{name : "set"})
    await user.tab();
    expect(butto1).toHaveFocus();
    await user.tab();
    expect(inp).toHaveFocus();
    await user.tab();
    expect(butto2).toHaveFocus();
  });
});
