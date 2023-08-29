/* eslint-disable react/prop-types */
import { useState } from "react";

const Beer = ({
  beer,
  favoritesList,
  setFavoritesList,
  isFavoritesContainer,
}) => {
  const [descriptionButtonClicked, setdescriptionButtonClicked] =
    useState(false);

  const [favoriteButtonClicked, setFavoriteButtonClicked] = useState(false);

  const handleFavoriteButtonClick = () => {
    if (
      favoritesList &&
      (isFavoritesContainer || favoritesList.find((item) => item.id == beer.id))
    ) {
      setFavoritesList(favoritesList.filter((item) => item.id != beer.id));
    } else if (favoriteButtonClicked === false) {
      setFavoritesList([...favoritesList, beer]);
    }
  };

  const toggleButton = (isButtonClicked, buttonClickedFunction) => {
    if (isButtonClicked) {
      buttonClickedFunction(false);
    } else {
      buttonClickedFunction(true);
    }
  };

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
              toggleButton(
                descriptionButtonClicked,
                setdescriptionButtonClicked
              );
            }}
          >
            {descriptionButtonClicked == false
              ? "Show Description:"
              : "Hide Description:"}
          </button>
          <button
            onClick={() => {
              toggleButton(favoriteButtonClicked, setFavoriteButtonClicked);
              handleFavoriteButtonClick();
            }}
          >
            {isFavoritesContainer
              ? "Remove from Favorites:"
              : favoritesList.find((item) => item.id == beer.id)
              ? "Remove from Favorites:"
              : "Add to Favorites List:"}
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

export default Beer;
