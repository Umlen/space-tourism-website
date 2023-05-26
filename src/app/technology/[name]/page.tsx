import technology from '@/data/technology.json';
import { submenuLinks } from '@/types/types';

import PageSubmenu from '@/components/navigation/PageSubmenu';

function Technology() {
  const technologyArr = technology.technology;
  const technologyLinks: submenuLinks = technologyArr.map(technology => {
    return {
      href: `/technology/${technology.name.toLocaleLowerCase()}`,
      text: technology.name,
      class: ''
    };
  });

  return (
    <div>
      <h1>{technologyArr[0].name}</h1>
      <PageSubmenu linksArr={technologyLinks} />
    </div>
  );
}

export default Technology;
