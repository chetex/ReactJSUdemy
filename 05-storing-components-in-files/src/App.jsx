import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import Avatar from './components/Avatar.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';

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
    </div>
  );
}

export default App;