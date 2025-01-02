import React from 'react';
import { useTranslation } from 'react-i18next'; // Хук для работы с переводами
import styles from './Header.module.css';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
const Header = () => {
  const { t } = useTranslation(); // Получаем функцию t для перевода

  return (
    <header className={styles.header}>
        <section className={styles.headerSection}>
        <div className={styles.navItem}>
            Logo
        </div>
      <div className={styles.navItems}>
        <a href="#plan" className={styles.navItem}>{t('plan')}</a>
        <a href="#place" className={styles.navItem}>{t('venue')}</a>
        <a href="#dress-code" className={styles.navItem}>{t('dressCode')}</a>
        <a href="#invitation" className={styles.navItem}>{t('invitation')}</a>
        <LanguageSwitcher></LanguageSwitcher>

      </div>
      </section>
    </header>
  );
};

export default Header;
