import React from 'react';
import ForwardCounter from './components/ForwardCounter';
import BackwardCounter from './components/BackwardCounter';
import './App.css';

function App() {
 return (
    <React.Fragment>
      <section>
        <h4>React Custom Hooks</h4>
      </section>
    <ForwardCounter />
    <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
