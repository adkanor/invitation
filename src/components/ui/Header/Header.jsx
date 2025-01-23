import React from 'react';
import { useTranslation } from 'react-i18next'; 
import styles from './Header.module.css';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import { Link } from 'react-scroll';
import Logo_rounded from "../../../assets/images/Logo-without-bg.svg"

const Header = () => {
  const { t } = useTranslation(); 

  return (
    <header className={styles.header}>
      <section className={styles.headerSection}>
        <div className={styles.navItem}>
        <img className={styles.Logo_rounded} src={Logo_rounded} alt='Ceremony icon' />
        </div>
        <div className={styles.navItems}>
          <Link
            to="plan"
            smooth={true}
            duration={500}
             offset={-100}
             activeClass={styles.activeLink}
             spy={true}
            className={styles.navItem}>
            {t('plan')}
          </Link>       <Link
            to="venue"
            smooth={true}
            duration={500} 
            offset={-100}
            activeClass={styles.activeLink}
            spy={true}
            className={styles.navItem}>
            {t('venue')}
          </Link>
          <Link
            to="dress-code"
            smooth={true}
            duration={500}
            offset={-100}
            activeClass={styles.activeLink}
            spy={true}
            className={styles.navItem}>
            {t('dressCode')}
          </Link>
          <Link
            to="invitation"
            smooth={true}
            duration={500} 
            offset={-100}
            activeClass={styles.activeLink}
            spy={true}
            className={styles.navItem}>
            {t('invitation')}
          </Link>
          <LanguageSwitcher></LanguageSwitcher>

        </div>
        <div className={styles.navItemsHidden}>
        <LanguageSwitcher></LanguageSwitcher>
        </div>
      </section>
    </header>
  );
};

export default Header;