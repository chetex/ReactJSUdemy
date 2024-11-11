import reactImage from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

/**
 * Array with elements to show
 */
const codeHeaderWordsArray = ['Fundamental', 'Core', 'Important'];

/**
 * Generate random numbers
 * @param {*} max 
 * @returns 
 */
function generateCodeHeaderWords (max) {
  return Math.floor(Math.random() * max);
}

/**
 * Component header with JSX code
 * @returns JSX html code
 */
function Header() {
  // Set variable inside HEADER component (eficiencily)
  const description = codeHeaderWordsArray[generateCodeHeaderWords(3)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Nacho</h1>
      <p>
        {description} react concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// Show avatar function with props
function Avatar(props) {
  return <p>
    <li>
      <h3>Name: {props.description}</h3>
      <p>Titulo: {props.title}</p>
      <img src={props.image}></img>
    </li>
  </p>;
}

// Show coreconcepts function with props
function CoreConcepts({description, title, image}) {
  return <p>
    <li>
      <h3>Name: {description}</h3>
      <p>Titulo: {title}</p>
      <img src={image}></img>
    </li>
  </p>;
}

/**
 * Main function APP given on enter
 * @returns 
 */
function App() {
  return (  
    <div> 
      <Header/>
      <section>
        <ul>
          <Avatar {...CORE_CONCEPTS[0]}/>
          <Avatar {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;