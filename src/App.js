import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import VersioningTool from './versioning-tool.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <main className="container mb-5">
      <h1 className="mx-auto">Versioning Tool</h1>
      <Router>
        <Route path="/versioning-tool/" component={VersioningTool} />
      </Router>
    </main>
  );
}

export default App;
