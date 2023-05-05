/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "../styles/startPage.css";
import  getDirections  from "../services/api";
import  getCoordinates from "../services/placeToCoordinate";

function StartPage() {
  const [startPoint, setStartPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");

  const getStartCoordinate = async (location) => {
    const apiKey = "5b3ce3597851110001cf62489e38b65d91854241aca6eca1fff130a6";
    const coordinateData = await getCoordinates(
      location,
      apiKey
    );
    const coordinate = coordinateData.features[0].geometry.coordinates;
    const things =  coordinate.map((v) => {
      return v
    });
    return things;
  };

  const getDestinationCoordinate = async (location) => {
    const apiKey = "5b3ce3597851110001cf62489e38b65d91854241aca6eca1fff130a6";
    const coordinateData = await getCoordinates(
      location,
      apiKey
    );
    const coordinate = coordinateData.features[0].geometry.coordinates;
    const things =  coordinate.map((v) => {
      return v
    });
    return things;
  };

  const getTravelTime = async (origin, destination) => {
    const apiKey = "5b3ce3597851110001cf62489e38b65d91854241aca6eca1fff130a6";
    const directionsData = await getDirections(
      origin,
      destination,
      apiKey
    );
    const durationInSeconds =
      directionsData.features[0].properties.summary.duration;
    console.log(durationInSeconds);
  };

   
  return (
    <div className="start-page container">
      <h1>Your Journey</h1>
      <p>Start a Journey to match your cast!</p>
      <form onSubmit={(e) => e.preventDefault()}>

        <input
          type="text"
          id="start-point"
          name="start-point"
          placeholder="Enter starting location"
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
        />
        
        
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="Enter destination"
          value={destinationPoint}
          onChange={(e) => setDestinationPoint(e.target.value)}
        />
        <button onClick={() => {
            const promise1 = Promise.resolve(getStartCoordinate(startPoint));
            const promise2 = Promise.resolve(getDestinationCoordinate(destinationPoint));

            Promise.all([promise1, promise2]).then((values) => {
              getTravelTime(values[0], values[1])
              console.log(values)
            })
        }
          }>
          Cast
        </button>
      </form>
    </div>
  );
}

export default StartPage;
