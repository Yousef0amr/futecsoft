import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

import './../styles/drawer.css';
import { Close, Group, Home, List } from '@mui/icons-material';

const drawerWidth = 270;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,

    position: 'relative',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,

      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',

}));


const menuList = [
  {
    label: 'القائمة الرئيسية',
    icon: <List />,
    href: '/',
  },
  {
    label: 'ادارة المستخدمين',
    icon: <Group />,
    href: '/',
  },
  {
    label: 'التقارير',
    icon: <List />,
    href: '/',
  }
  ,
  {
    label: 'التقارير',
    icon: <List />,
    href: '/',
  }
]

const menuMainList = [
  {
    label: 'الفروع',
    icon: <List />,
    href: '/',
  },
  {
    label: 'التصنيفات',
    icon: <Group />,
    href: '/',
  },
  {
    label: 'وحدات القياس',
    icon: <List />,
    href: '/',
  }
  ,
  {
    label: 'النكهات',
    icon: <List />,
    href: '/',
  }
  ,
  {
    label: 'العروض',
    icon: <List />,
    href: '/',
  }
  ,
  {
    label: 'أنواع الخصومات',
    icon: <List />,
    href: '/',
  }
  ,
  {
    label: 'الضرائب',
    icon: <List />,
    href: '/',
  }
  ,
  {
    label: 'العملات',
    icon: <List />,
    href: '/',
  }
  ,
  {
    label: 'طرق الدفع',
    icon: <List />,
    href: '/',
  }
  ,
  {
    label: 'الموردين',
    icon: <List />,
    href: '/',
  }
]

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeAccordion, setActiveAccordion] = React.useState(null);

  const handleExpansion = (panel) => {
    setActiveAccordion(activeAccordion === panel ? null : panel);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ boxShadow: '0px 0px 1px 1px rgb(41.5, 48, 61, 0.5)', backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">

          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={[open && { display: 'none' }]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>

        </Typography>

      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader style={{
          backgroundColor: '#212631',
          color: 'white',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'rgba(255, 255, 255, 0.38)', '&:hover': { color: 'white' } }}>
            <Close />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, textAlign: 'center' }}> Futec-soft</Typography>
        </DrawerHeader>

        <ul className='menu' style={{ direction: 'rtl' }}>

          <li >
            <Accordion
              disableGutters
              elevation={0}
              style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: 'rtl' }}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <Typography>الرئيسية</Typography>
              </AccordionSummary>
            </Accordion>
          </li>
          <span style={{ color: 'rgba(255, 255, 255, 0.38)' }}>القائمة الرئيسية</span>

          {
            menuMainList.map((item, index) => (
              <li>
                <Accordion
                  disableGutters
                  elevation={0}
                  style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: 'rtl' }}
                >
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
                  >
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <Typography>{item.label}</Typography>
                  </AccordionSummary>
                </Accordion>
              </li>
            ))



          }
          <li>
            <Accordion
              expanded={activeAccordion === 'materials'}
              onChange={() => handleExpansion('materials')}
              disableGutters // Remove extra padding and borders
              elevation={0} // Remove shadow
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: 'rtl', borderRadius: '10px' }}
              sx={
                [
                  activeAccordion === 'materials'
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
                expandIcon={<ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.38)' }} />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
              >
                <ListItemIcon >
                  <Group />
                </ListItemIcon>
                <Typography>المواد</Typography>
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
          <span style={{ color: 'rgba(255, 255, 255, 0.38)' }}>اخري</span>

          {
            menuList.map((item, index) => (
              <li>
                <Accordion
                  expanded={activeAccordion === `main${index}`}
                  onChange={() => handleExpansion(`main${index}`)}

                  disableGutters // Remove extra padding and borders
                  elevation={0} // Remove shadow
                  slots={{ transition: Fade }}
                  slotProps={{ transition: { timeout: 400 } }}
                  style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: 'rtl', borderRadius: '10px' }}
                  sx={
                    [
                      activeAccordion === `main${index}`
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
                    expandIcon={<ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.38)' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
                  >
                    <ListItemIcon >
                      {item.icon}
                    </ListItemIcon>
                    <Typography>{item.label}</Typography>
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
            ))
          }
        </ul>
        <DrawerHeader style={{
          backgroundColor: '#212631',
          color: 'white',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'rgba(255, 255, 255, 0.38)', '&:hover': { color: 'white' } }}>
            <LogoutIcon />
          </IconButton>

        </DrawerHeader>
      </Drawer>
    </Box >
  );
}
