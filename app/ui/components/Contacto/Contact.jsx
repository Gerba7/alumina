import Image from 'next/image';
import styles from './contacto.module.css';
import Logo from '../../../../public/images/Alumina_Logo_Black_Text.png';
import Form from './Form/Form';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const Contact = () => {

  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id='contacto'></div>
      <div className={styles.wrapper}>
        <div className={styles.titleConatiner}>
          {/* <h1 className={`${styles.title}`}>
            Contacto
          </h1>
          <hr className={styles.hr} /> */}
        <h3 className={styles.subtitle}>Contactate con nosotros para iniciar el cambio.</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <Image src={Logo} alt='jochy puertos logo' className={styles.logo} />
            <h3 className={styles.title2}>info@alumina.com.ar</h3>
            <h3 className={styles.title2}>+54 9 11 5996-6552</h3>
            <div className={styles.socialContainer}>
                <a href='https://www.linkedin.com/in/alumina' aria-label="Linkedin Link" className={`${styles.socialIcon} ${styles.linkedin}`}>
                    <LinkedInIcon fontSize='inherit' />
                </a>
                <a href='https://www.facebook.com/' className={`${styles.socialIcon} ${styles.facebook}`} aria-label="Facebook Link">
                    <FacebookIcon fontSize='inherit' />
                </a>
                <a href='https://www.instagram.com/' rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instagram}`} aria-label="Instagram Link">
                    <InstagramIcon fontSize='inherit' />
                </a>
            </div>
          </div>
          <div className={styles.right}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;