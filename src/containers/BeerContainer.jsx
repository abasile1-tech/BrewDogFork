/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BeersList from "../components/BeersList";

const BeerContainer = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    setBeers(data);
  };

  return (
    <>
      <h1>BrewDog Beers</h1>
      <BeersList beers={beers} />
    </>
  );
};

export default BeerContainer;
