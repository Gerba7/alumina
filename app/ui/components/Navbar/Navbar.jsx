'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';
import ALUMINA_LOGO from '../../../../public/images/Alumina_Logo_Black_Text.png';
import ALUMINA_LOGO_WHITE from '../../../../public/images/Alumina_Logo_White.png';

const Navbar = () => {
  const pathname = usePathname();
  const [navHeight, setNavHeight] = useState(pathname !== '/'); 
  const [displayMenu, setDisplayMenu] = useState(true);

  const handleScroll = useCallback(() => {
    if (pathname === '/') {
      setNavHeight(window.scrollY >= 240);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') {
      setNavHeight(true); 
    } else {
      setNavHeight(window.scrollY >= 240);
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, handleScroll]);

  useEffect(() => {
    setDisplayMenu(true);
  }, [pathname]);

  const toggleMenu = (e) => {
    e.preventDefault();
    setDisplayMenu(!displayMenu);
  };

  const handleCloseMenu = () => {
    setDisplayMenu(true);
  };


  return (
    <div className={`${styles.container} ${navHeight ? styles.containerHeight : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.burger} onClick={toggleMenu}>
            <div className={styles.menuItem} style={{ color: navHeight && '#F5F5F5' }}>
              {displayMenu ? (
                <MenuIcon color='inherit' style={{ fontSize: 'inherit' }} />
              ) : (
                <CloseIcon color='#F5F5F5' style={{ fontSize: 'inherit' }} />
              )}
            </div>
          </div>
          <Link className={styles.logoLink} href='/'>
            <h1 className={styles.title}>Alumina Consultoría</h1>
            <Image
              className={`${styles.logoNavbar} ${navHeight ? styles.visible : ''}`}
              src={navHeight ? ALUMINA_LOGO_WHITE : ALUMINA_LOGO}
              alt='ALUMINA_LOGO'
              width={'auto'}
              height={navHeight ? 30 : 70}
              priority
            />
          </Link>
        </div>
        <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
          <Link href='#quienes-somos' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`} onClick={handleCloseMenu}>
            <div className={`${styles.linkText} ${navHeight && styles.navHeightColor}`}>
              NOSOTROS
            </div>
          </Link>
          <Link href='#valor-agregado' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`} onClick={handleCloseMenu}>
            <div className={`${styles.linkText} ${navHeight && styles.navHeightColor}`}>
              VALOR AGREGADO
            </div>
          </Link>
          <Link href='#servicios' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`} onClick={handleCloseMenu}>
            <div className={`${styles.linkText} ${navHeight && styles.navHeightColor}`}>
              SERVICIOS
            </div>
          </Link>
          {/* <Link href='/unidades' className={`${styles.link} ${navHeight ? styles.linkColor : ''}`}>PRODUCTOS</Link> */}
          <Link href='#contacto' className={`${styles.link} ${styles.blankRight} ${navHeight ? styles.blankRightColor : ''}`} onClick={handleCloseMenu}>
            <div className={`${styles.linkText} ${navHeight && styles.navHeightColor}`}>
              CONTACTO
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;