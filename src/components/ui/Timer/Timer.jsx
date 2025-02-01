import React, { useRef, useEffect } from 'react';
import styles from "./Timer.module.css";
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import { gsap } from "gsap";
import countDownTimer from "../../../assets/images/countDownTimer.svg";
import calendarTimer from "../../../assets/images/calendarTimer.svg";
const Timer = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const weddingDate = new Date('2025-05-05T00:00:00');
    const invitationText = useRef(null);
    const calendarRef = useRef(null);
    const countdownRef = useRef(null);
    const invitationTextTwo = useRef(null);
    //Countdown render
    const renderer = ({ days, hours, minutes, seconds }) => (
        <div className={styles.countdown}>
            <div className={styles.timeBlock}>
                <span className={styles.timeValue} >{days}</span>
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

    //Animation
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
        const textElementTwo = invitationTextTwo.current;
        const textContentTwo = textElementTwo.textContent;

        if (textContentTwo && textElementTwo) {
            textElementTwo.innerHTML = textContentTwo
                .split("")
                .map(char => `<span>${char}</span>`)
                .join("");

            gsap.fromTo(
                textElementTwo.querySelectorAll("span"),
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.03,
                    delay: 2,
                    scrollTrigger: {
                        trigger: textElementTwo,
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
                <h2 data-lang={lang} className={styles.invitationTitle}>{t('weddingInvitationTitle')}</h2>
                <p ref={invitationText} className={styles.invitationText}>

                    {t('weddingInvitationText')}
                </p>
                <p ref={invitationTextTwo} className={styles.invitationTextTwo}>
                    {t('weddingInvitationTextTwo')}
                </p>

                <div className={styles.divider}></div>


                <div className={styles.flexContainer}>


                    <div className={styles.calendarWrap} ref={calendarRef}>
                        <h3 className={styles.calendarTitle}>
                            <img className={styles.svg} src={calendarTimer} alt='flowersSvg' />

                            {t('weddingDate')}:
                            <span className={styles.calendarTitleSpan}> {t('weddingDateDetails')}</span>

                        </h3>

                        <div className={styles.calendarDates}>
                            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day, index) => (
                                <div
                                    key={index}
                                    className={`${styles.dayName} ${day === 'mon' ? styles.monday : styles.otherDay}`}
                                >
                                    {t(`weekdays.${day}`)}
                                </div>
                            ))}
                        </div>

                        <div className={styles.calendar}>



                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={`empty-${index}`} className={styles.epmtyDay}></div>
                            ))}

                            {Array.from({ length: 31 }).map((_, index) => {
                                const day = index + 1;
                                const isHighlighted = day === 5;

                                return (
                                    <div
                                        key={day}
                                        className={`${styles.day} ${isHighlighted ? styles.highlightedDay : ''}`}
                                    >
                                        {day}
                                    </div>
                                );
                            })}
                        </div>

                    </div>


                    <div className={styles.countdownWrap} ref={countdownRef} >
                        <h3 className={styles.countdownTitle}>
                            <img className={styles.svg} src={countDownTimer} alt='flowersSvg' />

                            <span className={styles.countdownTitleSpan}>{t('countdownTitle')}</span>
                        </h3>
                        <Countdown date={weddingDate} renderer={renderer} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timer;