import React from 'react';
 import { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({ playersPromise }) => {
    console.log(playersPromise);

    const players = use(playersPromise);
    console.log(playersPromise)
    return (
        <div className='w-11/12 mx-auto bg-amber-100'>
            <h2>Available players {players.length}</h2>
            
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;