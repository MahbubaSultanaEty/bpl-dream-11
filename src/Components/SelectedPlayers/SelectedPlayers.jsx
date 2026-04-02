import React from 'react';

import SelectedCard from '../ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin }) => {
    console.log(selectedPlayers, "selectedPlayers");

    const handleDeleteSelectedPlayer = (selectedPlayer) => {
        console.log(selectedPlayer);
        const fileteredPlayers = selectedPlayers.filter(player => player.playerName !== selectedPlayer.playerName);
        console.log(fileteredPlayers, "filteredPlayers");

        setSelectedPlayers(fileteredPlayers)
        setCoin(coin + selectedPlayer.price)

    }
    
    return (
        <div>
            {selectedPlayers.length === 0 ?
                <div className='bg-amber-100 py-24  text-center rounded-lg '>
                    <h2 className='font-bold md:text-2xl text-xl text-gray-800'>No Players Selected Yet</h2>
                    <p className='font-semibold text-sm  md:text-lg text-gray-500'>Go to available players section to choose player</p>
                </div> :
                selectedPlayers.map(selectedPlayer => { 
                    return <SelectedCard selectedPlayer={selectedPlayer} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
            })
            }
        </div>
    );
};

export default SelectedPlayers;