export const MOCK_BREWERIES_RESPONSE = [
  {
    id: 299,
    name: "dBeer Company",
    brewery_type: "micro",
    street: "651B W Tower Ave",
    city: "Alameda",
    state: "California",
    country: "United States",
  },
  {
    id: 300,
    name: "Almanac N Company",
    brewery_type: "large",
    street: "651B W Tower Ave",
    city: "Alameda",
    state: "California",
    country: "United States",
  },
  {
    id: 301,
    name: "Foo Company",
    brewery_type: "large",
    street: "651B W Tower Ave",
    city: "Alameda",
    state: "California",
    country: "United States",
  },
];

export const MOCK_BREWERIES_FILTER_RESPONSE = [
  MOCK_BREWERIES_RESPONSE[1],
  MOCK_BREWERIES_RESPONSE[2],
];

export const MOCK_BREWERIES_ERROR_RESPONSE = {
  errors: [
    'Brewery type must include one of these types: ["micro", "nano", "regional", "brewpub", "large", "planning", "bar", "contract", "proprieter", "closed"]',
  ],
};
