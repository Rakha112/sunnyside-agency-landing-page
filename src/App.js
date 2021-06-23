import React from 'react';
import Home from './components/Home';
import Isiweb from './components/Isiweb';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Isiweb/>
    </div>
  );
}

export default App;
