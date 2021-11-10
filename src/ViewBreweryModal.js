import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ViewBreweryModal = ({ viewBreweryItem, handleClose }) => {
  if (!viewBreweryItem) return null;
  return (
    <Modal
      open={viewBreweryItem ? true : false}
      onClose={handleClose}
      aria-labelledby="modal-view-brewery-title"
      aria-describedby="modal-view-brewery-description"
      data-testid="test-modal"
    >
      <Box sx={style}>
        <Typography id="modal-view-brewery-title" variant="h6" component="h2">
          {viewBreweryItem.name}
        </Typography>
        <ul>
          <li>Type : {viewBreweryItem.brewery_type}</li>
          <li>Phone : {`${viewBreweryItem.phone}`}</li>
          <li>
            Address :{" "}
            {`${viewBreweryItem.street}, ${viewBreweryItem.city} ${viewBreweryItem.country}`}
          </li>
          {viewBreweryItem.website_url && (
            <li>
              <a href={`${viewBreweryItem.website_url}`}>Web Link</a>
            </li>
          )}
        </ul>
      </Box>
    </Modal>
  );
};

export default ViewBreweryModal;
