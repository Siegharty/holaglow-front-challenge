import CurrenciesList from "@/components/CurrenciesList/CurrenciesList";
import { render, screen } from "@testing-library/react";
import Currencies from "@/data/dataBestCrypto";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Currencies List test", () => {
  it("Render component with 15 elements", () => {
    render(<CurrenciesList currencies={Currencies} />);

    const listItems = screen.getAllByRole("rowheader");
    expect(listItems.length).toBe(15);
  });
  it("Render component with 0 elements", () => {
    render(<CurrenciesList currencies={[]} />);

    const listItems = screen.queryAllByRole("row-header");
    expect(listItems.length).toBe(0);
  });
});
