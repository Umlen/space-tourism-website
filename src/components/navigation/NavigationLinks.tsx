'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import header from '@/style/header.module.scss';
import typography from '@/style/typography.module.scss';

const NavigationLinks:React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <Link 
        href='/' 
        className={`${header.menuLinks} ${pathname === '/' && header.menuLinksCurrentPage}`}
      >
        <span className={typography.boldText}>00 </span> 
        Home
      </Link>
      <Link 
        href='/destinations/moon' 
        className={`${header.menuLinks} ${pathname.includes('destinations') && header.menuLinksCurrentPage}`}
      >
        <span className={typography.boldText}>01 </span> 
        Destinations
      </Link>
      <Link 
        href='/crew/douglas-hurley' 
        className={`${header.menuLinks} ${pathname.includes('crew') && header.menuLinksCurrentPage}`}
      >
        <span className={typography.boldText}>02 </span> 
        Crew
      </Link>
      <Link 
        href='/technology/launch-vehicle' 
        className={`${header.menuLinks} ${pathname.includes('technology') && header.menuLinksCurrentPage}`}
      >
        <span className={typography.boldText}>03 </span> 
        Technology
      </Link>
    </>
  );
};

export default NavigationLinks;
