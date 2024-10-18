'use client'

import Image from 'next/image';
import styles from './services.module.css';
import Logo_Alumina from '../../../../public/images/Alumina_Logo_White.png';
import { useEffect, useRef, useState } from 'react';



const Services = () => {

    const [animate, setAnimate] = useState(false);
    const [animate2, setAnimate2] = useState(false);

    const animationRef = useRef();
    const animation2Ref = useRef();



    useEffect(() => {
        const animationObserver = new IntersectionObserver(
            (entries, observer) => { 
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === animationRef.current) {
                            setAnimate(true);
                            observer.unobserve(entry.target);
                        } else if (entry.target === animation2Ref.current) {
                            setAnimate2(true);
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            { threshold: 0 }
        );
    
        if (animationRef.current) {
            animationObserver.observe(animationRef.current);
        }
    
        if (animation2Ref.current) {
            animationObserver.observe(animation2Ref.current);
        }
    
        return () => {
            if (animationRef.current) {
                animationObserver.unobserve(animationRef.current);
            }
    
            if (animation2Ref.current) {
                animationObserver.unobserve(animation2Ref.current);
            }
        };
    }, []);


  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='servicios'></div>
        <div className={styles.wrapper} ref={animationRef}>
            <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>
                Servicios
            </h1>
            <hr className={`${styles.hr} ${animate ? styles.visible : ''}`} />
            <div className={styles.content} ref={animation2Ref}>
                <div className={styles.top}>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card}`} style={{transform: 'none'}}>
                            <div className={`${styles.front}`}>
                                <Image className={styles.logo} src={Logo_Alumina} alt='logo' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`}>
                            <div className={`${styles.front} ${styles.mainColor}`} />
                            <div className={styles.textContainer}>
                                <h3>Seguridad<br/>Psicológica</h3>
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>Arriesgamos con sentido, haciendo nuestro tu propósito.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`} style={{animationDelay: '.3s'}}>
                            <div className={`${styles.front} ${styles.secondaryColor}`} />
                            <div className={styles.textContainer}>
                                <h3>Liderazgo<br/>Conectivo</h3>
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>No nos da lo mismo. Decididos, nos involucramos en el diseño de cada solución.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`} style={{animationDelay: '.6s'}}>
                            <div className={`${styles.front} ${styles.terciaryColor}`} />
                            <div className={styles.textContainer}>
                                <h3>Agilidad e<br/>Innovación</h3> 
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>El juego en equipo es la clave. Fomentamos y potenciamos la colaboración.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`} style={{animationDelay: '.9s'}}>
                            <div className={`${styles.front} ${styles.fourthColor}`} />
                            <div className={styles.textContainer}>
                                <h3>Coaching<br/>Profesional</h3> 
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>Lo más imporante será siempre resolver tu necesidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
