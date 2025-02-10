'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './banner.module.css';



const Banner = () => {

  const [animate, setAnimate] = useState(false);

  const animationRef = useRef();


  useEffect(() => {

    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
          if (entries[0].isIntersecting) {
            setAnimate(true);
            observer.unobserve(entries[0].target);
          }
      },
      { threshold: 0 }
    );

    if (animationRef.current) {
    animationObserver.observe(animationRef.current);
    }

    return () => {

    if (animationRef.current) {
        animationObserver.unobserve(animationRef.current);
    }

    };

  }, [])


  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='quienes-somos'></div>
        <div className={styles.wrapper}>
          <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>
            Quiénes somos
          </h1>
          <hr className={styles.hr} />
          <h3 className={`${styles.subtitle} ${animate ? styles.visible : ''}`} ref={animationRef}>
            Somos un grupo interdisciplinario de <b>profesionales apasionados</b> <br/>por las personas y el desarrollo del potencial organizacional.
          </h3>
        </div>
        <div className={`${styles.wrapper} ${styles.row}`}>
          <div className={styles.left}>
            <div className={`${styles.title2} ${animate ? styles.visible : ''}`}>
              ¿Que hacemos?
            </div>
            <h3 className={`${styles.subtitle} ${animate ? styles.visible : ''}`}>
              Consultoría especializada en psicología organizacional y coaching, centrada en la necesidad de cada cliente.
            </h3>
          </div>
          <div className={styles.right}>
            <div className={`${styles.title2} ${animate ? styles.visible : ''}`}>
              ¿Por que lo hacemos?
            </div>
            <h3 className={`${styles.subtitle} ${animate ? styles.visible : ''}`}>
              Nuestro propósito es acompañar a las organizaciones en conseguir su máximo potencial a través del desarrollo de las personas.
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Banner
