import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ManagerNavItems = (
  <>
    <ListItem button>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Schedule Management" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Employee Management" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Shift Swap Approvals" />
    </ListItem>
  </>
);

export const EmployeeNavItems = (
  <>
    <ListItem button>
      <ListItemText primary="My Schedule" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Available Shifts" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Shift Swap" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Availability" />
    </ListItem>
  </>
);
