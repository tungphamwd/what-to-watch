import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesCardListContainer from "./MoviesCardListContainer";
import TrendingController from "./TrendingController";
import ItemDetail from "./ItemDetail";
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
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <TrendingController action={setTrending} trending={trending} />
                <MoviesCardListContainer trending={trending} />
              </>
            }
          />
          <Route path="/detail/:type/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
