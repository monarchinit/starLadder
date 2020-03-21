import React from 'react'
import ActionsList from "../components/matches/ActionsList";
import battles from "../assets/battles";
import battlesMobyle from "../assets/battlesMobyle.test";

const Battles = () => {

    const dataRenderMatch = window.screen.width>414?battles:battlesMobyle
    return(<><ActionsList actions={dataRenderMatch} /></>)
}

export default Battles;
