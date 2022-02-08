import { useEffect, useState } from "react";
import styled from "styled-components";
import MoviesCardListContainer from "./MoviesCardListContainer";
import TrendingController from "./TrendingController";

const Header = styled.header`
  display: flex;
  justify-content: center;
  h1 {
    font-size: 3rem;
  }
`;

function App() {
  const [trending, setTrending] = useState("movie");
  return (
    <div className="App">
      <Header>
        <h1>WhatToWatch</h1>
      </Header>
      <TrendingController action={setTrending} trending={trending} />
      <MoviesCardListContainer trending={trending} />
    </div>
  );
}

export default App;
