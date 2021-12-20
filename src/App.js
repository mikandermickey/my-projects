/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./index.css";
import CalculatorApp from "./Projects/Calculator/CalculatorApp";
import Insta from "./Projects/CloneApp.js/Insta";
import VejrApp from "./Projects/VejrApp/VejrApp";
import CRUDapp from "./Projects/CRUD/CRUDapp";

function App() {
  const heading = css`
    text-align: center;
  `;
  return (
    <>
      <div className="App">
        <h1 css={heading}>Heres some of my sandbox projects</h1>
        <div className="App-container">
          <Insta />
          <VejrApp />
          <CalculatorApp />
        </div>
        <CRUDapp />
      </div>
    </>
  );
}

export default App;
