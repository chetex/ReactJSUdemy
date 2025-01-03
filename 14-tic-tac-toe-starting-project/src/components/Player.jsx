export default function Player({ name, symbol, onEdit }) {
  return (
    <li>
      <span className="player">
        <div className="player-name">{name}</div>
        <div className="player-symbol">{symbol}</div>
      </span>
      <button onClick={onEdit}>Edit</button>
    </li>
  )
}