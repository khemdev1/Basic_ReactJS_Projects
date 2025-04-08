import './App.css'
import LotteryNew from './Lottery.jsx';

function App() {
  return (
    <>
      <h1>Lottery Game</h1>
      <LotteryNew n={5} winningsum={25}/>
      <LotteryNew n={7} winningsum={35}/>
      <LotteryNew n={9} winningsum={45}/>
    </>
  )
}

export default App;
