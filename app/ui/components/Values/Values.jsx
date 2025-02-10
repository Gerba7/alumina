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
    const animation3Ref = useRef();
    const animation4Ref = useRef();
    const animation5Ref = useRef();



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
                        } else if (entry.target === animation3Ref.current) {
                            setAnimate2(true);
                            observer.unobserve(entry.target);
                        } else if (entry.target === animation4Ref.current) {
                            setAnimate2(true);
                            observer.unobserve(entry.target);
                        } else if (entry.target === animation5Ref.current) {
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

        if (animation3Ref.current) {
            animationObserver.observe(animation2Ref.current);
        }

        if (animation4Ref.current) {
            animationObserver.observe(animation2Ref.current);
        }

        if (animation5Ref.current) {
            animationObserver.observe(animation2Ref.current);
        }
    
        return () => {
            if (animationRef.current) {
                animationObserver.unobserve(animationRef.current);
            }
    
            if (animation2Ref.current) {
                animationObserver.unobserve(animation2Ref.current);
            }

            if (animation3Ref.current) {
                animationObserver.unobserve(animation2Ref.current);
            }

            if (animation4Ref.current) {
                animationObserver.unobserve(animation2Ref.current);
            }

            if (animation5Ref.current) {
                animationObserver.unobserve(animation2Ref.current);
            }
        };
    }, []);


  return (
    <div className={styles.container} ref={animationRef}>
        <div className={styles.scrollOffset} id='valor-agregado'></div>
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>
                Nuestro Valor Agregado
            </h1>
            <hr className={`${styles.hr} ${animate ? styles.visible : ''}`} />
        </div>
        <div className={styles.content}>
            <div className={styles.gridContainer}>
                <div className={styles.itemContainer} ref={animation2Ref}>
                    <div className={`${styles.imgContainer} ${animate2 && styles.slideIn}`}>
                        <div className={`${styles.triangle} ${styles.main}`} />
                        <h3 className={styles.valueText}>Catálisis Cultural</h3>
                        <Image src={Cultural} className={`${styles.img}`} />
                    </div>
                    <div className={`${styles.textContainer} ${styles.main}`}>
                        <p className={styles.text}>
                            <b>Cada empresa tiene su ADN</b>. Trabajamos con lo que ya tienen, alineando soluciones con 
                            su propósito y la historia que quieren contar.
                        </p>
                    </div>
                </div>
                <div className={styles.itemContainer} ref={animation3Ref}>
                    <div className={`${styles.imgContainer} ${animate2 && styles.slideIn}`}>
                        <div className={`${styles.triangle} ${styles.main}`} />
                        <h3 className={styles.valueText}>Agilidad de verdad</h3>
                        <Image src={Innovation} className={styles.img} />
                    </div>
                    <div className={`${styles.textContainer} ${styles.main}`}>
                        <p className={styles.text}>
                            Si alguien dice que la agilidad está muerta, es porque no la entendió. <b>La agilidad impulsa equipos de alto
                            rendimiento y organizaciones más saludables y adaptables.</b>
                        </p>
                    </div>
                </div>
                <div className={styles.itemContainer} ref={animation4Ref}>
                    <div className={`${styles.textContainer} ${styles.secondary}`}>
                        <p className={styles.text}>
                            Las organizaciones son un todo. <b>Sabemos cómo las acciones a nivel micro impactan en lo macro</b> y trabajamos
                            para que todo se alinee de manera armónica.
                        </p>
                    </div>
                    <div className={`${styles.imgContainer} ${animate2 && styles.slideOut}`}>
                        <div className={`${styles.triangle} ${styles.tRight} ${styles.secondary}`} />
                        <h3 className={styles.valueText}>Mirada sistémica</h3>
                        <Image src={System} className={styles.img} />
                    </div>
                </div>
                <div className={styles.itemContainer} ref={animation5Ref}>
                    <div className={`${styles.textContainer} ${styles.secondary}`}>
                        <p className={styles.text}>
                            <b>Las organizaciones deben crear espacios donde las personas encuentren realización y disfrute.</b> Equipos
                            felices son equipos que marcan la diferencia.
                        </p>
                    </div>
                    <div className={`${styles.imgContainer} ${animate2 && styles.slideOut}`}>
                        <div className={`${styles.triangle} ${styles.tRight} ${styles.secondary}`} />
                        <h3 className={styles.valueText}>Felicidad organizacional</h3>
                        <Image src={People} className={styles.img} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values
