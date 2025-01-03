import { useState } from 'react';

export default function Player({ name, symbol, onEdit }) {
    const [ isEditing, setIsEditing ] = useState(false);

    // After user clicks the "Edit" button, the state is updated
    function handleEdit() {
      setIsEditing(isEditing => !isEditing);
    }
  
    // Initial player state
    let playerName = <div className="player-name">{name}</div>;
    if (isEditing) {
      playerName = <input type="text" value={name} onChange={console.log("Change name")} />;
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
    )
}