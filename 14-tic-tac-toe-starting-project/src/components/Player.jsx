import { useState } from 'react';

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerNameValue, setPlayerNameValue] = useState(name); // State for input value

    function handleEdit() {
        setIsEditing(isEditing => !isEditing);
        if (!isEditing) {
            // If switching to edit mode, keep the input value in sync with current name prop
            setPlayerNameValue(name); // Or keep the last edited value if you prefer that behavior
        }
    }

    // Initial player state
    let playerName = <div className="player-name">{name}</div>;
    if (isEditing) {
        playerName = (
            <input
                type="text"
                value={playerNameValue} // Use the state value
                onChange={(e) => setPlayerNameValue(e.target.value)} // Update state on change
            />
        );
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <div className="player-symbol">{symbol}</div>
            </span>
            <button onClick={handleEdit}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}