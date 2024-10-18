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
                            setAnimate3(true);
                            observer.unobserve(entry.target);
                        } else if (entry.target === animation4Ref.current) {
                            setAnimate4(true);
                            observer.unobserve(entry.target);
                        } else if (entry.target === animation5Ref.current) {
                            setAnimate5(true);
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
        };
    }, []);


  return (
    <div className={styles.container} ref={animationRef}>
        <div className={styles.scrollOffset} id='productos'></div>
        <div className={styles.backgroundContainer} />
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>
                Productos
            </h1>
            <hr className={`${styles.hr} ${animate ? styles.visible : ''}`} />
            <div className={styles.content}>
                <div className={`${styles.productContainer} ${animate2 ? styles.slideIn : ''}`} ref={animation2Ref}>
                    <h3 className={styles.productTitle}>Rompiendo barreras con Seguridad Psicológica</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Acompañar en la identificación de barreras que impiden el desempeño deseado.
                        </p>
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Psicoeudación sobre el miedo y su relación con el desarrollo del potencial.
                        </p>
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Brindar herramientas para un correcto manejo del estrés y presión laboral.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animate3 ? styles.slideOut : ''}`} style={{right: 0}} ref={animation3Ref}>
                    <h3 className={styles.productTitle}>Flexibilidad Psicológica en las Personas</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Acompañar en la identificación de barreras que impiden el desempeño deseado.
                        </p>
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Psicoeudación sobre el miedo y su relación con el desarrollo del potencial.
                        </p>
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Brindar herramientas para un correcto manejo del estrés y presión laboral.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animate4 ? styles.slideIn : ''}`} style={{top: '45vh'}} ref={animation4Ref}>
                    <h3 className={styles.productTitle}>Mindset Ágil e Innovador</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Conscientizar sobre los beneficios de implementar marcos ágiles de trabajo y metodologías innovadoras.
                        </p>
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Brindar herramientas que fomenten una mayor productividad a nivel individual y/o grupal.
                        </p>
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Compartir ejercicios para desarrollar el foco atencional.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productContainer} ${animate5 ? styles.slideOut : ''}`} style={{top: '45vh', right: 0}} ref={animation5Ref}>
                    <h3 className={styles.productTitle}>Seguridad Emocional en el Liderazgo</h3>
                    <div className={styles.productItem}>
                        <Image className={styles.logo} src={Logo} alt='logo' />
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Desarrollar habilidades para crear un entorno de trabajo seguro mediante comunicación efectiva y asertiva.
                        </p>
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Aumentar la conciencia emocional y la inteligencia emocional.
                        </p>
                        <p className={styles.productTips}>
                            <DoneIcon fontSize='1vh' style={{marginTop: '2px', marginRight: '2px'}} />Desarrollar habilidades para una funcional gestión de los pensamientos, emociones y acciones.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
