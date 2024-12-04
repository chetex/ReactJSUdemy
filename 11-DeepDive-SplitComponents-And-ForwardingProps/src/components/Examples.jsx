import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TapButton.jsx';

export default function Examples() {
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
    );
}

