/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

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

const BeersList = ({ beers }) => {
  return beers.map((beer, index) => <Beer key={index} beer={beer} />);
};

const Beer = ({ beer }) => {
  const [descriptionButtonClicked, setdescriptionButtonClicked] =
    useState(false);

  const [favoriteButtonClicked, setFavoriteButtonClicked] = useState(false);

  return (
    <>
      <ul type="none">
        <li>
          <img
            src={beer.image_url}
            alt={beer.name}
            style={{ width: 100, height: 300 }}
          />
          <br />
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <button
            onClick={() => {
              handleDescriptionButtonClick(
                descriptionButtonClicked,
                setdescriptionButtonClicked
              );
            }}
          >
            {descriptionButtonClicked == false
              ? "Show Description:"
              : "Hide Description:"}
          </button>
          {descriptionButtonClicked == true && (
            <div>
              <p>{beer.description}</p>
              <p>{beer.abv} % ABV</p>
            </div>
          )}
          <hr />
        </li>
      </ul>
    </>
  );
};

const handleDescriptionButtonClick = (
  descriptionButtonClicked,
  setdescriptionButtonClicked
) => {
  if (descriptionButtonClicked === true) {
    setdescriptionButtonClicked(false);
  } else {
    setdescriptionButtonClicked(true);
  }
};

const handleFavoriteButtonClick = (
  favoriteButtonClicked,
  setFavoriteButtonClicked
) => {
  if (favoriteButtonClicked === true) {
    setFavoriteButtonClicked(false);
  } else {
    setFavoriteButtonClicked(true);
  }
};

export default BeerContainer;
