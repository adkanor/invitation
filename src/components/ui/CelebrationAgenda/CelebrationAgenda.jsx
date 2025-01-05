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

    // Заполняем рефы для каждого элемента
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

        // АНИМАЦИЯ 1

        // const anim = gsap.fromTo(agendaTimeRefs.current, { x: -500, paused: true },{ x: 0, paused: true });
        // ScrollTrigger.create({
        //     trigger: agendaTimeRefs.current,
        //     start: "center 70%", scrub: 5,
        //     onEnter: () => anim.play()
        //   });

        //   ScrollTrigger.create({
        //     trigger: agendaTimeRefs.current,
        //     start: "top bottom", scrub: 5,
        //     onLeaveBack: () => anim.pause(0)
        //   });

        // АНИМАЦИЯ 2
        gsap.fromTo(
            agendaTitles.current, 
            {  x:130 }, 
            {
             x:0 ,
                scrollTrigger: {
                    trigger: agendaTitles.current,
                    start: "top 90%", 
                    end: "bottom 20%", 
                     scrub: true,  
                    markers: true,
                }
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
                    markers: true,
                }
            }
        );

        gsap.to(agendaTimeRefs.current, { 
            x: 300,
            scrollTrigger: {
              trigger: agendaTimeRefs.current,
              scrub: true,
               start: "top 90%", 
              end: "bottom 20%", 
          
            }
          })
        }, []);

        return (
            <div className={styles.agendaSection}>
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
