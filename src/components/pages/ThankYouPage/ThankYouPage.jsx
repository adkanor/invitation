import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ThankYouPage.module.css';

function ThankYouPage() {
  const navigate = useNavigate();

    const handleGoBack = () => {
      const guestId = sessionStorage.getItem('guestId');
      if (guestId) {
        navigate(`/guest/${guestId}`); 
      }
    };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Спасибо за ваш запрос!</h1>
        <p className={styles.message}>Мы получили вашу информацию. Ожидайте дальнейших инструкций.</p>
        <button className={styles.goBackButton} onClick={handleGoBack}>
          Вернуться к приглашению
        </button>
      </div>
    </div>
  );
}

export default ThankYouPage;
