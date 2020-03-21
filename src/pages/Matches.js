import React from 'react'
import ActionsList from "../components/matches/ActionsList";
import matches from "../assets/matches";
import matchMobyle from "../assets/matchMobyle.test";

const Matches = () => {

    const dataRenderMatch = window.screen.width>414?matches:matchMobyle
    return(<><ActionsList actions={dataRenderMatch} /></>)
}

export default Matches;