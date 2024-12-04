// Show avatar function with props
export default function Avatar(props) {
    return <p>
      <li>
        <h3>Name: {props.description}</h3>
        <p>Titulo: {props.title}</p>
        <img src={props.image}></img>
      </li>
    </p>;
}