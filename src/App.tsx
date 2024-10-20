import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './Register';
import Employees from './Employees';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
}

export default App;
