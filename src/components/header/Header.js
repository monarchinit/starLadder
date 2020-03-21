import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [flagRenderListMatches, setFlagRenderListMatches] = useState(true);
  const [flagRenderListBattles, setFlagRenderListBattles] = useState(false);

  const RenderListMatches = () => {
    if (flagRenderListMatches && !flagRenderListBattles) {
      return;
    }
    setFlagRenderListMatches(true);
    setFlagRenderListBattles(false);
  };

  const RenderListBattles = () => {
    if (flagRenderListBattles && !flagRenderListMatches) {
      return;
    }
    setFlagRenderListBattles(true);
    setFlagRenderListMatches(false);
  };
  return (
    <header className="header">
      <h1 className="header__title">Make me up!</h1>
      <div className="viewButtonsContainer">
        <NavLink exact to="/matches">
          <button
            style={{ backgroundColor: flagRenderListMatches && "#ff5e5e" }}
            onClick={RenderListMatches}
            className="viewButtonsContainer__Button"
          >
            Matches
          </button>{" "}
        </NavLink>
        <NavLink
          exact
          to="/battles"
        >
          <button
            style={{ backgroundColor: flagRenderListBattles && "#ff5e5e" }}
            onClick={RenderListBattles}
            className="viewButtonsContainer__Button"
          >
            Battles
          </button>{" "}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
