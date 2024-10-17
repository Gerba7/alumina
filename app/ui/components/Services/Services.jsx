import Image from 'next/image';
import styles from './services.module.css';
import Logo_Alumina from '../../../../public/images/Alumina_Logo_White.png';



const Services = () => {



  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='servicios'></div>
        <div className={styles.wrapper}>
            <h1 className={`${styles.title}`}>
                Servicios
            </h1>
            <hr className={styles.hr} />
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.hexagon}>
                        <div className={styles.card} style={{transform: 'none'}}>
                            <div className={`${styles.front}`}>
                                <Image className={styles.logo} src={Logo_Alumina} alt='logo' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={styles.card}>
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
                        <div className={styles.card}>
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
                        <div className={styles.card}>
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
                        <div className={styles.card}>
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
