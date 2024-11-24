import React from 'react'
import { Accordion, AccordionSummary, ListItemIcon, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InboxIcon from '@mui/icons-material/Inbox';
import { Link } from 'react-router-dom';


const AccordionWithoutExpend = ({ open, location, subItem, directionVal }) => {
    const { t } = useTranslation();
    return (
        <Link to={subItem.href} onClick={() => localStorage.setItem('selectedIndex', null)}>
            <Accordion
                disableGutters
                elevation={0}
                style={{ width: '100%', backgroundColor: 'transparent', direction: directionVal }}
            >
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ '.css-cokf1l-MuiListItemIcon-root': { minWidth: open ? '34px' : '56px' }, '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)', color: 'white' }, backgroundColor: location === subItem.href || location === subItem.subHref ? 'rgb(41.5, 48, 61)' : 'transparent', color: location === subItem.href || location === subItem.subHref ? 'white' : 'white' }}
                >
                    <ListItemIcon style={directionVal === 'rtl' ? { marginRight: open ? '' : '32px' } : { marginLeft: open ? '' : '32px' }}>
                        {<FontAwesomeIcon color='rgba(255, 255, 255, 0.38)' icon={subItem.icon} /> || <InboxIcon />}
                    </ListItemIcon>
                    <Typography color='white' style={{ display: open ? 'block' : 'none', fontSize: '14px' }}>{t(subItem.label)}</Typography>
                </AccordionSummary>
            </Accordion>    </Link>
    )
}

export default AccordionWithoutExpend