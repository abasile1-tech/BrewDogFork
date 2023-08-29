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
    if (favoritesList && (isFavoritesContainer || favoriteButtonClicked)) {
      console.log(`should be removing ${beer.name} from favorites`);
      console.log("favoritesList1: ", favoritesList);
      const newList = favoritesList.filter((item) => item.id != beer.id);
      console.log("newList: ", newList);
      console.log("favoritesList2: ", favoritesList);
      setFavoritesList(newList);
    } else if (favoriteButtonClicked === false) {
      console.log(`should be adding ${beer.name} to favorites`);
      console.log("favoritesList before: ", favoritesList);
      setFavoritesList([...favoritesList, beer]);
      console.log("favoritesList after: ", favoritesList);
    } else {
      console.log("who knows");
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
              : favoriteButtonClicked == false
              ? "Add to Favorites List:"
              : "Remove from Favorites:"}
            {/* {favoritesList.find((item) => {
              item == beer;
            })
              ? "Add to Favorites List:"
              : "Remove from Favorites:"} */}
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
