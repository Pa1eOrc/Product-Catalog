type Props = {
  category: string,
};

export const NoSearchResults: React.FC<Props> = ({ category }) => {
  return (
    <h3>
      {`There are no ${category} products matching the query`}
    </h3>
  );
};
