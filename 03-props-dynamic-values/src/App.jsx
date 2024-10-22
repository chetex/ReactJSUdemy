import reactImage from './assets/react-core-concepts.png';

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
    <ul>
      <li>Name: {props.name}</li>
      <li>Titulo: {props.titulo.name}</li>
      <li>Titulo: {props.titulo.place}</li>
    </ul>
  </p>;
}

/**
 * Main function APP given on enter
 * @returns 
 */
function App() {
  return (  
    <div> 
      < Header/>
      <Avatar 
        name="Nacho" 
        titulo={{
          name: 'Ing info',
          place: 'UC3M'
        }}/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;