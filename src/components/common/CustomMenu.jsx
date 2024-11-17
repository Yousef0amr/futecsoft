import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, ListItemIcon, Fade, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/Inbox';
import { menuList } from './../../utils/constants';
import { useTranslation } from 'react-i18next';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const CustomMenu = ({ open, directionVal, handleDrawerOpen, selected }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const { t } = useTranslation();

    const handleExpansion = (accordionId) => {
        setActiveAccordion(prev => (prev === accordionId ? null : accordionId));
    };

    return (
        menuList.map((menu, index) => {
            return (
                <React.Fragment key={`main-${index}`}>
                    {open && <span style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.38)' }}> {t(menu.label)}</span>}

                    {menu.subList.map((subItem, subIndex) => (
                        <li key={`sub-${index}-${subIndex}`}>
                            <Accordion
                                expanded={activeAccordion === `main-${index}-${subIndex}`}
                                onChange={() => open ? handleExpansion(`main-${index}-${subIndex}`) : handleDrawerOpen()}
                                sx={{
                                    ...(activeAccordion === `main-${index}-${subIndex}` && open
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
                                        }),
                                }}

                                disableGutters
                                elevation={0}
                                square
                                style={{ width: '100%', backgroundColor: 'transparent', color: 'white', direction: directionVal }}
                            >
                                <AccordionSummary
                                    expandIcon={open ? <ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.38)' }} /> : null}
                                    aria-controls={`panel-${index}-${subIndex}-content`}
                                    id={`panel-${index}-${subIndex}-header`}
                                    sx={{ '.css-cokf1l-MuiListItemIcon-root': { minWidth: open ? '34px' : '' }, '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' } }}
                                >
                                    <ListItemIcon>
                                        {<FontAwesomeIcon icon={subItem.icon} /> || <InboxIcon />}
                                    </ListItemIcon>
                                    <Typography style={{ display: open ? 'block' : 'none', fontSize: '14px' }}>{t(subItem.label)}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ padding: '4px', color: 'white' }}>
                                    <Stack style={{ width: '100%', padding: '0 20px' }} gap={1}>
                                        {subItem.subActions.map((action, actionIndex) => (
                                            <Link key={`action-${index}-${subIndex}-${actionIndex}`} to={action.href}>
                                                <Typography
                                                    component={'div'}
                                                    className='d-flex align-items-center justify-content-start'
                                                    sx={{
                                                        padding: '4px',
                                                        borderRadius: '10px',
                                                        cursor: 'pointer',
                                                        '&:hover': { backgroundColor: 'rgb(41.5, 48, 61)' },
                                                        backgroundColor: selected === action.href ? 'rgb(41.5, 48, 61)' : 'transparent'
                                                    }}
                                                >
                                                    {selected === action.href ? <RadioButtonChecked fontSize='2px' /> : <RadioButtonUnchecked fontSize='2px' />}
                                                    <Typography component={'span'} sx={{ textAlign: 'center', borderRadius: '10px', padding: '4px 10px', fontSize: '13px' }}>
                                                        {t(action.label)}
                                                    </Typography>
                                                </Typography>
                                            </Link>
                                        ))}
                                    </Stack>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    ))}
                </ React.Fragment >
            )
        })
    );
};

export default CustomMenu;
