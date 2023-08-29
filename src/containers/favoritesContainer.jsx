/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BeersList from "../components/BeersList";

const FavoritesContainer = ({ favoritesList, setFavoritesList }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    setBeers(favoritesList);
  }, favoritesList);

  // const fetchBeers = async () => {
  //   const res = await fetch("https://api.punkapi.com/v2/beers");
  //   const data = await res.json();
  //   setBeers(data);
  // };

  return (
    <>
      <h1>Favorite BrewDog Beers</h1>
      <BeersList
        beers={beers}
        favoritesList={favoritesList}
        setFavoritesList={setFavoritesList}
      />
    </>
  );
};

export default FavoritesContainer;
