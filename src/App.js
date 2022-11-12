import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';


function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />



          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
