import Link from 'next/link';
import crew from '@/data/crew.json';

function LayoutCrew({children}: {children:React.ReactNode}) {
  const crewArr = crew.crew;

  return (
    <div>
      <div>
        <Link href='/'>Home</Link>
        {
          crewArr.map((member, key) => 
            <Link key={key}  href={`/crew/${member.name.split(' ').join('-').toLowerCase()}`}>
              {member.name}
            </Link>
          )
        }
      </div>
      {children}
    </div>
  );
}

export default LayoutCrew;