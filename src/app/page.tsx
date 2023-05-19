import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <section>
      <h3>so, you want to travel to</h3>
      <h1>Space</h1>
      <p>
        Let&rsquo;s face it; if you want to go to space, you might as well 
        genuinely go to outer space and not hover kind of on the edge of it. 
        Well sit back, and relax because we&rsquo;ll give you a truly out of this world experience!
      </p>
      <Link href='/destinations/moon'>explore</Link>
    </section>
  );
};

export default Home;
