import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next'
import styles from "./PlaceOfWedding.module.css"
import { gsap } from "gsap";

const PlaceOfWeddingInfo = () => {
    const { t } = useTranslation();
  const placeOfWeddingTitleRef = useRef(null);
  const howToGetTitleRef = useRef(null);
  const mapRef= useRef(null);
  const howToGetTextRef = useRef(null);
  const placeOfWeddingAdress = useRef(null);
  const venueAdress = useRef(null);
  useEffect(() => {
    gsap.fromTo(
        howToGetTitleRef.current,
        { opacity: 0, scale: 0.8, color: "#ff914d",  }, 
        {
            opacity: 1,
            scale: 1,
            color: "#ff911d", 
           
            duration: 1.7, 
            scrollTrigger: {
                trigger: howToGetTitleRef.current,
                start: "top 90%", 
                end: "top 60%",  
                toggleActions: "play none none none", 
            },
        }
    );
   
}); 
useEffect(() => {
    const textElement = placeOfWeddingAdress.current;
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
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }
}, []);

useEffect(() => {
    const textElement = howToGetTextRef.current;
    const textContent = textElement.textContent;

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
                start: "top 80%", 
                toggleActions: "play none none none",
            },
        }
    );
    
}, []);

    return (
        <section id="venue">
            <div className={styles.placeOfWeddingSection}>
                <h2 ref={placeOfWeddingTitleRef} className={styles.placeOfWeddingTitle}>{t('venueTitle')}</h2>
                <p   className={styles.placeOfWeddingText}>{t('venueDescription')}</p>
                <p ref={placeOfWeddingAdress} className={styles.placeOfWeddingAdress}>{t('venueAdress')}</p>
            </div>
            <div className={styles.placeOfWeddingPhoto}></div>
            <div className={styles.howToGetSection}>
                <div className={styles.howToGetInfo}>
                    <h2 ref={howToGetTitleRef} className={styles.howToGetTitle}>{t('howToGet')}</h2>
                    <p  ref={howToGetTextRef} className={styles.howToGetText}>{t('transportation')}</p>
                </div>
                <div>
                <iframe ref={mapRef} title="hotel 'Kozi Grod'" className={styles.mapHotel}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.695920189532!2d18.37333037738817!3d54.22087107255593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd828260a3a1cb%3A0x805b9815e4f739!2sHotel%20Kozi%20Gr%C3%B3d!5e0!3m2!1sen!2spl!4v1737835934086!5m2!1sen!2spl" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </section>
    )
}

export default PlaceOfWeddingInfo;