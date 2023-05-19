import Image from 'next/image';
import header from '@/style/header.module.scss';

import NavigationLinks from './NavigationLinks';

type MobileMenuProps = {
  mobileMenuToggler: () => void;
};

const MobileMenu:React.FC<MobileMenuProps> = ( {mobileMenuToggler} ) => {
  return (
    <nav className={header.mobileMenu}>
      <Image 
        src='/assets/shared/icon-close.svg' 
        className={header.mobileMenuCloseBtn}
        onClick={mobileMenuToggler}
        alt='' 
        width={19} 
        height={19} 
      />
      <NavigationLinks />
    </nav>
  );
};

export default MobileMenu;
