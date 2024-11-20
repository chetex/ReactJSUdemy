import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';

import Header from './components/Header/Header.jsx';
import Avatar from './components/Avatar.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TapButton.jsx';


/**
 * Main function APP given on enter
 * @returns 
 */
function App() {
  const [tabSelectedButton, setTabButtonName] = useState("components");

  function handleSelect (tabButtonName) {
    setTabButtonName(tabButtonName);
    console.log ("selected => " + tabButtonName);
  } 

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
          <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}>Jsx</TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[tabSelectedButton].title}</h3>
          <p>{EXAMPLES[tabSelectedButton].description}</p>
          <pre>
            <code>{EXAMPLES[tabSelectedButton].code}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}

export default App;