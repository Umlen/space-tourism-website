'use client'

import { useState } from 'react';
import Link from 'next/link';
import header from '@/style/header.module.scss';
import typography from '@/style/typography.module.scss';

const NavigationLinks:React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Link 
        href='/' 
        className={`${header.menuLinks} ${currentPage === 'home' && header.menuLinksCurrentPage}`}
        onClick={() => setCurrentPage('home')}
      >
        <span className={typography.boldText}>00</span> Home
      </Link>
      <Link 
        href='/destinations/moon' 
        className={`${header.menuLinks} ${currentPage === 'destinations' && header.menuLinksCurrentPage}`}
        onClick={() => setCurrentPage('destinations')}
      >
        <span className={typography.boldText}>01</span> Destinations
      </Link>
      <Link 
        href='/crew/douglas-hurley' 
        className={`${header.menuLinks} ${currentPage === 'crew' && header.menuLinksCurrentPage}`}
        onClick={() => setCurrentPage('crew')}
      >
        <span className={typography.boldText}>02</span> Crew
      </Link>
      <Link 
        href='/technology/launch-vehicle' 
        className={`${header.menuLinks} ${currentPage === 'technology' && header.menuLinksCurrentPage}`}
        onClick={() => setCurrentPage('technology')}
      >
        <span className={typography.boldText}>03</span> Technology
      </Link>
    </>
  );
};

export default NavigationLinks;
