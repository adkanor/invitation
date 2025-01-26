import React from 'react';
import styles from "./Timer.module.css";
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';

const Timer = () => {
    const { t } = useTranslation();
    const weddingDate = new Date('2025-05-05T00:00:00');

    // Рендер-функция для Countdown
    const renderer = ({ days, hours, minutes, seconds }) => (
        <div className={styles.countdown}>
            <div className={styles.timeBlock}>
                <span className={styles.timeValue}>{days}</span>
                <span className={styles.timeLabel}>{t('days')}</span>
            </div>
            <div className={styles.timeBlock}>
                <span className={styles.timeValue}>{hours}</span>
                <span className={styles.timeLabel}>{t('hours')}</span>
            </div>
            <div className={styles.timeBlock}>
                <span className={styles.timeValue}>{minutes}</span>
                <span className={styles.timeLabel}>{t('minutes')}</span>
            </div>
            <div className={styles.timeBlock}>
                <span className={styles.timeValue}>{seconds}</span>
                <span className={styles.timeLabel}>{t('seconds')}</span>
            </div>
        </div>
    );

    return (
        <section className={styles.invitationSection}>
            <div className={styles.invitationWrap}>
                <h2 className={styles.invitationTitle}>{t('weddingInvitationTitle')}</h2>
                <p className={styles.invitationText}>
                    {t('weddingInvitationText')}
                </p>
                <p className={styles.invitationSubText}>
                    {t('weddingDate')}: <span>{t('weddingDateDetails')}</span>
                </p>
                <p className={styles.invitationMessage}>
                    {t('weddingMessage')}
                </p>
                <div className={styles.countdownWrap}>
                    <h3 className={styles.countdownTitle}>{t('countdownTitle')}</h3>
                    <Countdown date={weddingDate} renderer={renderer} />
                </div>
            </div>
        </section>
    );
};

export default Timer;
