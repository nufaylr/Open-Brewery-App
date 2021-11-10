import "./App.css";
import Main from "./layouts/Main";
import Header from "./layouts/Header";
import useBreweries from "./useBreweries";
import BreweriesTable from "./BreweriesTable";
import Grid from "@mui/material/Grid";
import ListHeader from "./components/ListHeader";
import FolderIcon from "@mui/icons-material/Folder";
import ErrorAlert from "./components/ErrorAlert";
import SelectField from "./components/SelectField";
import LoadingSpinners from "./components/LoadingSpinners";
import { ERROR_MESSAGE } from "./settings";

function App() {
  const {
    loading,
    breweryCollection,
    breweryTypes,
    error,
    setActiveBreweryFilter,
    activeBreweryFilter,
  } = useBreweries();

  if (error) return <ErrorAlert message={ERROR_MESSAGE} />;

  return (
    <Main>
      <Grid container spacing={2}>
        <Header />
        <Grid item md={2} xs={12}>
          <ListHeader title="Filter Breweries" Icon={<FolderIcon />} />
          {breweryTypes && (
            <SelectField
              id="filter_brewery_type"
              label="Filter by type"
              defaultValue={
                activeBreweryFilter ? activeBreweryFilter["by_type"] : "all"
              }
              options={breweryTypes}
              handleChange={(event) => {
                if (event.target.value === "all") {
                  setActiveBreweryFilter(null);
                  return;
                }
                setActiveBreweryFilter({
                  by_type: event.target.value,
                });
              }}
            />
          )}
        </Grid>
        <Grid item md={10} xs={12}>
          {loading ? (
            <LoadingSpinners />
          ) : (
            <BreweriesTable tableData={breweryCollection} />
          )}
        </Grid>
      </Grid>
    </Main>
  );
}

export default App;
