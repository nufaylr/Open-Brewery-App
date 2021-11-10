import { cleanup, render, screen } from "@testing-library/react";
import BreweriesTable from "../BreweriesTable";
import { MOCK_BREWERIES_RESPONSE } from "../API_MOCK";

describe("BreweriesTable", () => {
  afterEach(cleanup);
  test("Table headers", async () => {
    render(<BreweriesTable tableData={MOCK_BREWERIES_RESPONSE} />);
    const rowsName = screen.getByText("Name", { closest: "row" });
    const rowsType = screen.getByText("Type", { closest: "row" });
    const rowsCountry = screen.getByText("Country", { closest: "row" });
    const rowsStreet = screen.getByText("Street", { closest: "row" });
    expect(rowsName).toBeInTheDocument();
    expect(rowsType).toBeInTheDocument();
    expect(rowsCountry).toBeInTheDocument();
    expect(rowsStreet).toBeInTheDocument();
  });

  test("Table body", async () => {
    render(<BreweriesTable tableData={MOCK_BREWERIES_RESPONSE} />);
    const rowsName = screen.getAllByRole("row");
    expect(rowsName[1]).toHaveTextContent(/dBeer Company/);
  });
});
