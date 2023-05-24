import Link from 'next/link';
import home from '@/style/home.module.scss';
import typography from '@/style/typography.module.scss';

const Home: React.FC = () => {
  return (
    <section className={home.flexContainer}>
      <div className={home.textWrapper}>
        <p className={`${typography.navText} ${typography.uppercaseText}`}>
          so, you want to travel to
        </p>
        <h1 className={`${typography.largeHeader} ${typography.uppercaseText}`}>Space</h1>
        <p className={typography.paragraph}>
          Let&rsquo;s face it; if you want to go to space, you might as well 
          genuinely go to outer space and not hover kind of on the edge of it. 
          Well sit back, and relax because we&rsquo;ll give you a truly out of this world experience!
        </p>
      </div>
      <Link 
        href='/destinations/moon' 
      >
        <div className={home.exploreLinkWrapper}>
          <p className={`${home.exploreLink} ${typography.uppercaseText}`}>
            explore
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Home;
