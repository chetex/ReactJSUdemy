// Show coreconcepts function with props
export default function CoreConcepts({description, title, image}) {
    return <p>
      <li>
        <h3>Name: {description}</h3>
        <p>Titulo: {title}</p>
        <img src={image}></img>
      </li>
    </p>;
  }