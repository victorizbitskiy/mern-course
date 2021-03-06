import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css'
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(false)
  return (
    <Router>
      <div className="container">
        <h1>{routes}</h1>
      </div>
    </Router>
  );
}

export default App
