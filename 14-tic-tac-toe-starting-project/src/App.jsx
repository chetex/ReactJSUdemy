import Player from './components/Player.jsx';

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player name="Player 1" symbol="X" onEdit={() => console.log('Edit Player 1')} />
        <Player name="Player 2" symbol="O" onEdit={() => console.log('Edit Player 2')} />
      </ol>
    </div>
  )
}

export default App