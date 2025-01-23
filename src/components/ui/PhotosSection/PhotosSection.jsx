import React, { useLayoutEffect, useRef } from 'react';
import styles from "./PhotosSection.module.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PhotosSection = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    // Рассчитываем реальную ширину контента минус ширина окна
    const totalWidth = wrapper.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true, // Для отладки
      }
    });

    // Анимация движения
    tl.to(wrapper, {
      x: -totalWidth,
      ease: 'none'
    });

    // Очистка
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section className={styles.photosWrapSection} ref={sectionRef} id="sectionPin">
      <div className={styles.photosWrap} ref={wrapperRef}>
        <h2 className={styles.photosDesc}>Это мы — Катя и Леша. Два разных мира, которые сошлись в одном.  Каждое фото — это не просто момент, это история нашего путешествия, которое только начинается</h2>
        <div className={styles.photoBlock} >
          <img className={styles.photoImg} src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.photoImg} src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>
        </div>
        <div className={styles.photoBlock}>
          <img className={styles.photoImg} src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;