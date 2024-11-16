import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import Avatar from './components/Avatar.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TapButton.jsx';

/**
 * Main function APP given on enter
 * @returns 
 */
function App() {
  return (  
    <div> 
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section>
          <ul>
            <Avatar {...CORE_CONCEPTS[0]}/>
            <Avatar {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
          <TabButton>Jsx</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
      </section>
    </div>
  );
}

export default App;