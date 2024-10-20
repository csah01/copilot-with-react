import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './Register';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
