import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Header } from './components/Header';
import { AppRouter } from './components/AppRouter';

const App:React.FC = () => {
  return (
    <Router>
      <Header/>
      <AppRouter />
    </Router>
  );
}

export default App;
