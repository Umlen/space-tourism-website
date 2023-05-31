import technology from '@/data/technology.json';
import { SubmenuLinks } from '@/types/types';

import PageSubmenu from '@/components/navigation/PageSubmenu';

function Technology() {
  const technologyArr = technology.technology;
  const technologyLinks: SubmenuLinks = technologyArr.map(technology => {
    return {
      href: `/technology/${technology.name.toLocaleLowerCase()}`,
      text: technology.name,
      linksClass: ``,
      linksActiveClass: ``,
    };
  });

  return (
    <div>
      <h1>{technologyArr[0].name}</h1>
      <PageSubmenu linksArr={technologyLinks} wrapperClass='' />
    </div>
  );
}

export default Technology;
