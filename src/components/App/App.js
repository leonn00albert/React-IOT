import logo from './logo.svg';
import './App.css';

import {Navbar} from '../Bootstrap/Components'
import {Container} from '../Bootstrap/Layout'
import {Dashboard} from '../Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />

    </div>
  );
}

export default App;
