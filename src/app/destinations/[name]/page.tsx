import destinations from '@/data/destinations.json';
import typography from '@/style/typography.module.scss';
import { submenuLinks } from '@/types/types';

import PageSubmenu from '@/components/navigation/PageSubmenu';

function Destination () {
  const destinationsArr = destinations.destinations;
  const destinationLinks: submenuLinks = destinationsArr.map(destination => {
    return {
      href: `/destinations/${destination.name.toLocaleLowerCase()}`,
      text: destination.name,
      class: ''
    };
  });

  return (
    <div>
      <h1 className={`${typography.bigHeader} ${typography.uppercaseText}`}>
        {destinationsArr[0].name}
      </h1>
      <PageSubmenu linksArr={destinationLinks} />
    </div>
  );
}

export default Destination;
