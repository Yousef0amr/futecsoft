import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import './../styles/drawer.css';
import { Close, Group, Home, Logout, LogoutTwoTone } from '@mui/icons-material';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from 'bootstrap';
import SwitchMode from '../components/common/SwitchMode';
import SwitchLanguage from '../components/common/SwitchLanguage';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../utils/auth';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0, // Initially 0 on the smallest screen

  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`, // Small screens (sm)
  },

  [theme.breakpoints.up('md')]: {
    width: `calc(${theme.spacing(7)} + 1px)`, // Medium screens (md)
  },

  [theme.breakpoints.up('lg')]: {
    width: `calc(${theme.spacing(7)} + 1px)`, // Large screens (lg)
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({

  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'var(--background-color)',
  color: 'var(--text-color)',

  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  variants: [
    {
      props: ({ open }) => open,
      style: {


        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);
const menuList = [
  {
    label: 'القائمة الرئيسية',
    icon: <MailIcon />,
    href: '/',
  },
  {
    label: 'ادارة المستخدمين',
    icon: <Group />,
    href: '/',
  },
  {
    label: 'التقارير',
    icon: <MailIcon />,
    href: '/',
  }
  ,
  {
    label: 'التقارير',
    icon: <MailIcon />,
    href: '/',
  }
]


export default function MiniDrawer({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeAccordion, setActiveAccordion] = React.useState(null);
  const [directionVal, setDirection] = React.useState(localStorage.getItem('direction') || 'rtl');
  const { logoutLocal } = useAuth()



  const handleDirection = () => {
    setDirection(() => directionVal === 'rtl' ? 'ltr' : 'rtl');
  };

  const handleExpansion = (panel) => {
    setActiveAccordion(activeAccordion === panel ? null : panel);
  };
  const handleDrawerOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }

  };



  return (
    <Box sx={{ display: 'flex', direction: directionVal }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={directionVal === 'rtl' ? { marginRight: open ? drawerWidth : 0 } : { marginLeft: open ? 0 : drawerWidth }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              // Default margin for all screen sizes
              marginRight: directionVal === 'rtl' ? (open ? 0 : 1) : (open ? 1 : 0),
              marginLeft: directionVal === 'rtl' ? (open ? 1 : 0) : (open ? 0 : 1),

              // Responsive adjustments using breakpoints
              [theme.breakpoints.up('sm')]: {
                marginRight: directionVal === 'rtl' ? (open ? 0 : 6) : (open ? 6 : 0),
                marginLeft: directionVal === 'rtl' ? (open ? 6 : 0) : (open ? 0 : 6),
              },
              [theme.breakpoints.up('md')]: {
                marginRight: directionVal === 'rtl' ? (open ? 0 : 6) : (open ? 6 : 0),
                marginLeft: directionVal === 'rtl' ? (open ? 6 : 0) : (open ? 0 : 6),
              },
              [theme.breakpoints.up('lg')]: {
                marginRight: directionVal === 'rtl' ? (open ? 0 : 6) : (open ? 6 : 0),
                marginLeft: directionVal === 'rtl' ? (open ? 6 : 0) : (open ? 0 : 6),
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

            <SwitchLanguage handleDirection={handleDirection} />
            <div style={{ width: '1px', height: '25px', backgroundColor: 'var(--text-color)' }}></div>
            <SwitchMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <div style={{ width: '1px', height: '25px', backgroundColor: 'var(--text-color)' }}></div>
          </div>


        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" ModalProps={{
        keepMounted: false,
      }} anchor={directionVal === 'rtl' ? 'right' : 'left'} open={open}>
        <DrawerHeader style={{
          backgroundColor: 'var(--background-color-dark)',
          color: 'white',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          justifyContent: 'center',

        }}>
          <span>LOGO</span>
        </DrawerHeader>

        <ul className='menu' style={{ direction: directionVal }}>
          <li >
            <Accordion
              disableGutters
              elevation={0}
              style={{ width: '100%', backgroundColor: 'transparent', direction: directionVal }}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)', color: 'white' } }}
              >
                <ListItemIcon style={directionVal === 'rtl' ? { marginRight: open ? '' : '32px' } : { marginLeft: open ? '' : '32px' }}>
                  <Home />
                </ListItemIcon>
                <Typography color='white' style={{ display: open ? 'block' : 'none' }}>الرئيسية</Typography>
              </AccordionSummary>
            </Accordion>
          </li>
          {
            open && <span style={{ color: 'rgba(255, 255, 255, 0.38)' }}>القائمة الرئيسية</span>
          }
          <li>
            <Accordion
              expanded={activeAccordion === 'materials'}
              onChange={() => open ? handleExpansion('materials') : handleDrawerOpen()}
              disableGutters // Remove extra padding and borders
              elevation={0} // Remove shadow
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: directionVal, borderRadius: '10px' }}
              sx={
                [
                  activeAccordion === 'materials' && open
                    ? {
                      '& .MuiAccordion-region': {
                        height: 'auto',
                      },
                      '& .MuiAccordionDetails-root': {
                        display: 'block',
                      },
                    }
                    : {
                      '& .MuiAccordion-region': {
                        height: 0,
                      },
                      '& .MuiAccordionDetails-root': {
                        display: 'none',
                      },
                    },
                ]
              }
            >
              <AccordionSummary
                expandIcon={open ? <ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.38)' }} /> : null}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
              >
                <ListItemIcon style={directionVal === 'rtl' ? { marginRight: open ? '' : '32px' } : { marginLeft: open ? '' : '32px' }} >
                  <Group />
                </ListItemIcon>
                <Typography style={{ display: open ? 'block' : 'none' }}>المواد</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '2px', color: 'white' }}>
                <ul style={{ padding: 0, marginRight: 5, paddingLeft: 5, listStyle: 'none', width: '100%' }}>
                  <li>
                    <Accordion
                      disableGutters
                      elevation={0}
                      square
                      style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: 'rtl' }}
                    >
                      <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
                      >
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <Typography>Colors</Typography>
                      </AccordionSummary>
                    </Accordion>

                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
          {
            open && <span style={{ color: 'rgba(255, 255, 255, 0.38)' }}>اخري</span>
          }
          {
            menuList.map((item, index) => (
              <li>
                <Accordion
                  expanded={activeAccordion === `main${index}`}
                  onChange={() => open ? handleExpansion(`main${index}`) : handleDrawerOpen()}

                  disableGutters // Remove extra padding and borders
                  elevation={0} // Remove shadow
                  slots={{ transition: Fade }}
                  slotProps={{ transition: { timeout: 400 } }}
                  style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: directionVal, borderRadius: '10px' }}
                  sx={
                    [
                      activeAccordion === `main${index}` && open
                        ? {
                          '& .MuiAccordion-region': {
                            height: 'auto',
                          },
                          '& .MuiAccordionDetails-root': {
                            display: 'block',
                          },
                        }
                        : {
                          '& .MuiAccordion-region': {
                            height: 0,
                          },
                          '& .MuiAccordionDetails-root': {
                            display: 'none',
                          },
                        },
                    ]
                  }
                >
                  <AccordionSummary
                    expandIcon={open ? <ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.38)' }} /> : null}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
                  >
                    <ListItemIcon style={directionVal === 'rtl' ? { marginRight: open ? '' : '32px' } : { marginLeft: open ? '' : '32px' }} >
                      {item.icon}
                    </ListItemIcon>
                    <Typography style={{ display: open ? 'block' : 'none' }}>{item.label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: '2px', color: 'white' }}>
                    <ul style={{ padding: 0, marginRight: 5, paddingLeft: 5, listStyle: 'none', width: '100%' }}>
                      <li>
                        <Accordion
                          disableGutters
                          elevation={0}
                          square
                          style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: directionVal }}
                        >
                          <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
                          >
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <Typography>Colors</Typography>
                          </AccordionSummary>
                        </Accordion>

                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
            ))
          }


        </ul>

        <DrawerHeader style={{
          backgroundColor: 'var(--background-color-dark)',
          color: 'white',
          justifyContent: 'flex-end',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          <IconButton color='inherit' onClick={logoutLocal} >
            {directionVal === 'rtl' ? <LogoutTwoTone style={{ transform: 'rotate(180deg)' }} /> : <LogoutTwoTone />}
          </IconButton>
        </DrawerHeader>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: '100vh', backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
