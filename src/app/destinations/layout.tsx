import Link from 'next/link';
import destinations from '@/data/destinations.json';

function LayoutDestinations({children}: {children:React.ReactNode}) {
  const destinationsArr = destinations.destinations;

  return (  
    <div>
      {
        destinationsArr.map((destination, key) => 
          <Link key={key} href={`/destinations/${destination.name.toLocaleLowerCase()}`}>
            {destination.name}
          </Link>
        )
      }
    {children}
    </div>
  );
}

export default LayoutDestinations;