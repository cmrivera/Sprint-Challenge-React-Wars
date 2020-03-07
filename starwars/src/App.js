import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import StarWars from "./components/StarWars";

const PersonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  margin: 0 auto;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const ApiUrl = "https://swapi.co/api/people/";
  const [person, setPerson] = useState();

  useEffect(() => {
    axios
      .get(ApiUrl)
      .then(response => setPerson(response.data.results))
      .catch(error => console.log(error));
  }, []);
  console.log(person);

  if (!person) return "Loading...";
  return (
    <PersonList>
      {person.map((item, index) => (
        <StarWars key={index} item={item} />
      ))}
    </PersonList>
  );
};

export default App;
