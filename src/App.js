import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Header title="Sample App" />
      <Content count={count} increment={increment} />
      <Footer year={2024} />
    </div>
  );
}

export default App;
