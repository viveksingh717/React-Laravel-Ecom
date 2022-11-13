import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom";

import carousel1 from '../Assets/Master_Assets/images/craousal/carousel4.jpg';

function Home() {
  return (
    <div>
        <div className='row-12 mb-4'>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={carousel1} alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
              <h5 className='text-danger'>Vivek Singh</h5>
              <p>Hello good morning</p>
            </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={carousel1} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
              <h5 className='text-danger'>Vivek Singh</h5>
              <p>Hello good morning</p>
            </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={carousel1} alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block">
              <h5 className='text-danger'>Vivek Singh</h5>
              <p>Hello good morning</p>
            </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Home;
