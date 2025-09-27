import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import AdForm from './Pages/AdForm/AdForm';
import TestData from './Pages/TestData';
import SeedProducts from './SeedProducts';

function App() {

  return (
    <div>
      <ToastContainer theme='dark' />
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/sell' element={ <AdForm />} />
          <Route path="/test" element={<TestData/>} />
          <Route path="/seed" element={<SeedProducts />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App