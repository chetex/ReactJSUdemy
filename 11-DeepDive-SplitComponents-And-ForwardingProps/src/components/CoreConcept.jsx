// Show coreconcepts function with props
export default function CoreConcept ({ image, title, description }) {
    return (
      <li>
        <h3>Name: {description}</h3>
        <p>Titulo: {title}</p>
        <img src={image}></img>
      </li>
    );
  }