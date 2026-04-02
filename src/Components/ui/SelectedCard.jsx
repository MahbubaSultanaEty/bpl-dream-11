import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

const SelectedCard = ({selectedPlayer, handleDeleteSelectedPlayer}) => {
    return (

        // <h2>selected Player</h2>
                    <div className='space-y-4 ' key={selectedPlayer.id}>
                        <div className='flex justify-between pr-5 border my-2 bg-gray-200 rounded-xl'>
                            <div className='flex  gap-3 h-20 w-55 md:w-70 md:h-30 p-3  m-2 items-center'>
                                <img className='h-10 w-12 md:h-20 md:w-20 rounded' src={selectedPlayer.image} alt={selectedPlayer.playerName} />
                                <div >
                                    <p className='font-semibold md:text-lg text-sm flex items-center gap-1'> <FaUser />{selectedPlayer.playerName}</p>  
                                    <p className='font-semibold text-xs md:text-sm'>{selectedPlayer.playerType}</p>  
                                </div>    
                            </div>
                        
                            <div className='flex items-center'>
                                <button
                                    onClick={() =>handleDeleteSelectedPlayer(selectedPlayer)}
                                    className='btn text-red-400 '><MdDelete /></button>
                            </div>
                            </div>
                </div>
    );
};

export default SelectedCard;