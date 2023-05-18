import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/destinations/moon'>Destinations</Link>
      <Link href='/crew/douglas-hurley'>Crew</Link>
      <Link href='/technology/launch-vehicle'>Technology</Link>
    </div>
  );
};

export default Home;
