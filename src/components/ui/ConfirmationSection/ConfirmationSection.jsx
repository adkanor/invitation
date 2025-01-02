import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./ConfirmationSection.module.css";
import Modal from "./Modal.jsx"
import gsap from 'gsap'; // Импорт GSAP

const ConfirmationSection = ({ guestName }) => {
    const { t } = useTranslation();

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }; const closeModal = () => setModalOpen(false);
    useEffect(() => {
        const shakeAnimation = gsap.timeline({ repeat: -1, repeatDelay: 2 });

        shakeAnimation
            .to(`.${styles.confirmationSection}`, {
                rotation: 2,
                duration: 0.4,
                ease: 'power1.inOut',
            })
            .to(`.${styles.confirmationSection}`, {
                rotation: -2,
                duration: 0.4,
                ease: 'power1.inOut',
            })
            .to(`.${styles.confirmationSection}`, {
                rotation: 0,
                duration: 0.4,
                ease: 'power1.inOut',
            });

        // Остановка анимации при открытии модалки
        if (isModalOpen) {
            shakeAnimation.pause();
        } else {
            shakeAnimation.resume();
        }


            // Очистка анимации при размонтировании компонента
            return () => shakeAnimation.kill();
        }, [isModalOpen]);

    return (
        <div className={styles.container}>
            <div className={styles.confirmationSection}>
                <h3 className={styles.confirmationSectionTitle}>{t('rsvpTitle')}</h3>
                <div className={styles.confirmationText}>
                    <p>
                        <span>{guestName ? ` ${guestName}!` : ''}

                        </span>
                        {t('confirmAttendanceText')}</p>
                    <p>{t('participateInSurvey')}</p>
                </div>

                <button className={styles.openModalButton} onClick={openModal}>
                    {t('confirmAndSurveyButton')}
                </button>

            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <div className={styles.rightForm}>
                <p>Тут наша фотка
                </p>
            </div>
        </div>
    );
};

export default ConfirmationSection;
