'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './values.module.css';
import Image from 'next/image';
import Innovation from '../../../../public/images/innovation.jpg';
import Cultural from '../../../../public/images/cultural.jpg';
import System from '../../../../public/images/system.jpg';
import People from '../../../../public/images/people.jpg';



const Values = () => {

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
    <div className={styles.container} ref={animationRef}>
        <div className={styles.scrollOffset} id='valores'></div>
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>
                Nuestros Valores
            </h1>
            <hr className={`${styles.hr} ${animate ? styles.visible : ''}`} />
        </div>
        <div className={styles.content}>
            <div className={styles.gridContainer}>
                <div className={styles.itemContainer} ref={animation2Ref}>
                    <div className={`${styles.imgContainer} ${animate2 && styles.slideIn}`}>
                        <div className={`${styles.triangle} ${styles.main}`} />
                        <h3 className={styles.valueText}>Visión Cultural</h3>
                        <Image src={Cultural} className={`${styles.img}`} />
                    </div>
                    <div className={`${styles.textContainer} ${styles.main}`}>
                        <p className={styles.text}>
                            Tenemos en cuenta la cultura de cada organización a la hora de diseñar propuestas. 
                            Nos enfocamos en los valores e identidad de cada una.
                        </p>
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={`${styles.imgContainer} ${animate2 && styles.slideIn}`}>
                        <div className={`${styles.triangle} ${styles.main}`} />
                        <h3 className={styles.valueText}>Innovación y Agilidad</h3>
                        <Image src={Innovation} className={styles.img} />
                    </div>
                    <div className={`${styles.textContainer} ${styles.main}`}>
                        <p className={styles.text}>
                            Siempre partimos de la necesidad específica de cada cliente para proponer soluciones. 
                            Durante el despliegue fomentamos la transparencia, mejora continua y adaptación.
                        </p>
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={`${styles.textContainer} ${styles.secondary}`}>
                        <p className={styles.text}>
                            Proveemos una mirada integral a la hora de diseñar soluciones, buscamos alternativas no estandarizadas. 
                            Buscamos generar el mayor impacto posible de la manera más eficiente.
                        </p>
                    </div>
                    <div className={`${styles.imgContainer} ${animate2 && styles.slideOut}`}>
                        <div className={`${styles.triangle} ${styles.tRight} ${styles.secondary}`} />
                        <h3 className={styles.valueText}>Integral y Sistémico</h3>
                        <Image src={System} className={styles.img} />
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={`${styles.textContainer} ${styles.secondary}`}>
                        <p className={styles.text}>
                            Las personas siempre estarán en el centro. Todas las herramientas compartidas tendrán como foco a las personas, 
                            su bienestar y realización en el ámbito laboral. Buscamos desarrollar ambientes laboral más felices.
                        </p>
                    </div>
                    <div className={`${styles.imgContainer} ${animate2 && styles.slideOut}`}>
                        <div className={`${styles.triangle} ${styles.tRight} ${styles.secondary}`} />
                        <h3 className={styles.valueText}>Centrado en las Personas</h3>
                        <Image src={People} className={styles.img} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values
