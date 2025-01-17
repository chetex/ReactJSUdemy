import Players from './components/Players';

function App() {
  return (
    <div id="game-container">
      <h2 id="players-header">Players</h2>
      <ol id="players">
        <Players player="Player 1" />
        <Players player="Player 2" />
      </ol>
    </div>
  )
}

export default App