import { useState } from 'react';
import { EXAMPLES } from './Models/Examples.js';
import TabButton from './TapButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

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

    return (
        <Section title="Examples" idProps="examples">
            <Tabs 
                ButtonsContainer = "menu"
                buttons = {
                    <>
                        <TabButton isSelected={tabSelectedButton === "components"} onClick={() => setTabButtonName("components")}>Components</TabButton>
                        <TabButton isSelected={tabSelectedButton === "jsx"} onClick={() => setTabButtonName("jsx")}>Jsx</TabButton>
                        <TabButton isSelected={tabSelectedButton === "props"} onClick={() => setTabButtonName("props")}>Props</TabButton>
                        <TabButton isSelected={tabSelectedButton === "state"} onClick={() => setTabButtonName("state")}>State</TabButton>
                    </>
                } />
            <div id="tab-content">
                { tabContent }
            </div>
        </Section>
    );
}

