import Link from 'next/link';
import technology from '@/data/technology.json';

function LayoutTechnology({children}: {children: React.ReactNode}) {
  const technologyArr = technology.technology;

  return (
    <div>
      <div>
        <Link href='/'>Home</Link>
        {
          technologyArr.map((tech, key) => 
            <Link key={key}  href={`/technology/${tech.name.split(' ').join('-').toLowerCase()}`}>
              {tech.name}
            </Link>
          )
        }
      </div>
      {children}
    </div>
  );
}

export default LayoutTechnology;