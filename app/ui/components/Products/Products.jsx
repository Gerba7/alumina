'use client'

import { useEffect, useRef, useState } from 'react';
import styles from './products.module.css';
import DoneIcon from '@mui/icons-material/Done';
import Image from 'next/image';
import Logo from '../../../../public/images/Alumina_Logo_White.png';
import Cover from '../../../../public/images/cover4.jpg';



const Products = () => {

    const [animate, setAnimate] = useState(false);
    const [animate2, setAnimate2] = useState(false);
    const [animate3, setAnimate3] = useState(false);
    const [animate4, setAnimate4] = useState(false);
    const [animate5, setAnimate5] = useState(false);
    const [animate6, setAnimate6] = useState(false);

    const animationRef = useRef();
    const animation2Ref = useRef();
    const animation3Ref = useRef();
    const animation4Ref = useRef();
    const animation5Ref = useRef();
    const animation6Ref = useRef();


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
                            setAnimate3(true);
                            observer.unobserve(entry.target);
                        } else if (entry.target === animation4Ref.current) {
                            setAnimate4(true);
                            observer.unobserve(entry.target);
                        } else if (entry.target === animation5Ref.current) {
                            setAnimate5(true);
                            observer.unobserve(entry.target);
                        } else if (entry.target === animation6Ref.current) {
                            setAnimate6(true);
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
            animationObserver.observe(animation3Ref.current);
        }
    
        if (animation4Ref.current) {
            animationObserver.observe(animation4Ref.current);
        }
    
        if (animation5Ref.current) {
            animationObserver.observe(animation5Ref.current);
        }

        if (animation6Ref.current) {
            animationObserver.observe(animation6Ref.current);
        }
    
        return () => {
            if (animationRef.current) {
                animationObserver.unobserve(animationRef.current);
            }
    
            if (animation2Ref.current) {
                animationObserver.unobserve(animation2Ref.current);
            }

            if (animation3Ref.current) {
                animationObserver.unobserve(animation3Ref.current);
            }
    
            if (animation4Ref.current) {
                animationObserver.unobserve(animation4Ref.current);
            }

            if (animation5Ref.current) {
                animationObserver.unobserve(animation5Ref.current);
            }

            if (animation6Ref.current) {
                animationObserver.unobserve(animation6Ref.current);
            }
        };
    }, []);


  return (
    <div className={styles.container} ref={animationRef}>
        <div className={styles.scrollOffset} id='servicios'></div>
        <div className={styles.backgroundContainer} />
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>
                Servicios
            </h1>
            <hr className={`${styles.hr} ${animate ? styles.visible : ''}`} />
            <div className={styles.content}>
                <div className={`${styles.productContainer} ${animate2 ? styles.slideIn : ''} ${styles.product2}`} ref={animation2Ref}>
                    <h3 className={styles.productTitle}>Seguridad Psicológica</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            Acompañamos el desarrollo de espacios de trabajo seguros e inclusivos donde todos puedan ser ellos mismos, aportar sus ideas sin
                            miedo y sentirse parte de un equipo sólido y confiable.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animate3 ? styles.slideOut : ''} ${styles.product3}`} style={{right: 0}} ref={animation3Ref}>
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
                <div className={`${styles.productContainer} ${animate4 ? styles.slideIn : ''} ${styles.product4}`} style={{top: '46vh'}} ref={animation4Ref}>
                    <h3 className={styles.productTitle}>Agilidad a la Carta</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            Agilidad no es solo trabajar rápido, es adaptarse al contexto y a los cambios en tiempo real. Te ayudamos a que tu organización no
                            solo reaccione con velocidad, sino que se anticipe, se transforme y aproveche las oportunidades con claridad y foco.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animate5 ? styles.slideOut : ''} ${styles.product5}`} style={{top: '46vh', right: 0}} ref={animation5Ref}>
                    <h3 className={styles.productTitle}>Coaching Profesional</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            Acompañamiento individual o grupal, adaptado a lo que necesites. Potenciamos tus fortalezas, eliminamos bloqueos y te ayudamos
                            a abordar desafíos con claridad, confianza y foco.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animate6 ? styles.slideIn2 : ''} ${styles.product6}`} style={{top: '92vh', left: '25%'}} ref={animation6Ref}>
                    <h3 className={styles.productTitle}>Equipos de Verdad</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
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
