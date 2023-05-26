'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { mobileMenuToggler } from '@/redux/store/mobileMenuSlice';
import { setScreenSize } from '@/redux/store/screenSizeSlice';

import header from '@/style/header.module.scss';
import logoImg from 'public/assets/shared/logo.svg';

import MobileMenu from '../navigation/MobileMenu';
import MainMenu from '../navigation/MainMenu';

const Header:React.FC = () => {
  const isMobile = useAppSelector(state => state.screenSize.isMobile);
  const isMobielMenuOpen = useAppSelector(state => state.mobileMenu.isOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const resize = () => dispatch(setScreenSize(window.innerWidth));

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
