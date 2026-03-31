
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players';


const fetchPlayer = async () => {
  const res = await fetch('/playerData.json');
  return res.json();
}
function App() {

  const playersPromise = fetchPlayer()

  return (
    <> 
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
  <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
