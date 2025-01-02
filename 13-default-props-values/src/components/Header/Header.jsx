import reactImage from '../../assets/react-core-concepts.png';
import "./Header.css";

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
export default function Header() {
  // Set variable inside HEADER component (eficiencily)
  const description = codeHeaderWordsArray[generateCodeHeaderWords(3)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} react concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}