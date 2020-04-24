import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import VersioningTool from './versioning-tool.js';
import './App.css';

function App() {
  return (
    <main>
      <h1 className="margin-bottom-less">Versioning Tool</h1>
      <Router>
        <Route path="/versioning-tool/" component={VersioningTool} />
      </Router>
    </main>
  );
}

export default App;
