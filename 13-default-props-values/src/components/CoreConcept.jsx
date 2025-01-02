// Show coreconcepts function with props
export default function CoreConcept ({ image, title, description }) {
    return (
      <li>
        <img src={image}></img>
        <p>{title}</p>
        <h3>{description}</h3>
      </li>
    );
  }