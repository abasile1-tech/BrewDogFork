/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const BeerContainer = () => {
  const [beers, setBeers] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <>
      <h1>BrewDog Beers</h1>
      <BeersList
        beers={beers}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
    </>
  );
};

const BeersList = ({ beers, buttonClicked, setButtonClicked }) => {
  const [listIndex, setListIndex] = useState(1);

  return beers.map((beer, index) => (
    <Beer
      key={index}
      i={index}
      beer={beer}
      buttonClicked={buttonClicked}
      setButtonClicked={setButtonClicked}
      listIndex={listIndex}
      setListIndex={setListIndex}
    />
  ));
};

const Beer = ({
  i,
  beer,
  buttonClicked,
  setButtonClicked,
  listIndex,
  setListIndex,
}) => {
  return (
    <>
      <ul type="none">
        <li key={i}>
          <img
            src={beer.image_url}
            alt={beer.name}
            style={{ width: 100, height: 300 }}
          />
          <br />
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          {/* <h3>{listIndex}</h3> */}
          <button
            onClick={() => {
              handleButtonClick(
                buttonClicked,
                setButtonClicked,
                listIndex,
                setListIndex,
                i
              );
              // {
              //   () =>
              //     //listIndex === i ? setListIndex(undefined) : setListIndex(i);
              //     console.log("checking");
              //   listIndex === i
              //     ? console.log("yes:", listIndex, i)
              //     : console.log("no:", listIndex, i);
              //   console.log("running");
              // }
            }}
          >
            {buttonClicked == false ? "Show Description:" : "Hide Description:"}
          </button>
          {i === listIndex
            ? buttonClicked == true && (
                <div>
                  <p>{beer.description}</p>
                  <p>{beer.abv} % ABV</p>
                </div>
              )
            : null}
          <hr />
        </li>
      </ul>
    </>
  );
};

const handleButtonClick = (
  buttonClicked,
  setButtonClicked,
  listIndex,
  setListIndex,
  i
) => {
  if (buttonClicked == true) {
    setButtonClicked(false);
    setListIndex(undefined);
  } else {
    setButtonClicked(true);
    setListIndex(i);
  }
};

export default BeerContainer;
