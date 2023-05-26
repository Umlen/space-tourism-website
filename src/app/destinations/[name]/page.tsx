import typography from '@/style/typography.module.scss';

type DestinationProps = {
  params: {
    name: string;
  };
};

function Destination ({params: {name}}: DestinationProps) {
  return (
    <div>
      <h1 className={`${typography.bigHeader} ${typography.uppercaseText}`}>
        {name}
      </h1>
    </div>
  );
}

export default Destination;
