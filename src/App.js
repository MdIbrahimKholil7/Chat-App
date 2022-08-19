import './App.css';
import SignUp from './components/Share/SignUp';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
