'use client'

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import backgroundImg from '@/style/backgroundImg.module.scss';

const BgImage:React.FC = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState('');
  
  useEffect(() => {
    if (pathname === '/') {
      setCurrentPage('home');
    } else if (pathname.includes('destination')) {
      setCurrentPage('destination');
    } else if (pathname.includes('crew')) {
      setCurrentPage('crew');
    } else if (pathname.includes('technology')) {
      setCurrentPage('technology');
    }
  }, [pathname]);

  return (
    <div className={`${backgroundImg.position} ${backgroundImg[currentPage]}`}>

    </div>
  );
};

export default BgImage;
