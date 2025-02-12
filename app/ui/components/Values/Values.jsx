'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './values.module.css';
import Image from 'next/image';
import Innovation from '../../../../public/images/innovation.jpg';
import Cultural from '../../../../public/images/cultural.jpg';
import System from '../../../../public/images/system.jpg';
import People from '../../../../public/images/people.jpg';

const Values = () => {

    const [animations, setAnimations] = useState([false, false, false, false]); // Ajusta el número de animaciones
    const animationRefs = useRef([]); // Ref vacía para contener los elementos

    useEffect(() => {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                const index = animationRefs.current.indexOf(entry.target);
                if (entry.isIntersecting && index !== -1) {
                    setAnimations((prev) => {
                        const updatedAnimations = [...prev];
                        updatedAnimations[index] = true;
                        return updatedAnimations;
                    });
                    observer.unobserve(entry.target); // Deja de observar cuando el elemento está en vista
                }
            });
        }, { threshold: 0 });

        // Observar todos los elementos de animación
        animationRefs.current.forEach((ref) => {
            if (ref) {
                animationObserver.observe(ref);
            }
        });

        return () => {
            animationRefs.current.forEach((ref) => {
                if (ref) {
                    animationObserver.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.scrollOffset} id="valor-agregado"></div>
            <div className={styles.wrapper}>
                <h1 className={`${styles.title} ${animations[0] ? styles.visible : ''}`}>
                    Nuestro Valor Agregado
                </h1>
                <hr className={`${styles.hr} ${animations[0] ? styles.visible : ''}`} />
            </div>
            <div className={styles.content}>
                <div className={styles.gridContainer}>
                    <div className={styles.itemContainer} ref={(el) => animationRefs.current[0] = el}>
                        <div className={`${styles.imgContainer} ${animations[0] && styles.slideIn}`}>
                            <div className={`${styles.triangle} ${styles.main}`} />
                            <h3 className={styles.valueText}>Catálisis Cultural</h3>
                            <Image src={Cultural} className={styles.img} />
                        </div>
                        <div className={`${styles.textContainer} ${styles.main}`}>
                            <p className={styles.text}>
                                <b>Cada empresa tiene su ADN</b>. Trabajamos con lo que ya tienen, alineando soluciones con 
                                su propósito y la historia que quieren contar.
                            </p>
                        </div>
                    </div>
                    <div className={styles.itemContainer} ref={(el) => animationRefs.current[1] = el}>
                        <div className={`${styles.imgContainer} ${animations[1] && styles.slideIn}`}>
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
                    <div className={styles.itemContainer} ref={(el) => animationRefs.current[2] = el}>
                        <div className={`${styles.textContainer} ${styles.secondary}`}>
                            <p className={styles.text}>
                                Las organizaciones son un todo. <b>Sabemos cómo las acciones a nivel micro impactan en lo macro</b> y trabajamos
                                para que todo se alinee de manera armónica.
                            </p>
                        </div>
                        <div className={`${styles.imgContainer} ${animations[2] && styles.slideOut}`}>
                            <div className={`${styles.triangle} ${styles.tRight} ${styles.secondary}`} />
                            <h3 className={styles.valueText}>Mirada sistémica</h3>
                            <Image src={System} className={styles.img} />
                        </div>
                    </div>
                    <div className={styles.itemContainer} ref={(el) => animationRefs.current[3] = el}>
                        <div className={`${styles.textContainer} ${styles.secondary}`}>
                            <p className={styles.text}>
                                <b>Las organizaciones deben crear espacios donde las personas encuentren realización y disfrute.</b> Equipos
                                felices son equipos que marcan la diferencia.
                            </p>
                        </div>
                        <div className={`${styles.imgContainer} ${animations[3] && styles.slideOut}`}>
                            <div className={`${styles.triangle} ${styles.tRight} ${styles.secondary}`} />
                            <h3 className={styles.valueText}>Felicidad organizacional</h3>
                            <Image src={People} className={styles.img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;