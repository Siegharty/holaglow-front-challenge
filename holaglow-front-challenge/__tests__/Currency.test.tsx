import CurrencyDetail from "@/components/CurrencyDetail/CurrencyDetail";
import { render, screen } from "@testing-library/react";

describe("Currency Detail Component Test", () => {
  it("Render Component with existing currency", () => {
    render(<CurrencyDetail symbol="BTC" />);

    const screenDetail = screen.getAllByText("Bitcoin - BTC")[0].innerHTML;
    expect(screenDetail).toBe("Bitcoin - BTC");
  });

  it("Render component without information", () => {});
});
