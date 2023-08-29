import Beer from "./Beer";

const BeersList = ({
  beers,
  favoritesList,
  setFavoritesList,
  isFavoritesContainer,
}) => {
  return beers?.map((beer, index) => (
    <Beer
      key={index}
      beer={beer}
      favoritesList={favoritesList}
      setFavoritesList={setFavoritesList}
      isFavoritesContainer={isFavoritesContainer}
    />
  ));
};

export default BeersList;
