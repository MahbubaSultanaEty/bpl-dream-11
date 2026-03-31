import React from 'react';
import dollarimg from "./../.././assets/dollar-1.png"
const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
                <button className="flex items-center gap-1 font-bold text-xl">
                   0 coins
     <img src={dollarimg}></img>
    </button>
  </div>
</div>
    );
};

export default Navbar;