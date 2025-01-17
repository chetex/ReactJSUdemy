import { useState } from 'react';

export default function Players({ player }) {
    let [playerName, setPlayerName] = useState('');

    /**
     * Function to handle the input of the player name
     * @param {event} event
     */
    function handleInput() {
        // Set player name from id player-name from input
        setPlayerName(document.getElementById('player-name').value);
    }

    return (
        <>
        <div>
            <h3>Player {playerName}</h3>
            <input id="player-name" type="text" value={playerName} onChange={handleInput}
                placeholder={player} />
            <span className="player-symbol">🕵️</span>
            <button onClick={handleInput}>Add</button>
        </div>
        </>
    )
}