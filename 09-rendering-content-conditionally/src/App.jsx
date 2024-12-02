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
  // State to store the selected tab
  const [tabSelectedButton, setTabButtonName] = useState("");

  // Render the content of the selected tab
  let tabContent = <p>Please select a tab</p>;
  if (tabSelectedButton) {
    tabContent = ( 
      <div>
        <h3>{EXAMPLES[tabSelectedButton].title}</h3>
        <p>{EXAMPLES[tabSelectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[tabSelectedButton].code}</code>
        </pre>
      </div>
    )
  }

  /**
   * This function is called when a tab button is selected
   * @param {} tabButtonName 
   */
  function handleSelect (tabSelected) {
    setTabButtonName(tabSelected);
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
          <TabButton isSelected={tabSelectedButton === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
          <TabButton isSelected={tabSelectedButton === "jsx"} onSelect={() => handleSelect("jsx")}>Jsx</TabButton>
          <TabButton isSelected={tabSelectedButton === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton isSelected={tabSelectedButton === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        <div id="tab-content">
          { tabContent }
        </div>
      </section>
    </div>
  );
}

export default App;