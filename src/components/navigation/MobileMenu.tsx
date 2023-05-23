import Image from 'next/image';
import header from '@/style/header.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { mobileMenuToggler } from '@/redux/store/mobileMenuSlice';

import NavigationLinks from './NavigationLinks';

const MobileMenu:React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className={header.mobileMenu}>
      <Image 
        src='/assets/shared/icon-close.svg' 
        onClick={() => dispatch(mobileMenuToggler())}
        className={header.mobileMenuCloseBtn}
        alt='' 
        width={19} 
        height={19} 
      />
      <NavigationLinks />
    </nav>
  );
};

export default MobileMenu;
