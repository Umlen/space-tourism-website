'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { SubmenuLinks } from '@/types/types';

type SubmenuProps = {
  linksArr: SubmenuLinks;
  wrapperClass: string;
};

const PageSubmenu:React.FC<SubmenuProps> = ({ linksArr, wrapperClass }) => { 
  const pathname = usePathname();

  return (
    <div className={wrapperClass}>
      {
        linksArr.map((link, key) => {
          return (
            <Link 
              key={key} 
              href={link.href} 
              className={pathname === link.href ? `${link.linksClass} ${link.linksActiveClass}` : link.linksClass}
            >
              {link.text}
            </Link>
          );
        })
      }
    </div>
  );
};

export default PageSubmenu;
