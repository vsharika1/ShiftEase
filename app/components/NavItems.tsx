import BadgeIcon from '@mui/icons-material/Badge';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// import EventBusyIcon from '@mui/icons-material/EventBusy';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SettingsIcon from '@mui/icons-material/Settings';
// import AssessmentIcon from '@mui/icons-material/Assessment';

export const ManagerNavItems = (
  <>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <ScheduleIcon />
      </ListItemIcon>
      <ListItemText primary="Schedule Management" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <BadgeIcon />
      </ListItemIcon>
      <ListItemText primary="Employee Management" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <SwapHorizontalCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Shift Swap Approvals" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem> */}
  </>
);

export const EmployeeNavItems = (
  <>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <ScheduleIcon />
      </ListItemIcon>
      <ListItemText primary="My Schedule" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <BadgeIcon />
      </ListItemIcon>
      <ListItemText primary="Available Shifts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <SwapHorizontalCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Shift Swap" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <EventAvailableIcon />
      </ListItemIcon>
      <ListItemText primary="Availability" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <EventBusyIcon />
      </ListItemIcon>
      <ListItemText primary="Request Time Off" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
    <ListItem button>
      <ListItemIcon sx={{ color: 'white' }}>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem> */}
  </>
);
