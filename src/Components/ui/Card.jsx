import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';



const Card = ({ player, setCoin, coin , selectedPlayers, setSelectedPlayers}) => {
    const [isSelected, setIsSelected]= useState(false)
    return (
        <div>
            <div key={player.id} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='h-50'
      src={player.image} />
  </figure>
  <div className="card-body">
                            <h2 className="card-title">  <FaUser /> { player.playerName}</h2>
                    <div className='flex justify-between'>
                        <div className='flex justify-between items-center gap-3'>
                        <FaFlag />
                                    <p>{ player.playerCountry}</p>
                        </div>
                                <button className='btn '>{ player.playerType}</button>
                    </div>

                    <div className="divider"></div>

                            <h2 className='font-bold'>Rating: { player.rating}</h2>
                    <div className='flex justify-between gap-4 font-bold'>
                                <p>{ player.batStyle}</p>
                                <p className='text-right'>{ player.bowlingStyle}</p>
                    </div>
                    
                    <div className="card-actions justify-between items-center font-semibold">
                                <p>Price:  ${ player.price}</p>
                        <button className="btn " onClick={() => {
                            
                            setIsSelected(true);
                            let newCoin = coin - player.price;
                            if(newCoin >= 0){
                                setCoin(coin - player.price);
                                toast.success(`${player.playerName} is selected`, {position: "top-center", autoClose: 3000,});
                                setSelectedPlayers([...selectedPlayers, player]);                               
                            } else {
                                toast.error("Not enough coins to choose this player")
                            }
                           
                        }}  disabled={ isSelected}>
                            {isSelected === true ? "Selected" : "Choose Player"}
                        </button>
                    </div>
  </div>
</div>
        </div>
    );
};

export default Card;