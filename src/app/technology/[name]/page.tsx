type TechnologyProps = {
  params: {
    name: string;
  };
};

function Technology({params: {name}}: TechnologyProps) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default Technology;
