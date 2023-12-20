import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/Navbar';
import AppRoutes from './Components/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;