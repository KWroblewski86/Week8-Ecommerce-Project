import React from 'react';
import Products from './Products'

export default function Home() {


  return (

      <div className="hero">
          <div className="card bg-dark text-white border-0">
              <img src="src/images/bg2.jpg" className="card-img" alt="Background"/>
                  <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                      <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                  </div>
          </div>
          <Products />
      </div>
  )
}