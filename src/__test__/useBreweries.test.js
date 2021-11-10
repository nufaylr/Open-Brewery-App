import { renderHook, act } from "@testing-library/react-hooks";
import { cleanup } from "@testing-library/react";
import useBreweries from "../useBreweries";
import {
  MOCK_BREWERIES_RESPONSE,
  MOCK_BREWERIES_FILTER_RESPONSE,
  MOCK_BREWERIES_ERROR_RESPONSE,
} from "../API_MOCK";

describe("useBreweries", () => {
  afterEach(cleanup);
  test("fetch breweries from API", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_BREWERIES_RESPONSE),
    });
    const { result, waitForNextUpdate } = renderHook(() => useBreweries());
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.openbrewerydb.org/breweries"
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.breweryCollection.length).toBe(3);
    expect(result.current.breweryTypes).toEqual(["micro", "large"]);
  });

  test("breweries filters", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_BREWERIES_FILTER_RESPONSE),
    });
    const { result, waitForNextUpdate } = renderHook(() => useBreweries());
    await waitForNextUpdate();
    act(() => {
      result.current.setActiveBreweryFilter({ by_type: "large" });
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.openbrewerydb.org/breweries?by_type=large"
    );
    await waitForNextUpdate();
    expect(result.current.breweryCollection.length).toBe(2);
  });

  test("breweries filters to be All", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_BREWERIES_RESPONSE),
    });
    const { result, waitForNextUpdate } = renderHook(() => useBreweries());
    await waitForNextUpdate();
    act(() => {
      result.current.setActiveBreweryFilter(null); // filter by all
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.openbrewerydb.org/breweries"
    );
    await waitForNextUpdate();
    expect(result.current.breweryCollection.length).toBe(3);
  });

  test("catch breweries API errors", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_BREWERIES_ERROR_RESPONSE),
    });
    const { result, waitForNextUpdate } = renderHook(() => useBreweries());
    act(() => {
      result.current.setActiveBreweryFilter({ by_type: "ffffff" });
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.openbrewerydb.org/breweries?by_type=ffffff"
    );
    await waitForNextUpdate();
    expect(result.current.error).toBe(true);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  afterAll(cleanup);
});
