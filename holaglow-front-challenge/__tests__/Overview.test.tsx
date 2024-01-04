import React, { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Overview from "@/app/overview/page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Overview component", () => {
  it("Render component", async () => {
    render(<Overview />);

    const getText = await screen.findByText(/Overview/i);
    expect(getText).toBeInTheDocument();
  });

  it("Render component but find error message", async () => {
    render(<Overview />);

    await waitFor(() =>
      expect(screen.getByText(/Hubo un error/i)).toBeInTheDocument()
    );
  });
});
