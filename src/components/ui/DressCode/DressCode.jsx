import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';
import styles from "./DressCode.module.css"

const Dresscode = () => {
  const { t } = useTranslation();
  const dresscodeText = useRef(null);
const dresscodeTitle = useRef(null);
const dresscodeTextOne = useRef(null);
  const dresscodeOptions = [
    { color: '#ffffff' },
    { color: '#d2b48c' },
    { color: '#6F4F37' },
    { color: '#cce7ff' },
    { color: '#87cefa' },
    { color: '#4682b4' },
    { color: '#3a608a' },
    { color: '#2d4a69' },
    { color: '#000000' },
  ];
  useEffect(() => {
    gsap.fromTo(
      dresscodeTitle.current,
        { opacity: 0, scale: 1, color: "#ff914d", y: 50 }, 
        {
            opacity: 1,
            scale: 1.2,
            color: "#ff911d", 
            y: 0,
            duration: 0.7, 
            scrollTrigger: {
                trigger: dresscodeTitle.current,
                start: "top 90%", 
                end: "top 60%",  
                toggleActions: "play none none none", 
            },
        }
    );
  },[]);


  
  useEffect(() => {
    const textElement = dresscodeTextOne.current;
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
    const textElement = dresscodeText.current;
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
                delay: 1, 
                scrollTrigger: {
                    trigger: textElement,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }
}, []);

  return (
    <div className={styles.dresscodeSection} id="dress-code">
      <h2 ref={dresscodeTitle}  className={styles.dresscodeTitle}>{t('dresscodeTitle')}</h2>
      
      <p  ref={dresscodeTextOne}  className={styles.dresscodeText}>{t('dresscodeNotRequired')}</p>
      <p ref={dresscodeText}   className={styles.dresscodeText}>{t('dresscodeDescription')}</p>
     
      <div className={styles.dresscodeCircleSection}>
        {dresscodeOptions.map((option, index) => (
          <div
            key={index}
            className={styles.dresscodeCircle}
            style={{ backgroundColor: option.color }}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dresscode;
