type CrewProps = {
  params: {
    name: string;
  };
};

function Crew({params: {name}}: CrewProps) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default Crew;
