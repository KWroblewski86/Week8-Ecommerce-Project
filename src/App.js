import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import { Component } from 'react';
import Product from './component/Product';


// function App() {

export default class App extends Component {
  render (){
  return (
      
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<Product />} />
          </Routes>

        </div>
        </Router>
    
  );
}}

// export default App;
