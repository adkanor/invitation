import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./ConfirmationSection.module.css";
import Modal from "./Modal.jsx"
import gsap from 'gsap';
import Image from "../../../assets/images/dfdf.jpeg"

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

        if (isModalOpen) {
            shakeAnimation.pause();
        } else {
            shakeAnimation.resume();
        }

        return () => shakeAnimation.kill();
    }, [isModalOpen]);

    return (
        <div className={styles.confirmationSectionContainer} id="invitation">
            <div className={styles.confirmationSection}>
                <h3 className={styles.confirmationSectionTitle}>{t('rsvpTitle')}</h3>
                <div className={styles.confirmationText}>
                    <p>    <span>{guestName ? ` ${guestName} ` : ''}

                    </span>
                    {/* {t('rsvpAreYouComming')} */}
                    </p>
                    <p className={styles.confirmationDescription}>{t('rsvpDescription')}</p>
                </div>

                <button className={styles.openModalButton} onClick={openModal}>
                    {t('confirmAndSurveyButton')}
                </button>

            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <div className={styles.rightForm}>
               <img className={styles.formImage} src={Image} alt="selfie of couple loving each other" />
               
           

            </div>
        </div>
    );
};

export default ConfirmationSection;
