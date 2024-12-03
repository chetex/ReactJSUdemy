import { useState } from 'react';
import Header from './components/Header';
import ReactLogo from './components/Logos';
import TabButton from './components/TabButton';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  /**
   * Handles click on the button
   */
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Header />
      <div>
        <ReactLogo />
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
      <ul>
        <TabButton onSelect={() => console.log('tab1')} isSelected={true}>
          Tab 1
        </TabButton>
        <TabButton onSelect={() => console.log('tab2')} isSelected={false}>
          Tab 2
        </TabButton>
        <TabButton onSelect={() => console.log('tab3')} isSelected={false}>
          Tab 3
        </TabButton>
      </ul>
    </>
  )
}

export default App
