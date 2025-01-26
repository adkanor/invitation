import React, { useRef, useEffect } from 'react';
import styles from "./Timer.module.css";
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import { gsap } from "gsap";

const Timer = () => {
    const { t } = useTranslation();
    const weddingDate = new Date('2025-05-05T00:00:00');
    const invitationText = useRef(null);
    const calendarRef = useRef(null);
    const countdownRef = useRef(null);
const invitationTextTwo = useRef(null);
    //Countdown render
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
        
        if (window.innerWidth > 768) {
            const calendarElement = calendarRef.current;
            const countdownElement = countdownRef.current;

            gsap.timeline({
                scrollTrigger: {
                    trigger: calendarElement,
                    start: "top bottom",
                    scrub: 0.5,

                    toggleActions: "play none none reverse"
                },
            })
                .to(calendarElement, { y: -50, duration: 1 }, 0)
                .to(countdownElement, { y: -100, duration: 1 }, 0);
        }

    }, []);

    return (
        <section className={styles.invitationSection}>
            <div className={styles.invitationWrap}>
                <h2 className={styles.invitationTitle}>{t('weddingInvitationTitle')}</h2>
                <p ref={invitationText} className={styles.invitationText}>
                    {t('weddingInvitationText')}
                </p>
                <p ref={invitationTextTwo} className={styles.invitationTextTwo}>
                    {t('weddingInvitationTextTwo')}
                </p>
                <div className={styles.flexContainer}>
                    <div className={styles.calendarWrap} ref={calendarRef}>
                        <h3 className={styles.calendarTitle}>{t('weddingDate')}: {t('weddingDateDetails')}</h3>

                        {/*  calendar*/}

                        <div className={styles.calendar}>
                            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day, index) => (
                                <div key={index} className={styles.dayName}>
                                    {t(`weekdays.${day}`)}
                                </div>
                            ))}

                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={`empty-${index}`} className={styles.day}></div>
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

                    {/* countdown */}

                    <div className={styles.countdownWrap} ref={countdownRef} >
                        <h3 className={styles.countdownTitle}>{t('countdownTitle')}</h3>
                        <Countdown date={weddingDate} renderer={renderer} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timer;