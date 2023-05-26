function LayoutDestinations({children}: {children:React.ReactNode}) {
  return (  
    <section>
      <p>
        <span>01 </span>
        pickup your destination
      </p>
      {children}
    </section>
  );
}

export default LayoutDestinations;
