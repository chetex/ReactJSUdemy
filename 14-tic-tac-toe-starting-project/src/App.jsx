import Player from './components/Player.jsx';

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player name="Nacho" symbol="X" />
        <Player name="Pepe" symbol="O" />
      </ol>
    </div>
  )
}

export default App