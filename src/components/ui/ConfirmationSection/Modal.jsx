import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';  // Стили для модалки
import gsap from 'gsap'; // Импорт GSAP

const Modal = ({ isOpen, onClose }) => {

  const [response, setResponse] = useState('');
  const [foodPreference, setFoodPreference] = useState('');
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        `.${styles.modalContent}`,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -10, // Начальный угол поворота
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    } else {
      gsap.to(`.${styles.modalContent}`, {
        opacity: 0,
        scale: 0.8,
        rotation: 10, // Угол поворота при закрытии
        duration: 0.8,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;


  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleFoodPreferenceChange = (event) => {
    setFoodPreference(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Логика отправки данных или сохранения ответов
    console.log('Response:', response);
    console.log('Food Preference:', foodPreference);
    onClose();  // Закрыть модалку после отправки
  };


  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Опрос</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.question}>
            <label>{'Вы будете присутствовать на нашем событии?'}</label>
            <div>
              <input
                type="radio"
                id="yes"
                name="attendance"
                value="yes"
                onChange={handleResponseChange}
                checked={response === 'yes'}
              />
              <label htmlFor="yes">Да</label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="attendance"
                value="no"
                onChange={handleResponseChange}
                checked={response === 'no'}
              />
              <label htmlFor="no">Нет</label>
            </div>
          </div>
          <div className={styles.question}>
            <label>{'Ваши предпочтения по еде'}</label>
            <input
              type="text"
              value={foodPreference}
              onChange={handleFoodPreferenceChange}
              placeholder="Напишите ваши предпочтения"
            />
          </div>
          <div className={styles.submitButton}>
            <button type="submit">Отправить</button>
          </div>
        </form>
        <button className={styles.closeBtn} onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
