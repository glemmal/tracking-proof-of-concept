import React from 'react';
import './App.css';

import Login from './components/Login';
import { TrackingRootProvider } from './providers/tracking-root-provider';

function App() {
  return (
    <div>
      <TrackingRootProvider onEvent={console.log}>
        <h1>Tracking proof of concept</h1>
        <div className="App">
          <Login />
        </div>
      </TrackingRootProvider>
    </div>
  );
}

export default App;
