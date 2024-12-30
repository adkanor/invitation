import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./CelebrationAgenda.module.css";
import LocationIcon from "../../../assets/images/locationIcon.svg"
import GlassesIcon from "../../../assets/images/glassesIcon.svg"
import CeremonyIcon from "../../../assets/images/ceremonyIcon.svg"
import DanceIcon from "../../../assets/images/danceIcon.svg"

const CelebrationAgenda = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.agendaSection}>
            <h2 className={styles.agendaTitle}>{t('agendaTitle')}</h2>
            <div className={styles.agendaContainer}>
                <div className={styles.timeline}> </div>
                <div className={styles.agendaItem}>
                    <div  className={styles.agendaIcon}>
                        <img className={styles.agendaSvg}  src={LocationIcon} alt='Ceremony icon'/>
                    </div>
                    <div className={styles.agendaTime}>15:00</div>
                    <div className={styles.dot}></div>
                    <div className={styles.agendaDescription}>
                        <div className={styles.agendaDescriptionTitle}>{t('guestMeeting')}</div>
                        <div className={styles.agendaDescriptionText}>{t('guestMeetingDescription')}</div>
                    </div>
                </div>
                <div className={styles.agendaItem}>
                <div  className={styles.agendaIcon}>
                        <img className={styles.agendaSvg}  src={CeremonyIcon} alt='Ceremony icon'/>
                    </div>
                    <div className={styles.agendaTime}>16:00</div>
                    <div className={styles.dot}></div>
                    <div className={styles.agendaDescription}>
                        <div className={styles.agendaDescriptionTitle}>{t('marriageCeremony')}</div>
                        <div className={styles.agendaDescriptionText}>{t('marriageCeremonyDescription')}</div>
                    </div>
                </div>
                <div className={styles.agendaItem}>
                <div  className={styles.agendaIcon}>
                        <img className={styles.agendaSvg}  src={GlassesIcon} alt='Ceremony icon'/>
                    </div>
                    <div className={styles.agendaTime}>17:00</div>
                    <div className={styles.dot}></div>
                    <div className={styles.agendaDescription}>
                        <div className={styles.agendaDescriptionTitle}>{t('weddingDinner')}</div>
                        <div className={styles.agendaDescriptionText}>{t('weddingDinnerDescription')}</div>
                    </div>
                </div>
                <div className={styles.agendaItem}>
                <div  className={styles.agendaIcon}>
                        <img className={styles.agendaSvg}  src={DanceIcon} alt='Ceremony icon'/>
                    </div>
                    <div className={styles.agendaTime}>20:00</div>
                    <div className={styles.dot}></div>
                    <div className={styles.agendaDescription}>
                        <div className={styles.agendaDescriptionTitle}>{t('dancing')}</div>
                        <div className={styles.agendaDescriptionText}>{t('dancingDescription')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CelebrationAgenda;
