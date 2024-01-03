import CurrencyDetail from "@/components/CurrencyDetail/CurrencyDetail";
import { render, screen } from "@testing-library/react";

describe("Currency Detail Component Test", () => {
  it("Render Component with existing currency", () => {
    render(<CurrencyDetail currencyToCheck="BTC" />);

    const screenDetail = screen.getAllByRole("rowheader")[0].innerHTML;
    expect(screenDetail).toBe("BTC-EUR");
  });

  it("Render component without information", () => {});
});
