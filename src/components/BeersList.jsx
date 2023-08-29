import Beer from "./Beer";

const BeersList = ({ beers }) => {
  return beers.map((beer, index) => <Beer key={index} beer={beer} />);
};

export default BeersList;
