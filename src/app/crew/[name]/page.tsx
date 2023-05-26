import crew from '@/data/crew.json';
import { submenuLinks } from '@/types/types';

import PageSubmenu from '@/components/navigation/PageSubmenu';

function Crew() {
  const crewArr = crew.crew;
  const crewLinks: submenuLinks = crewArr.map(crew => {
    return {
      href: `/crew/${crew.name.toLocaleLowerCase()}`,
      text: crew.name,
      class: ''
    };
  });

  return (
    <div>
      <h1>{crewArr[0].name}</h1>
      <PageSubmenu linksArr={crewLinks} />
    </div>
  );
}

export default Crew;
