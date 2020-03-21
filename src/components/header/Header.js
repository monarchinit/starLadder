import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [flagRenderListMatches, setFlagRenderListMatches] = useState(true);
  const [flagRenderListBattles, setFlagRenderListBattles] = useState(false);

  const RenderListMatches = e => {
    console.log(e.key);
    if (flagRenderListMatches && !flagRenderListBattles) {
      return;
    }
    // if (e.key === "Enter") {
    //   setFlagRenderListMatches(true);
    //   setFlagRenderListBattles(false);
    //   return;
    // }
    setFlagRenderListMatches(true);
    setFlagRenderListBattles(false);
  };

  const RenderListBattles = e => {
    if (flagRenderListBattles && !flagRenderListMatches) {
      return;
    }
    // if (e.key === "Enter") {
    //   setFlagRenderListBattles(true);
    //   setFlagRenderListMatches(false);
    //   return;
    // }
    setFlagRenderListBattles(true);
    setFlagRenderListMatches(false);
  };
  return (
    <header className="header">
      <h1 className="header__title">Make me up!</h1>
      <div className="viewButtonsContainer">
        <NavLink onClick={RenderListMatches} exact to="/matches">
          <div
            style={{ backgroundColor: flagRenderListMatches && "#ff5e5e" }}
            className="viewButtonsContainer__Button"
          >
          <span className="viewButtonsContainer__content"> Matches</span> 
          </div>
        </NavLink>
        <NavLink onClick={RenderListBattles} exact to="/battles">
          <div
            style={{ backgroundColor: flagRenderListBattles && "#ff5e5e" }}
            className="viewButtonsContainer__Button"
          >
            <span className="viewButtonsContainer__content">Battles</span> 
          </div>{" "}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
