import React from 'react';
import NavbarComponent from '../components/navbar.component';
import CarouselComponent from '../components/carousel.component';
import ListCategoryComponent from '../components/listCategory.component';
import MustTryRecipeComponent from '../components/mustTryRecipe.component';
import AreaRecipeComponent from '../components/areaRecipe.component';
import MessageUpdateComponent from '../components/messageUpdate.component';
import FooterComponent from '../components/footer.component';

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <CarouselComponent />
        <ListCategoryComponent />
        <MustTryRecipeComponent />
        <AreaRecipeComponent />
        <MessageUpdateComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default HomePage;
