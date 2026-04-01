import React from 'react';

import Card from '../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    console.log(players);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>


            {
                players.map(player => {
                    return <Card key={player.id} setCoin={setCoin} player={player} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                })
            }

           
        </div>
    );
};

export default AvailablePlayers;