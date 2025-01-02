import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./DressCode.module.css"
import gsap from 'gsap';  // Подключаем GSAP

const Dresscode = () => {
  const { t } = useTranslation();

  const dresscodeOptions = [
    { color: '#ffffff' },
    { color: '#d2b48c' },
    { color: '#6F4F37' },
    { color: '#cce7ff' },
    { color: '#87cefa' },
    { color: '#4682b4' },
    { color: '#3a608a' },
    { color: '#2d4a69' },
    { color: '#000000' },
  ];
  return (
    <div className={styles.dresscodeSection}>
      <h2 className={styles.dresscodeTitle}>{t('dresscodeTitle')}</h2>
      <p className={styles.dresscodeText}>{t('dresscodeNotRequired')}</p>
      <p className={styles.dresscodeText}>{t('dresscodeDescription')}</p>
      <div className={styles.dresscodeCircleSection}>
        {dresscodeOptions.map((option, index) => (
          <div
            key={index}
            className={styles.dresscodeCircle}
            style={{ backgroundColor: option.color }}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dresscode;
