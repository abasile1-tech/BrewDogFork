/* eslint-disable react/prop-types */
import { useState } from "react";

const Beer = ({ beer }) => {
  const [descriptionButtonClicked, setdescriptionButtonClicked] =
    useState(false);

  const [favoriteButtonClicked, setFavoriteButtonClicked] = useState(false);

  const handleButtonClick = (isButtonClicked, buttonClickedFunction) => {
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
              handleButtonClick(
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
              handleButtonClick(
                favoriteButtonClicked,
                setFavoriteButtonClicked
              );
            }}
          >
            {favoriteButtonClicked == false
              ? "Add to Favorites List:"
              : "Remove from Favorites:"}
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
