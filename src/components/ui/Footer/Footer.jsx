import styles from './Footer.module.css';
import React from 'react';
import Logo_rounded from "../../../assets/images/Logo-rounded.svg"
import { useTranslation } from 'react-i18next'
import footerFlowers from "./footerFlowers.svg"
const Header = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    return (
      <footer className={styles.footer}>
        <img className={styles.footerFlowers} src={footerFlowers} alt='flowersSvg' />
        <section className={styles.footerSection}>
        <p  data-lang={lang}  className={styles.happyToSeeYou}>{t('happyToSeeYou')}</p>
        <p className={styles.happyToSeeYouText}>{t('happyToSeeYou_additionalInfo')}</p>

        
        <img className={styles.Logo_rounded} src={Logo_rounded} alt='Ceremony icon' />
        </section>
      </footer>
    );
  };
  
  export default Header;