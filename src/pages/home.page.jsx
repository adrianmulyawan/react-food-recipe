import React from 'react';
import NavbarComponent from '../components/navbar.component';
import CarouselComponent from '../components/carousel.component';

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <CarouselComponent />
      </div>
    </>
  );
}

export default HomePage;
