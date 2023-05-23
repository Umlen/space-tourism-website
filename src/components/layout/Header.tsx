'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { mobileMenuToggler } from '@/redux/store/mobileMenuSlice';

import header from '@/style/header.module.scss';
import logoImg from 'public/assets/shared/logo.svg';

import MobileMenu from '../navigation/MobileMenu';
import MainMenu from '../navigation/MainMenu';

const Header:React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);
  const isMobielMenuOpen = useAppSelector(state => state.mobileMenu.isOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    function resize() {
      const mobileBreakPoint = 700;
      if (window.innerWidth > mobileBreakPoint) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    resize();
    window.addEventListener('resize', resize);

    return (() => window.removeEventListener('resize', resize));
  }, []);

  return (
    <header className={header.container}>
      <Image src={logoImg} alt='website logo' className={header.logo} />
      <div className={header.decorationLine}></div>
      {
        isMobile ?
          <Image 
            src='/assets/shared/icon-hamburger.svg' 
            onClick={() => dispatch(mobileMenuToggler())}
            alt='' 
            width={24} 
            height={21}
          /> 
        :
          <MainMenu />
      }
      {isMobielMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
