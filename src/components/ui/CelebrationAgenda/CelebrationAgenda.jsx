import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./CelebrationAgenda.module.css";
import LocationIcon from "../../../assets/images/locationIcon.svg"
import GlassesIcon from "../../../assets/images/glassesIcon.svg"
import CeremonyIcon from "../../../assets/images/ceremonyIcon.svg"
import DanceIcon from "../../../assets/images/danceIcon.svg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CelebrationAgenda = () => {
    const { t } = useTranslation();

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
                        start: "top 90%", 
                        end: "top 50%",  
                        toggleActions: "play none none none", 
                    },
                }
            );

          
        gsap.fromTo(
            agendaDescriptionTitleRefs.current, 
            { opacity: 0,  }, 
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: agendaDescriptionTitleRefs.current,
                    start: "top 90%", 
                    end: "bottom 20%", 
                     scrub: true,  
                }
            }
        );

        
        }, []);

        

        return (
            <div className={styles.agendaSection} id="plan">
                <h2 className={styles.agendaTitle}>{t('agendaTitle')}</h2>
                <div className={styles.agendaContainer}>
                    <div className={styles.timeline}></div>
                    <div className={styles.agendaItem}>
                        <div className={styles.agendaTime} ref={setAgendaTimeRef}>
                            <img className={styles.agendaSvg} src={LocationIcon} alt='Ceremony icon' />
                            <span>15:00</span>
                        </div>
                        <div className={styles.dot}></div>
                        <div className={styles.agendaDescription}  >
                            <div className={styles.agendaDescriptionTitle} ref={setAgendaTitlesRef}>
                                {t('guestMeeting')}
                            </div>
                            <div className={styles.agendaDescriptionText}ref={setAgendaDescriptionTitleRef}>{t('guestMeetingDescription')}</div>
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
            </div>
        );
    };

    export default CelebrationAgenda;
