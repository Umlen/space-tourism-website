import header from '@/style/header.module.scss';

import NavigationLinks from './NavigationLinks';

const MainMenu:React.FC = () => {
  return (
    <nav className={header.mainMenu}>
      <NavigationLinks />
    </nav>
  );
};

export default MainMenu;
