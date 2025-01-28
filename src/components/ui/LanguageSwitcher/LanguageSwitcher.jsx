import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css"
import arrowUp from "../../../assets/images/arrowUp.svg";
import arrowDown from "../../../assets/images/arrowDown.svg";


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "ua", label: "Українська" },
  ];

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={styles.languageButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {/* <img src={Language_icon} alt="Icon" className={styles.buttonIcon} /> */}
        {i18n.language.toUpperCase()}
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="Toggle arrow"
          className={styles.arrowIcon}
        />

      </button>
      {isOpen && (
        <ul className={styles.languageDropdown}>

          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`${styles.languageItem} ${i18n.language === lang.code ? styles.active : ""
                }`}
              onClick={() => changeLanguage(lang.code)}
            >
              {lang.label}
            </li>



          ))}

        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
