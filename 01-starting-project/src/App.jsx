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
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Nacho</h1>
      <p>
        {codeHeaderWordsArray[generateCodeHeaderWords(3)]} react concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

/**
 * Main function APP given on enter
 * @returns 
 */
function App() {
  return (  
    <div> 
      < Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;