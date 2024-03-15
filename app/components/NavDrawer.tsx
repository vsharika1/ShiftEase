import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BadgeIcon from '@mui/icons-material/Badge';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const drawerWidth = 300;

interface Props {
  isManager: boolean;
}

export default function NavDrawer({ isManager }: Props) {
  const managerItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Schedule Management', icon: <ScheduleIcon /> },
    { text: 'Employee Management', icon: <BadgeIcon /> },
    { text: 'Shift Swap Approvals', icon: <SwapHorizontalCircleIcon /> },
    { text: 'Notifications', icon: <NotificationsIcon /> },
    { text: 'Reports', icon: <AssessmentIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  const employeeItems = [
    { text: 'My Schedule', icon: <ScheduleIcon /> },
    { text: 'Available Shifts', icon: <BadgeIcon /> },
    { text: 'Shift Swap', icon: <SwapHorizontalCircleIcon /> },
    { text: 'Availability', icon: <EventAvailableIcon /> },
    { text: 'Request Time Off', icon: <EventBusyIcon /> },
    { text: 'Notifications', icon: <NotificationsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

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
          Scheduler
        </Typography>
      </div>
      <Divider />
      <List>
        {(isManager ? managerItems : employeeItems).map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />

      <List sx={{ marginTop: 'auto', paddingBottom: 2 }}>
        <Divider />
        {/* Profile Button */}
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        {/* Log Out Button */}
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Drawer>
  );
}
