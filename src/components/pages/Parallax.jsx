import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBlock = () => {
  const imageRef = useRef(null); // Ссылка на изображение

  useEffect(() => {
    // Анимация движения изображения внутри блока
    gsap.to(imageRef.current, {
      x: -300, // Двигаем изображение влево
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current, // Отслеживаем блок
        start: 'top bottom', // Начало анимации
        end: 'bottom top',   // Конец анимации
        scrub: true,         // Привязка к скроллу
      },
    });
  }, []);

  return (
    <div style={styles.container}>
      <div ref={imageRef} style={styles.image}></div>
    </div>
  );
};

// Стили для блока
const styles = {
  container: {
    position: 'relative',
    width: '500px', // Ширина блока
    height: '600px', // Высота блока
    overflow: 'hidden', // Скрываем всё, что выходит за пределы блока
    border: '2px solid black', // Для визуализации блока
  },
  image: {
    position: 'absolute',
    width: '700px', // Изображение больше, чем блок
    height: '100%', // Высота совпадает с высотой блока
    backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Замени на свою картинку
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'translateX(0)', // Начальное положение
  },
};

export default ParallaxBlock;
