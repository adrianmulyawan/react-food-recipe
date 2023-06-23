import React from 'react';
import '../App.css';

const CarouselComponent = () => {
  return (
    <>
      <div className="row" style={{ marginTop: '40px' }}>
        <div
          id="carouselExampleInterval"
          className="carousel slide d-flex justify-content-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ borderRadius: '20px', width: '80%', height: '100%' }}>
            <div className="carousel-item active" data-bs-interval={10000}>
              <img src={process.env.PUBLIC_URL+"1.png"} className="d-block w-100" alt="carousel-1" />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src={process.env.PUBLIC_URL+"2.png"} className="d-block w-100" alt="carousel-2" />
            </div>
            <div className="carousel-item">
              <img src={process.env.PUBLIC_URL+"3.png"} className="d-block w-100" alt="carousel-3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselComponent;
