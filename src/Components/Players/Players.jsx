import React from 'react';
 import { use } from 'react';

const Players = ({ playersPromise }) => {
    console.log(playersPromise);

    const playerData = use(playersPromise);
    console.log(playersPromise)
    return (
        <div>
            <h2>Players: { playerData.length}</h2>
        </div>
    );
};

export default Players;