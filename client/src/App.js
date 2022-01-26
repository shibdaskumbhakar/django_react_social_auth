import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from './Component/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
