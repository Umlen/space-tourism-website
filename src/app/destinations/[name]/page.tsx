type DestinationProps = {
  params: {
    name: string;
  };
};

function Destination ({params: {name}}: DestinationProps) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default Destination;
