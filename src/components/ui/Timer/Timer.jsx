import React, {useRef, useEffect} from 'react';
import styles from "./Timer.module.css";
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import { gsap } from "gsap";

const Timer = () => {
    const { t } = useTranslation();
    const weddingDate = new Date('2025-05-05T00:00:00');
    const month = t("May");
    const daysInMonth = 31;
    const weddingDay = 5;
    const invitationText = useRef(null);

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
    useEffect(() => {
        const textElement = invitationText.current;
        const textContent = textElement.textContent;

        if (textContent && textElement) {
            textElement.innerHTML = textContent
                .split("")
                .map(char => `<span>${char}</span>`)
                .join("");

            gsap.fromTo(
                textElement.querySelectorAll("span"),
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.03,
                    scrollTrigger: {
                        trigger: textElement,
                        start: "top bottom", 
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);
    return (
        <section className={styles.invitationSection}>
            <div className={styles.invitationWrap}>
                <h2 className={styles.invitationTitle}>{t('weddingInvitationTitle')}</h2>
                <p ref={invitationText} className={styles.invitationText}>
                    {t('weddingInvitationText')}
                </p>
                <p className={styles.invitationSubText}>
                    {t('weddingDate')}: 

                </p>

                <p className={styles.invitationMessage}>
                    {t('weddingMessage')}
                </p>
                   {/* Визуальный календарь */}
                   <div className={styles.calendarWrap}>
                    <h3 className={styles.calendarTitle}>{month} 2025</h3>
                    <div className={styles.calendar}>
                        {Array.from({ length: daysInMonth }, (_, i) => {
                            const day = i + 1;
                            return (
                                <div
                                    key={day}
                                    className={`${styles.day} ${
                                        day === weddingDay ? styles.highlightedDay : ""
                                    }`}
                                >
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.countdownWrap}>
                    <h3 className={styles.countdownTitle}>{t('countdownTitle')}</h3>
                    <Countdown date={weddingDate} renderer={renderer} />
                </div>
            </div>
        </section>
    );
};

export default Timer;
