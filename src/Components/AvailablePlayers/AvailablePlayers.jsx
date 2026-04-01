import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const AvailablePlayers = ({ players }) => {
    console.log(players);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>


            {
                players.map(player => {
                    return  <div key={player.id} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='h-50'
      src={player.image} />
  </figure>
  <div className="card-body">
                            <h2 className="card-title">  <FaUser /> ${ player.playerName}</h2>
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
                                <p>{ player.bowlingStyle}</p>
                    </div>
                    
                    <div className="card-actions justify-between items-center font-semibold">
                                <p>Price: { player.price}</p>
                    <button className="btn ">Choose Player</button>
                    </div>
  </div>
</div>
                })
            }

           
        </div>
    );
};

export default AvailablePlayers;