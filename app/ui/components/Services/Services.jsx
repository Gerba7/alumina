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
                    {/* <div className={styles.hexagon}>
                        <div className={`${styles.card}`} style={{transform: 'none'}}>
                            <div className={`${styles.front}`}>
                                <Image className={styles.logo} src={Logo_Alumina} alt='logo' />
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`}>
                            <div className={`${styles.front}`} />
                            <div className={styles.textContainer}>
                                <h3 style={{textAlign: 'center'}}>Seguridad<br/>Psicológica</h3>
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>
                                    Acompañamos el desarrollo de espacios de trabajo seguros e inclusivos donde todos puedan ser ellos mismos, aportar sus ideas sin
                                    miedo y sentirse parte de un equipo sólido y confiable.
                                </p>  {/* Arriesgamos con sentido, haciendo nuestro tu propósito. */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`}>
                            <div className={`${styles.front} ${styles.mainColor}`} />
                            <div className={styles.textContainer}>
                                <h3 style={{textAlign: 'center'}}>Flexibilidad<br/>Psicológica</h3>
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>
                                    Te ayudamos a que tu equipo pueda adaptarse rápidamente a los cambios, tomando decisiones conscientes y sabiendo cómo
                                    afrontar las dificultades. Porque solo cuando se tienen las herramientas para adaptarse, el cambio es verdaderamente
                                    transformador.
                                </p>  {/* Arriesgamos con sentido, haciendo nuestro tu propósito. */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`} style={{animationDelay: '.3s'}}>
                            <div className={`${styles.front} ${styles.secondaryColor}`} />
                            <div className={styles.textContainer}>
                                <h3 style={{textAlign: 'center'}}>Agilidad<br/>a la Carta</h3>
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>
                                    Agilidad no es solo trabajar rápido, es adaptarse al contexto y a los cambios en tiempo real. Te ayudamos a que tu organización no
                                    solo reaccione con velocidad, sino que se anticipe, se transforme y aproveche las oportunidades con claridad y foco.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`} style={{animationDelay: '.6s'}}>
                            <div className={`${styles.front} ${styles.terciaryColor}`} />
                            <div className={styles.textContainer}>
                                <h3 style={{textAlign: 'center'}}>Coaching<br/>Profesional</h3>
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>
                                    Acompañamiento individual o grupal, adaptado a lo que necesites. Potenciamos tus fortalezas, eliminamos bloqueos y te ayudamos
                                    a abordar desafíos con claridad, confianza y foco.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={`${styles.card} ${animate2 && styles.flip}`} style={{animationDelay: '.9s'}}>
                            <div className={`${styles.front} ${styles.fourthColor}`} />
                            <div className={styles.textContainer}>
                                <h3 style={{textAlign: 'center'}}>Equipos<br/>de Verdad</h3> 
                            </div>
                            <div className={styles.back} />
                            <div className={styles.pContainer}>
                                <p className={styles.paragraph}>
                                    Te ayudamos a crear equipos autónomos, autoorganizados y motivados. Equipos que no solo cumplen con su tarea, sino que se
                                    sienten parte del proceso, se adaptan rápidamente y avanzan juntos.
                                </p>
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
