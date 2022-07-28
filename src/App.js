import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './components/Protected';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Protected Cmp={Login} />}/>
          <Route path="/register" element={<Protected Cmp={Register} />}/>
          <Route path="/dashboard" element={<Protected Cmp={Dashboard} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
