import React, { useState } from 'react';
 import { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise , setCoin, coin}) => {
    console.log(playersPromise);

    const players = use(playersPromise);
    console.log(playersPromise)
    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, 'selectedType')

    return (
        <div className='w-11/12 mx-auto '>
            <div className='flex justify-between gap-4 items-center my-5 mb-5'>
                {selectedType === "available" ? <h2 className='font-bold text-2xl md:text-3xl'>Available Players: {players.length}</h2> : <h2 className='font-bold text-xl md:text-2xl'>Selected Players 12/22</h2>
                }
                <div>
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType === "available" ? "bg-[#e7fe29]" : ""} rounded-r-none rounded-xl`}>Available</button>
                    
                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn ${selectedType === "selected" ? "bg-[#e7fe29]" : ""} rounded-l-none rounded-xl`}>Selected</button>
                </div>
            </div>
            
            {selectedType === "available"? <AvailablePlayers setCoin={setCoin} players={players} coin={coin}></AvailablePlayers>: <SelectedPlayers></SelectedPlayers>}
        </div>
    );
};

export default Players;