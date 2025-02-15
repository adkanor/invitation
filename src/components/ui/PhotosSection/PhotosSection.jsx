import React, { useLayoutEffect, useRef } from 'react';
import styles from "./PhotosSection.module.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MainHeaderPhotoCouple from "../../../assets/images/we.jpg"
import MainHeaderPhotoCouple2 from "../../../assets/images/we3.jpeg"
import MainHeaderPhotoCouple5 from "../../../assets/images/we2.jpeg"

import { useTranslation } from 'react-i18next';
import Icon_hearts from "../../../assets/images/icon-hearts.png"

gsap.registerPlugin(ScrollTrigger);

const PhotosSection = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    const totalWidth = wrapper.offsetWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    tl.to(wrapper, {
      x: -totalWidth,
      ease: 'none'
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <>
    <section className={styles.photosWrapSection} ref={sectionRef} id="sectionPin">
      <div className={styles.photosWrap} ref={wrapperRef}>
        <h2 className={styles.photosDesc}>  {t('headerHello')}
        <img className={styles.photoSvg} src={Icon_hearts} alt="Icon hearts"/>
        <span className={styles.photosDescSpan}>      {t('headerDescription')}
    
        </span>
        <span className={styles.arrowDown}>▼</span>

        </h2>
        <div className={styles.photoBlock}>
          <img className={styles.photoImg} src={MainHeaderPhotoCouple} alt="Main Header Couple"/>
        </div>
        <div className={styles.photoBlock} >
          <img className={styles.photoImg} src={MainHeaderPhotoCouple2} alt="Main Header Couple "/>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.photoImg} src={MainHeaderPhotoCouple5} alt="Main Header Couple"/>
        </div>
      </div>
    </section>
    </>
  );
};

export default PhotosSection;