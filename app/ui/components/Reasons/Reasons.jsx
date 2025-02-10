'use client'

import Image from 'next/image';
import styles from './reasons.module.css';
// import Idea from '../../../../../public/images/idea_icon.png';
// import Mic from '../../../../../public/images/megaphone_icon.png';
// import Growth from '../../../../../public/images/growth_icon.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef, useState } from 'react';



const Reasons = () => {

  const [animate, setAnimate] = useState(null); 
  const [active2, setActive2] = useState(null); 
  const [active3, setActive3] = useState(null); 


  const handleShow = (index) => {
    if(index === 0) {
      setAnimate(true)
      setActive2(false)
      setActive3(false)
    } else if(index === 1) {
      setAnimate(false)
      setActive2(true)
      setActive3(false)
    } else if(index === 2) {
      setAnimate(false)
      setActive2(false)
      setActive3(true)
    } else {
      setAnimate(true)
      setActive2(false)
      setActive3(false)
    }
  }


  const animationRef = useRef();


    useEffect(() => {

        const animationObserver = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
            setAnimate(true);
            } else {
            setAnimate(false);
            }
        },
        { threshold: 0.5 }
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
      <div className={styles.scrollOffset} id='nosotros'></div>
      <div className={styles.top}>
        <h1 className={`${styles.title} ${animate ? styles.visible : ''}`}>
          Acompañamos el cambio a través de...
        </h1>
        <hr className={`${styles.hr} ${animate ? styles.visible : ''}`} />
      </div>
      <div className={styles.wrapper} ref={animationRef}>
        <div className={styles.left}>
          <div className={`${styles.itemContainer} ${animate ? styles.activeBg: ''}`} style={{borderTop: '1px solid #000'}} onClick={() => handleShow(0)}>
            <div className={styles.visible}>
              <div className={styles.icon}>
                {/* <Image src={Mic} width={42} height={42} alt='reasons' /> */}
              </div>
              <h3 className={styles.title2} style={{color: '#8c6746'}}>Flexibilidad psicológica</h3>
            </div>
            <div className={`${styles.expandIcon} ${animate ? styles.activeIcon: ''}`}>
              <ExpandMoreIcon color='inherit' fontSize='inherit' />
            </div>
          </div>
          <div className={`${styles.itemContainer} ${active2 ? styles.activeBg: ''}`} onClick={() => handleShow(1)}>
            <div className={styles.visible}>
              <div className={styles.icon}>
                {/* <Image src={Growth} width={48} height={48} style={{marginLeft: '4px', marginBottom: '2px'}}  alt='crecimiento' /> */}
              </div>
              <h3 className={styles.title2} style={{color: '#3e8083'}}>Seguridad psicológica y emocional</h3>
            </div>
            <div className={`${styles.expandIcon} ${active2 ? styles.activeIcon: ''}`}>
              <ExpandMoreIcon color='inherit' fontSize='inherit' />
            </div>
          </div>
          <div className={`${styles.itemContainer} ${active3 ? styles.activeBg: ''}`} onClick={() => handleShow(2)}>
            <div className={styles.visible}>
              <div className={styles.icon}>
                {/* <Image src={Idea} width={48} height={48} alt='networking' /> */}
              </div>
              <h3 className={styles.title2} style={{color: '#e0bb81'}}>Mindset innovador y ágil</h3>
            </div>
            <div className={`${styles.expandIcon} ${active3 ? styles.activeIcon: ''}`}>
              <ExpandMoreIcon color='inherit' fontSize='inherit' />
            </div>
          </div>
        </div>
        <div className={`${styles.right} ${animate || active2 || active3 ? styles.showRight : ''}`}>
          <div className={styles.rombo} style={{top: 20, right: 25}}/>
          <div className={styles.rombo} style={{top: 40, right: 50}}/>
          <div className={styles.rombo} style={{top: 60, right: 25}}/>
          <div className={styles.rombo} style={{top: 80, right: 50}}/>
          {animate ? 
            <p className={`${styles.text} ${animate ? styles.showText : ''}`}>
              Comprender cómo relacionarnos de una manera más
              funcional con nuestros pensamientos, sentimientos y acciones, 
              y su impacto en el desarrollo de la carrera profesional.
            </p>
          : active2 ? 
            <p className={`${styles.text} ${active2 ? styles.showText : ''}`}>
              Cómo transformarnos para acompañar a otros, cómo construir condiciones 
              de seguridad, satisfacción y felicidad.
            </p>
          : active3 ? 
            <p className={`${styles.text} ${active3 ? styles.showText : ''}`}>
              Cómo la agilidad e innovación 
              brindan herramientas concretas para fomentar la comunicación transparente, 
              colaboración y creatividad en los equipos de trabajo.
            </p>
          :
          <p className={styles.text}>
            Comprender cómo relacionarnos de una manera más
            funcional con nuestros pensamientos, sentimientos y acciones, 
            y su impacto en el desarrollo de la carrera profesional.
          </p>
        }
        </div>
      </div>
    </div>
  )
}

export default Reasons
