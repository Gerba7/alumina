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
            <b>Somos un equipo que está acá para generar cambio de verdad</b>. Lo hacemos con pasión, disfrute y, sobre
            todo, poniendo el foco en lo que más importa: las personas.
          </h3>
        </div>
        <div className={`${styles.wrapper} ${styles.row}`}>
          <div className={styles.left}>
            <div className={`${styles.title2} ${animate ? styles.visible : ''}`}>
              ¿Que hacemos?
            </div>
            <h3 className={`${styles.subtitle} ${animate ? styles.visible : ''}`}>
            <b>Catalizamos procesos de transformación</b>. Nos enfocamos en la mentalidad, actitud y habilidades de
              todos en la organización. Ayudamos a abrazar la incertidumbre, ser ágiles, flexibles y crear seguridad
              emocional.
            </h3>
          </div>
          <div className={styles.right}>
            <div className={`${styles.title2} ${animate ? styles.visible : ''}`}>
              ¿Por que lo hacemos?
            </div>
            <h3 className={`${styles.subtitle} ${animate ? styles.visible : ''}`}>
              Porque un equipo fuerte es un equipo que se siente seguro y capaz de evolucionar. <b>Estamos acá para
              hacer cambios que realmente marquen la diferencia.</b>
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Banner
