import Link from 'next/link';
import { submenuLinks } from '@/types/types';

type submenuProps = {
  linksArr: submenuLinks;
};

const PageSubmenu:React.FC<submenuProps> = ({ linksArr }) => { 
  return (
    <div>
      {
        linksArr.map((link, key) => {
          return (
            <Link key={key} href={link.href}>
              {link.text}
            </Link>
          )
        })
      }
    </div>
  );
};

export default PageSubmenu;
