import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBlock = () => {
  const imageRef = useRef(null); 

  useEffect(() => {
    gsap.to(imageRef.current, {
      x: -300, 
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current, 
        start: 'top bottom', 
        end: 'bottom top',   
        scrub: true,        
      },
    });
  }, []);

  return (
    <div style={styles.container}>
      <div ref={imageRef} style={styles.image}></div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '500px', 
    height: '600px', 
    overflow: 'hidden', 
    border: '2px solid black', 
  },
  image: {
    position: 'absolute',
    width: '700px',
    height: '100%', 
    backgroundImage: "url('https://via.placeholder.com/1920x1080')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'translateX(0)', 
  },
};

export default ParallaxBlock;
