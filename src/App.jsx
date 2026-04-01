
import { Suspense, use, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players';


const fetchPlayer = async () => {
  const res = await fetch('/playerData.json');
  return res.json();
}
function App() {

  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);

  return (
    <> 
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
  <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  )
}

export default App
