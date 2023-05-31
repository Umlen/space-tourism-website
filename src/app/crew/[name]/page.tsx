import crew from '@/data/crew.json';
import { SubmenuLinks } from '@/types/types';

import PageSubmenu from '@/components/navigation/PageSubmenu';

function Crew() {
  const crewArr = crew.crew;
  const crewLinks: SubmenuLinks = crewArr.map(crew => {
    return {
      href: `/crew/${crew.name.toLocaleLowerCase()}`,
      text: crew.name,
      linksClass: ``,
      linksActiveClass: ``,
    };
  });

  return (
    <div>
      <h1>{crewArr[0].name}</h1>
      <PageSubmenu linksArr={crewLinks} wrapperClass='' />
    </div>
  );
}

export default Crew;
