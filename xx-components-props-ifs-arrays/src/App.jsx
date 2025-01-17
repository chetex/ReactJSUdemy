import { useState } from 'react';
import Header from './components/Header';
import Logos from './components/Logos';
import TabButton from './components/TabButton';
import { TAB_DATA } from './model/Data';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  /**
   * Handles click on the button
   */
  function handleClick() {
    setCount(count + 1);
  }

  let tabs = <p>Loading... click in count button</p>;
  if (count > 0) {
    tabs = TAB_DATA.map((tab, index) => {
      return (
        <TabButton
          key={index}
          onSelect={tab.onSelect}
          isSelected={tab.isSelected}
        >
          {tab.title}
        </TabButton>
      );
    });
  }

  return (
    <>
      <Header />
      <div>
        <Logos />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleClick()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {tabs}
    </>
  )
}

export default App
