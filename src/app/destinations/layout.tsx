import typography from '@/style/typography.module.scss';
import destination from '@/style/pages/destination.module.scss';

function LayoutDestinations({children}: {children:React.ReactNode}) {
  return (  
    <section className={destination.container}>
      <p className={`${typography.navText} ${typography.uppercaseText} ${typography.whiteText}`}>
        <span className={`${typography.boldText} ${typography.lowOpacityText}`}>01 </span>
        pickup your destination
      </p>
      {children}
    </section>
  );
}

export default LayoutDestinations;
