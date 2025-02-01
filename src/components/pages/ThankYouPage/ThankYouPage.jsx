import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ThankYouPage.module.css';
import { useTranslation } from 'react-i18next';

function ThankYouPage() {
  const { t } = useTranslation();

  const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);

    };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.heading}>{t('confirmationHeading')}</h1>
        <p className={styles.message}>{t('confirmationMessage')}</p>
        <p className={styles.message}>{t('confirmationMessageTwo')}</p>

        <button 
          className={styles.goBackButton} 
          onClick={handleGoBack}
          type="button"  // Add explicit button type
        >
          {t('goBackButton')}
        </button>
      </div>
    </div>
  );
}

export default ThankYouPage;
