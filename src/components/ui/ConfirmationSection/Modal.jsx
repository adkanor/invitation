import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import gsap from 'gsap';
import { useParams } from 'react-router-dom';
import { findGuestById } from '../../../utils/findGuestById';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose }) => {
  const [attendance, setAttendance] = useState('');
  const [drink, setDrink] = useState([]);
  const [music, setMusic] = useState('');
  const [help, setHelp] = useState('');
  const [plusOne, setPlusOne] = useState('no');
  const [plusOneName, setPlusOneName] = useState('');
  const [plusOneAge, setPlusOneAge] = useState('');

  const { t } = useTranslation();
  const guestId = useParams();
  const guestInfo = findGuestById(guestId.id);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        `.${styles.modalContent}`,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const closeWithAnimation = () => {
    gsap.to(`.${styles.modalContent}`, {
      y: '-100%',
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
      onComplete: () => {
        onClose();
      },
    });
  };

  const handleAttendanceChange = (event) => setAttendance(event.target.value);
  const handleDrinkChange = (event) => {
    const { value } = event.target;
    setDrink((prevDrinks) =>
      prevDrinks.includes(value)
        ? prevDrinks.filter(drink => drink !== value)
        : [...prevDrinks, value]
    );
  };
  const handleMusicChange = (event) => setMusic(event.target.value);
  const handleHelpChange = (event) => setHelp(event.target.value);
  const handlePlusOneChange = (event) => setPlusOne(event.target.value);
  const handlePlusOneNameChange = (event) => setPlusOneName(event.target.value);
  const handlePlusOneAgeChange = (event) => setPlusOneAge(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form successfully submitted!');
    closeWithAnimation();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={closeWithAnimation}>X</button>
        <h2 className={styles.modalTitle}>{t('modalTitle')}</h2>
        <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mlddowpp">
          <label className={styles.modalWillComeLabel}>{t('modalWillComeLabel')}</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="attendance"
                value="yes"
                checked={attendance === 'yes'}
                onChange={handleAttendanceChange}
              /> {t('modalWillComeOptionYes')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={attendance === 'no'}
                onChange={handleAttendanceChange}
              /> {t('modalWillComeOptionNo')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="attendance"
                value="unsure"
                checked={attendance === 'unsure'}
                onChange={handleAttendanceChange}
              /> {t('modalWillComeOptionAnother')}
            </label>
          </div>

          <label className={styles.modalWhatToDrinkTitle}>{t('modalWhatToDrinkTitle')}</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="wine"
                checked={drink.includes('wine')}
                onChange={handleDrinkChange}
              />{t('modalWhatToDrinkOptionWine')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="vodka"
                checked={drink.includes('vodka')}
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionVodka')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="whiskey"
                checked={drink.includes('whiskey')} // Проверяем, есть ли "whiskey" в массиве
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionWhiskey')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="champagne"
                checked={drink.includes('champagne')} // Проверяем, есть ли "champagne" в массиве
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionChampane')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="cocktails"
                checked={drink.includes('cocktails')} // Проверяем, есть ли "cocktails" в массиве
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionCoctails')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="nonAlcohol"
                checked={drink.includes('nonAlcohol')} // Проверяем, есть ли "nonAlcohol" в массиве
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionNonAlcohol')}
            </label>
          </div>

          <label className={styles.modalMusicTitle}>{t('modalMusicTitle')}</label>
          <input
            type="text"
            className={styles.musicInput}
            placeholder={t('modalMusicPlaceholder')}
            value={music}
            onChange={handleMusicChange}
          />
     

          <label className={styles.modalNeedHelp}>{t('modalNeedHelp')}</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="help"
                value="yes"
                checked={help === 'yes'}
                onChange={handleHelpChange}
              /> {t('modalNeedHelpOptionYes')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="help"
                value="no"
                checked={help === 'no'}
                onChange={handleHelpChange}
              /> {t('modalNeedHelpOptionNo')}
            </label>
          </div>

          {/* Блок для "Плюс один" */}
          <label className={styles.modalNeedPlusOne}>{t('modalNeedPlusOne')}</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="plusOne"
                value="yes"
                checked={plusOne === 'yes'}
                onChange={handlePlusOneChange}
              /> {t('modalPlusOneYes')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="plusOne"
                value="no"
                checked={plusOne === 'no'}
                onChange={handlePlusOneChange}
              /> {t('modalPlusOneNo')}
            </label>
          </div>

          {plusOne === 'yes' && (
            <>
              <label className={styles.modalPlusOneNameLabel}>{t('modalPlusOneName')}</label>
              <input
                type="text"
                value={plusOneName}
                onChange={handlePlusOneNameChange}
                className={styles.musicInput}
              />

              <label className={styles.modalPlusOneAgeLabel}>{t('modalPlusOneAge')}</label>
              <input
                type="text"
                value={plusOneAge}
                onChange={handlePlusOneAgeChange}
                className={styles.musicInput}
              />
            </>
          )}

          <button type="submit" className={styles.modalSendButton}>{t('modalSendButton')}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
