import React, { useState } from 'react';
import { menuList } from './../../utils/constants';
import { useTranslation } from 'react-i18next';
import AccordionWithExpend from '../sideBar/AccordionWithExpend';
import AccordionWithoutExpend from '../sideBar/AccordionWithoutExpend';

const CustomMenu = ({ open, directionVal, handleDrawerOpen, selected }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const { t } = useTranslation();

    const handleExpansion = (accordionId) => {
        setActiveAccordion(prev => (prev === accordionId ? null : accordionId));
        localStorage.setItem('selectedIndex', accordionId);
    };

    return (
        menuList.map((menu, index) => {
            return (
                <React.Fragment key={`main-${index}`}>
                    {open && <span style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.38)' }}> {t(menu.label)}</span>}
                    {menu.subList.map((subItem, subIndex) => (
                        <li key={`sub-${index}-${subIndex}`}>
                            {
                                subItem.type === 'unExpanded' ? <AccordionWithoutExpend open={open} location={selected} subItem={subItem} directionVal={directionVal} /> :
                                    <AccordionWithExpend activeAccordion={activeAccordion} index={index} subIndex={subIndex} open={open} handleDrawerOpen={handleDrawerOpen} handleExpansion={handleExpansion} directionVal={directionVal} subItem={subItem} selected={selected} />
                            }
                        </li>
                    ))}
                </ React.Fragment >
            )
        })
    );
};

export default CustomMenu;
