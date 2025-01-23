import styles from './Footer.module.css';
import React from 'react';
import Logo_rounded from "../../../assets/images/Logo-rounded.svg"
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t } = useTranslation();

    return (
      <footer className={styles.footer}>
        <section className={styles.footerSection}>
        <p className={styles.happyToSeeYou}>{t('happyToSeeYou')}</p>
        <p className={styles.happyToSeeYouText}>{t('happyToSeeYou_additionalInfo')}</p>

        
        <img className={styles.Logo_rounded} src={Logo_rounded} alt='Ceremony icon' />
        </section>
      </footer>
    );
  };
  
  export default Header;