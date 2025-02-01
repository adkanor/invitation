import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./CelebrationAgenda.module.css";
import LocationIcon from "../../../assets/images/locationIcon.svg"
import GlassesIcon from "../../../assets/images/glassesIcon.svg"
import CeremonyIcon from "../../../assets/images/ceremonyIcon.svg"
import DanceIcon from "../../../assets/images/danceIcon.svg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OrangeAgendaFlower from "./OrangeAgendaFlower.svg"
gsap.registerPlugin(ScrollTrigger);

const CelebrationAgenda = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const agendaTitle = useRef();
    const agendaTimeRefs = useRef([]);
    const agendaTitles = useRef([]);
    const agendaDescriptionTitleRefs = useRef([]);

    const setAgendaTimeRef = (el) => {
        if (el && !agendaTimeRefs.current.includes(el)) {
            agendaTimeRefs.current.push(el);
        }
    };
    const setAgendaDescriptionTitleRef = (el) => {
        if (el && !agendaDescriptionTitleRefs.current.includes(el)) {
            agendaDescriptionTitleRefs.current.push(el);
        }
    };
    const setAgendaTitlesRef = (el) => {
        if (el && !agendaTitles.current.includes(el)) {
            agendaTitles.current.push(el);
        }
    };

    useEffect(() => {


        gsap.fromTo(
            agendaTitles.current,
            { opacity: 0, scale: 0.7, color: "#ff914d", y: 20 },
            {
                opacity: 1,
                scale: 1,
                color: "#ff911d",
                y: 0,
                duration: 0.7,
                scrollTrigger: {
                    trigger: agendaTitles.current,
                    start: "top bottom",
                    end: "top 50%",
                    toggleActions: "play none none none",
                },
            }
        );

        if (window.innerWidth > 600) {
            gsap.fromTo(
                agendaDescriptionTitleRefs.current,
                { opacity: 0, x: 200 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 2,

                    scrollTrigger: {
                        trigger: agendaDescriptionTitleRefs.current,
                        start: "top bottom",
                        end: "bottom 50%",
                        scrub: true,
                    }
                }
            );
        }

    }, []);

    useEffect(() => {
        gsap.fromTo(
            agendaTitle.current,
            { opacity: 0, scale: 0.8, color: "#ff914d", },
            {
                opacity: 1,
                scale: 1,
                color: "#ff911d",

                duration: 1.7,
                scrollTrigger: {
                    trigger: agendaTitle.current,
                    start: "top bottom",
                    end: "top 60%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div className={styles.agendaSectionWrapper} >

            <img className={styles.flowersSvg} src={OrangeAgendaFlower} alt='flowersSvg' />

            <div className={styles.agendaSection} id="plan"><div>

            </div>
                <h2 data-lang={lang} ref={agendaTitle} className={styles.agendaTitle}>{t('agendaTitle')}</h2>
                <div className={styles.agendaContainer}>
                    <div className={styles.timeline}></div>
                    <div className={styles.agendaItem}>
                        <div className={styles.agendaTime} ref={setAgendaTimeRef}>
                            <img className={styles.agendaSvg} src={LocationIcon} alt='Ceremony icon' />
                            <span>15:30</span>
                        </div>
                        <div className={styles.dot}></div>
                        <div className={styles.agendaDescription}  >
                            <div className={styles.agendaDescriptionTitle} ref={setAgendaTitlesRef}>
                                {t('guestMeeting')}
                            </div>
                            <div className={styles.agendaDescriptionText} ref={setAgendaDescriptionTitleRef}>{t('guestMeetingDescription')}</div>
                        </div>
                    </div>
                    <div className={styles.agendaItem}>
                        <div className={styles.agendaTime} ref={setAgendaTimeRef}>
                            <img className={styles.agendaSvg} src={CeremonyIcon} alt='Ceremony icon' />
                            <span>16:00</span>
                        </div>
                        <div className={styles.dot}></div>
                        <div className={styles.agendaDescription}  >
                            <div className={styles.agendaDescriptionTitle} ref={setAgendaTitlesRef} >
                                {t('marriageCeremony')}
                            </div>
                            <div className={styles.agendaDescriptionText} ref={setAgendaDescriptionTitleRef}>{t('marriageCeremonyDescription')}</div>
                        </div>
                    </div>
                    <div className={styles.agendaItem}>
                        <div className={styles.agendaTime} ref={setAgendaTimeRef}>
                            <img className={styles.agendaSvg} src={GlassesIcon} alt='Ceremony icon' />
                            <span>17:00</span>
                        </div>
                        <div className={styles.dot}></div>
                        <div className={styles.agendaDescription}  >
                            <div className={styles.agendaDescriptionTitle} ref={setAgendaTitlesRef}>
                                {t('weddingDinner')}
                            </div>
                            <div className={styles.agendaDescriptionText} ref={setAgendaDescriptionTitleRef}>{t('weddingDinnerDescription')}</div>
                        </div>
                    </div>
                    <div className={styles.agendaItem}>
                        <div className={styles.agendaTime} ref={setAgendaTimeRef}>
                            <img className={styles.agendaSvg} src={DanceIcon} alt='Ceremony icon' />
                            <span>20:00</span>
                        </div>
                        <div className={styles.dot}></div>
                        <div className={styles.agendaDescription}  >
                            <div className={styles.agendaDescriptionTitle} ref={setAgendaTitlesRef}>
                                {t('dancing')}
                            </div>
                            <div className={styles.agendaDescriptionText} ref={setAgendaDescriptionTitleRef}>{t('dancingDescription')}</div>
                        </div>
                    </div>
                </div>
            </div>  </div>
    );
};

export default CelebrationAgenda;
