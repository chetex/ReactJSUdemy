import { useState } from 'react';

export default function Players({ player }) {
    let [playerName, setPlayerName] = useState('');
    let [isEditing, setIsEditing] = useState(false);

    /**
     * Function to handle the input of the player name
     * @param {event} event
     */
    function handleInput() {
        // Set player name from id player-name from input
        setPlayerName(document.getElementById('player-name').value);
    }

    /**
     * Function to handle the click of the button
     * @param {event} event
     */
    function handleClick() {
        // Set isEditing to true
        setIsEditing(true);
    }

    // Set object input or div depening on is editting or not
    let playerHtml = isEditing ? (
        <input id="player-name" type="text" value={playerName} onChange={handleInput}
            placeholder={player} />
    ) : (
        <span className="player-symbol">{player}</span>
    );

    return (
        <>
        <div>
            <h3>Player {playerName}</h3>
            {playerHtml}
            <span className="player-symbol">🕵️</span>
            <button onClick={handleClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
        </>
    )
}