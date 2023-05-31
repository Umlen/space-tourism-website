import Image from 'next/image';
import { SubmenuLinks } from '@/types/types';
import destinations from '@/data/destinations.json';

import typography from '@/style/typography.module.scss';
import destinationStyle from '@/style/pages/destination.module.scss';


import PageSubmenu from '@/components/navigation/PageSubmenu';

type DestinationProps = {
  params: {
    name: string;
  };
};

function Destination ({params: {name}}: DestinationProps) {
  const destinationsArr = destinations.destinations;
  const destinationContent = destinationsArr.filter(destination => destination.name.toLowerCase() === name).pop();
  const destinationLinks: SubmenuLinks = destinationsArr.map(destination => {
    return {
      href: `/destinations/${destination.name.toLowerCase()}`,
      text: destination.name,
      linksClass: `${destinationStyle.navLinks} ${typography.uppercaseText}`,
      linksActiveClass: `${destinationStyle.navLinksActive}`,
    };
  });

  if (!destinationContent) {
    return (
      <div>
        <PageSubmenu linksArr={destinationLinks} wrapperClass={destinationStyle.navLinksWrapper}/>
        there is no such page
      </div>
    );
  }

  return (
    <div className={destinationStyle.flexContainer}>
      <div className={destinationStyle.imageWrapper}>
        <Image 
          src={destinationContent.images.webp}
          fill
          alt={destinationContent.name} 
          className={destinationStyle.image}
        />
      </div>
      <div className={destinationStyle.contentWrapper}>
        <PageSubmenu linksArr={destinationLinks} wrapperClass={destinationStyle.navLinksWrapper}/>
        <h1 className={`${typography.bigHeader} ${typography.uppercaseText}`}>
          {destinationContent.name}
        </h1>
        <p className={`${typography.paragraph} ${destinationStyle.description}`}>
          {destinationContent.description}
        </p>
        <div className={destinationStyle.infoWrapper}>
          <div>
            <h6 className={`${typography.smallSubheader} ${typography.uppercaseText} ${destinationStyle.infoTitle}`}>
              avg. distance
            </h6>
            <p className={`${typography.subHeader} ${typography.uppercaseText}`}>
              {destinationContent.distance}
            </p>
          </div>
          <div>
            <h6 className={`${typography.smallSubheader} ${typography.uppercaseText} ${destinationStyle.infoTitle}`}>
              est. travel time
            </h6>
            <p className={`${typography.subHeader} ${typography.uppercaseText}`}>
              {destinationContent.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
