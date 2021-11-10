import { cleanup, render, screen } from "@testing-library/react";
import ViewBreweryModal from "../ViewBreweryModal";
import { MOCK_BREWERIES_RESPONSE } from "../API_MOCK";

describe("ViewBreweryModal", () => {
  afterEach(cleanup);
  test("View Brewery Modal", async () => {
    const onHandleClose = jest.fn();
    const breweryItem = { ...MOCK_BREWERIES_RESPONSE[0] };
    render(
      <ViewBreweryModal
        viewBreweryItem={breweryItem}
        handleClose={onHandleClose}
      />
    );
    const rowsCountry = screen.getByText("dBeer Company");
    expect(rowsCountry).toBeInTheDocument();
  });
});
