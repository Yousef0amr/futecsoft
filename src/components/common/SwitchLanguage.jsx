import { Language } from "@mui/icons-material";
import React from "react";
import { useTranslation } from "react-i18next";

const SwitchLanguage = ({ handleDirection }) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        handleDirection();
        localStorage.setItem('direction', i18n.language === "en" ? "ltr" : "rtl");;
        document.body.style.direction = i18n.language === "en" ? "ltr" : "rtl";
        document.getElementById("checkbox").checked = false;
    };


    return (
        <div className="language-popup ">
            <input type="radio" name="language" id="arabic" onClick={() => changeLanguage("ar")} />
            <input type="radio" name="language" id="english" onClick={() => changeLanguage("en")} />
            <input type="checkbox" id="checkbox" />

            <label htmlFor="checkbox" className="language-popup__button" >
                <Language />
            </label>

            <div className="language-popup__list-container" style={i18n.language === "en" ? { left: '10px' } : { right: '10px' }}>
                <ul className="language-popup__list" style={i18n.language === "en" ? { direction: 'ltr' } : { direction: 'rtl' }}>
                    <li>
                        <label htmlFor="arabic">
                            <span >Ar</span>
                            <span>العربية</span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="english">
                            <span >En</span>
                            <span>English</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SwitchLanguage;
