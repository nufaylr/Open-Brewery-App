import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

const ListHeader = ({ title, Icon }) => {
  return (
    <List dense={false} sx={{mb:5}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{Icon}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItem>
      <Divider />
    </List>
  );
};

export default ListHeader;
