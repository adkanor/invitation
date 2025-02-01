import React, { useState, useEffect, useRef} from 'react';
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
  const [willToast, setWillToast] = useState('no');

  const { t } = useTranslation();
  const guestId = useParams();
  const guestInfo = findGuestById(guestId.id);
  const guestInfoJson = JSON.stringify(guestInfo.info);
  const toastNoteRef = useRef(null); 
  const toastAddintionalInviteRef = useRef(null); 


  useEffect(() => {
    if (willToast === 'yes') {
      gsap.fromTo(
        toastNoteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );
    } 
  }, [willToast]);

  const handleToastAnimateChange = () => {
    gsap.fromTo(
      toastNoteRef.current,
      { opacity: 1 ,}, 
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          setWillToast('no');
        }
      }
    );
  };
  useEffect(() => {
    if (plusOne === 'yes') {
      gsap.fromTo(
        toastAddintionalInviteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );
    } 
  }, [plusOne]);

  const handlePlusOneAnimateChange = () => {
    gsap.fromTo(
      toastAddintionalInviteRef.current,
      { opacity: 1 ,}, 
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          setPlusOne('no');
        }
      }
    );
  };

  
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
  const handleToastChange = (event) => setWillToast(event.target.value);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={closeWithAnimation}>X</button>
        <h2 className={styles.modalTitle}>{t('modalTitle')}</h2>
        <form action="https://formspree.io/f/xqaebbnv" method="POST">
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
            <input type="hidden" name="_next" value="https://workspace.google.com/intl/ru/gmail/" />

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
          <input type="hidden" name="guestName" value={guestInfoJson} />
          <input type="hidden" name="guestId" value={guestId.id} />
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
                checked={drink.includes('whiskey')}
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionWhiskey')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="champagne"
                checked={drink.includes('champagne')}
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionChampane')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="cocktails"
                checked={drink.includes('cocktails')}
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionCoctails')}
            </label>
            <label className={styles.radioOption}>
              <input
                type="checkbox"
                name="drink"
                value="nonAlcohol"
                checked={drink.includes('nonAlcohol')}
                onChange={handleDrinkChange}
              /> {t('modalWhatToDrinkOptionNonAlcohol')}
            </label>          </div>

          <label className={styles.modalMusicTitle}>{t('modalMusicTitle')}</label>
          <input
            type="text"
            name="music"
            className={styles.musicInput}
            placeholder={t('modalMusicPlaceholder')}
            value={music}
            onChange={handleMusicChange}
            maxLength={500}

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
                onChange={handlePlusOneAnimateChange}
              /> {t('modalPlusOneNo')}
            </label>
          </div>

          {plusOne === 'yes' && (
            < div ref={toastAddintionalInviteRef}> 
            <span className={styles.modalPlusOneNote}>{t('modalPlusOneNote')}</span>
              <label className={styles.modalPlusOneNameLabel}>{t('modalPlusOneName')}</label>
              <input
                type="text"
                name="plusOneName"
                placeholder={t('modalPlusOneName')}
                value={plusOneName}
                onChange={handlePlusOneNameChange}
                className={styles.musicInput}
                maxLength={30}
              />

              <label className={styles.modalPlusOneAgeLabel}>{t('modalPlusOneAge')}</label>
              <input
                type="number"
                name="plusOneAge"
                placeholder={t('modalPlusOneAge')}
                value={plusOneAge}
                onChange={handlePlusOneAgeChange}
                className={styles.musicInput}/>
                       </div>
          )}
          <label className={styles.modalPlusOneNameLabel}>{t('modalWillToastLabel')}</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="willToast"
                value="yes"
                checked={willToast === 'yes'}
                onChange={handleToastChange}
              /> {t('modalWillToastOptionYes')}
            </label>

            <label className={styles.radioOption}>
              <input
                type="radio"
                name="willToast"
                value="no"
                checked={willToast === 'no'}
                onChange={handleToastAnimateChange}
              /> {t('modalWillToastOptionNo')}
            </label>
          </div>

          {willToast === 'yes' && (
  <p ref={toastNoteRef} className={styles.toastNote}>
    {t('modalToastNote')}
  </p>
)}          <button type="submit" onClick={closeWithAnimation} className={styles.modalSendButton}>{t('modalSendButton')}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
