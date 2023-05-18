import Link from 'next/link';
import destinations from '@/data/destinations.json';

function LayoutDestinations({children}: {children:React.ReactNode}) {
  const destinationsArr = destinations.destinations;

  return (  
    <div>
      <div>
        <Link href='/'>Home</Link>
        {
          destinationsArr.map((destination, key) => 
            <Link key={key} href={`/destinations/${destination.name.toLocaleLowerCase()}`}>
              {destination.name}
            </Link>
          )
        }
      </div>
      {children}
    </div>
  );
}

export default LayoutDestinations;