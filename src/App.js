import React from "react";
import Card from "./components/Card";
import TagFilterContainer from "./components/TagFilterContainer";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  background: #f2f2f2;
  vertical-scroll: scroll;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TagFilterContainer />
        <CardsContainer>
          <Card />
        </CardsContainer>
      </header>
    </div>
  );
}

export default App;
