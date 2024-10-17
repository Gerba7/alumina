import styles from './cover.module.css';
import Image from 'next/image';
import Alumina_Logo from '../../../../public/images/Alumina_Logo_Black.png';


const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back} />
      <div className={styles.back2} />
        <div className={styles.coverLogo}>
          <Image className={styles.logoImg} src={Alumina_Logo} alt='Alumina' priority />
        </div>
    </div>
  )
}

export default Cover
