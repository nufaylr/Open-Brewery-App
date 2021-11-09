import { cleanup, render, screen } from "@testing-library/react";
import BreweriesTable from "../BreweriesTable";
import { MOCK_BREWERIES_RESPONSE } from "../API_MOCK";

describe("BreweriesTable", () => {
  afterEach(cleanup);
  test("Table", async () => {
    render(<BreweriesTable tableData={MOCK_BREWERIES_RESPONSE} />);
  });
});
