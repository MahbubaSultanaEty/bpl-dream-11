import React, { useState } from 'react';
 import { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';




const Players = ({ playersPromise , setCoin, coin}) => {
    console.log(playersPromise);

    const players = use(playersPromise);
    console.log(playersPromise)
    const [selectedType, setSelectedType] = useState("available");
    console.log(selectedType, 'selectedType');

     const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='w-11/12 mx-auto '>
            <div className='flex justify-between gap-4 items-center my-5 mb-5'>
                {selectedType === "available" ? <h2 className='font-bold text-xl md:text-2xl'>Available Players: {players.length}</h2> : <h2 className='font-bold text-xl md:text-2xl'>Selected Players { selectedPlayers.length}/{players.length}</h2>
                }
                <div>
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType === "available" ? "bg-[#e7fe29]" : ""} rounded-r-none rounded-xl`}>Available</button>
                    
                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn ${selectedType === "selected" ? "bg-[#e7fe29]" : ""} rounded-l-none rounded-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            
            {selectedType === "available" ? <AvailablePlayers
                setCoin={setCoin}
                players={players}
                coin={coin}
                setSelectedPlayers={setSelectedPlayers}
                selectedPlayers={selectedPlayers}></AvailablePlayers> : <SelectedPlayers
                selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
            ></SelectedPlayers>}
        </div>
    );
};

export default Players;