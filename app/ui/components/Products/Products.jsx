'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './products.module.css';
import DoneIcon from '@mui/icons-material/Done';
import Image from 'next/image';
import Logo from '../../../../public/images/Alumina_Logo_White.png';
import Cover from '../../../../public/images/cover4.jpg';



const Products = () => {

    const [animations, setAnimations] = useState([false, false, false, false, false]); // single state for all animations
    const animationRefs = useRef([null, null, null, null, null]); // single ref for all elements

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
            observer.unobserve(entry.target); // Stop observing once the element is in view
            }
        });
        }, { threshold: 0 });

        // Observe all animation elements
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
    <div className={styles.container} ref={animationRefs.current[1]}>
        <div className={styles.scrollOffset} id='servicios'></div>
        <div className={styles.backgroundContainer} />
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} ${animations[1] ? styles.visible : ''}`}>
                Servicios
            </h1>
            <hr className={`${styles.hr} ${animations[1] ? styles.visible : ''}`} />
            <div className={styles.content}>
                <div className={`${styles.productContainer} ${animations[1] ? styles.slideIn : ''} ${styles.product2}`} ref={(el) => (animationRefs.current[1] = el)}>
                    <h3 className={styles.productTitle}>Seguridad Psicológica</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' style={{bottom: '-70%'}} />
                        <p className={styles.productTips}>
                            Acompañamos el desarrollo de espacios de trabajo seguros e inclusivos donde todos puedan ser ellos mismos, aportar sus ideas sin
                            miedo y sentirse parte de un equipo sólido y confiable.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animations[2] ? styles.slideOut : ''} ${styles.product3}`} style={{right: 0}} ref={(el) => (animationRefs.current[2] = el)}>
                    <h3 className={styles.productTitle}>Flexibilidad Psicológica</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            Te ayudamos a que tu equipo pueda adaptarse rápidamente a los cambios, tomando decisiones conscientes y sabiendo cómo
                            afrontar las dificultades. Porque solo cuando se tienen las herramientas para adaptarse, el cambio es verdaderamente
                            transformador.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animations[3] ? styles.slideIn : ''} ${styles.product4}`} style={{top: '46vh'}} ref={(el) => (animationRefs.current[3] = el)}>
                    <h3 className={styles.productTitle}>Agilidad a la Carta</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            Agilidad no es solo trabajar rápido, es adaptarse al contexto y a los cambios en tiempo real. Te ayudamos a que tu organización no
                            solo reaccione con velocidad, sino que se anticipe, se transforme y aproveche las oportunidades con claridad y foco.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animations[3] ? styles.slideOut : ''} ${styles.product5}`} style={{top: '46vh', right: 0}} ref={(el) => (animationRefs.current[3] = el)}>
                    <h3 className={styles.productTitle}>Coaching Profesional</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' style={{bottom: '-70%'}} />
                        <p className={styles.productTips}>
                            Acompañamiento individual o grupal, adaptado a lo que necesites. Potenciamos tus fortalezas, eliminamos bloqueos y te ayudamos
                            a abordar desafíos con claridad, confianza y foco.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animations[4] ? styles.slideIn2 : ''} ${styles.product6}`} style={{top: '92vh', left: '25%'}} ref={(el) => (animationRefs.current[4] = el)}>
                    <h3 className={styles.productTitle}>Equipos de Verdad</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' style={{bottom: '-70%'}} />
                        <p className={styles.productTips}>
                            Te ayudamos a crear equipos autónomos, autoorganizados y motivados. Equipos que no solo cumplen con su tarea, sino que se
                            sienten parte del proceso, se adaptan rápidamente y avanzan juntos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products