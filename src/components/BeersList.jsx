import Beer from "./Beer";

const BeersList = ({ beers, favoritesList, setFavoritesList }) => {
  return beers?.map((beer, index) => (
    <Beer
      key={index}
      beer={beer}
      favoritesList={favoritesList}
      setFavoritesList={setFavoritesList}
    />
  ));
};

export default BeersList;
