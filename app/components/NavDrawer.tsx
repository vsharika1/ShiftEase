import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { EmployeeNavItems, ManagerNavItems } from './NavItems';

const drawerWidth = 300;

interface Props {
  isManager: boolean;
}

export default function NavDrawer({ isManager }: Props) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#008DDA',
          color: 'white',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div>
        <Typography variant="h6" sx={{ padding: 2, color: 'white' }}>
          ShiftEase
        </Typography>
      </div>
      <Divider />
      <List>{isManager ? ManagerNavItems : EmployeeNavItems}</List>
      <Divider />
      <List sx={{ marginTop: 'auto', paddingBottom: 2 }}>
        {/* Profile Button */}
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        {/* Log Out Button */}
        <ListItem button>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Drawer>
  );
}
