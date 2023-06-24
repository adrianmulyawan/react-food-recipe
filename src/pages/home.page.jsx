import React from 'react';
import NavbarComponent from '../components/navbar.component';
import CarouselComponent from '../components/carousel.component';
import ListCategoryComponent from '../components/listCategory.component';
import MustTryRecipeComponent from '../components/mustTryRecipe.component';
import AreaRecipeComponent from '../components/areaRecipe.component';
import MessageUpdateComponent from '../components/messageUpdate.component';
import FooterComponent from '../components/footer.component';
import styles from '../styles/home.module.css';

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className={`container mt-3 ${styles.body}`}>
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
