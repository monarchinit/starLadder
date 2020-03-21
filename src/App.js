import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import Matches from "./pages/Matches";
import Battles from "./pages/Battles";
import Header from "./components/header/Header";
import "./style/style.css";

// function App() {
//   const [flagRenderListMatches, setFlagRenderListMatches] = useState(true);
//   const [flagRenderListBattles, setFlagRenderListBattles] = useState(false);

//   const RenderListMatches = () => {
//     if(flagRenderListMatches&&!flagRenderListBattles){
//       return
//     }
//     setFlagRenderListMatches(true);
//     setFlagRenderListBattles(false);
//   };

//   const RenderListBattles = () => {
//     if(flagRenderListBattles&&!flagRenderListMatches){
//       return
//     }
//     setFlagRenderListBattles(true);
//     setFlagRenderListMatches(false);
//   };

//   const dataRenderMatch = window.screen.width>414?matches:matchMobyle
// const dataRenderBttles = window.screen.width>414?battles:battlesMobyle

//   return (
//     <>
//       <div className="ownContainer">
//         <Header
//           RenderListMatches={RenderListMatches}
//           RenderListBattles={RenderListBattles}
//           flagRenderListMatches={flagRenderListMatches}
//           flagRenderListBattles={flagRenderListBattles}
//         />
//         {flagRenderListMatches ? (
//           <ActionsList actions={dataRenderMatch} />
//         ) : (
//           <ActionsList actions={dataRenderBttles} />
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";

// import Header from "./components/header/Header";
// import ActionsList from "./components/matches/ActionsList";
// import matches from "./assets/matches";
// import battles from "./assets/battles";
// import matchMobyle from "./assets/matchMobyle.test";
// import battlesMobyle from "./assets/battlesMobyle.test";

// import "./style/style.css";

const App = () => {
  return (
    <>
      <div className="ownContainer">
        <Header />
        <Switch>
          <Route path="/matches" exact component={Matches} />
          <Route path="/battles" component={Battles} />
          <Redirect to="/matches" />
        </Switch>
      </div>
    </>
  );
};

export default App;
