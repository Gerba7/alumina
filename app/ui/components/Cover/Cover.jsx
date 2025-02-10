import styles from './cover.module.css';
import Image from 'next/image';
import Alumina_Logo from '../../../../public/images/Alumina_Logo_Black.png';
import { parisienne } from '@/app/layout';


const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back} />
      <div className={styles.back2} />
      <div className={styles.coverLogo}>
        <Image className={styles.logoImg} src={Alumina_Logo} alt='Alumina' priority />
      </div>
      <div className={`${styles.textsContainer}`}>  {/* ${parisienne.className} */}
        <h1 className={styles.title}>Nos la jugamos, unidos por la pasión de diseñar soluciones significativas centradas en las personas.</h1>
        {/* <h1 className={styles.title}>Más que consultoría,<br/> un compañero de aventuras.</h1> */}
      </div>
    </div>
  )
}

export default Cover
