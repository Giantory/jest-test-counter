import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';



function App() {
  return (
    <div className="App">
      <Counter numInicial={0}/>
    </div>
  );
}


export default App;
