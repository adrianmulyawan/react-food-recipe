import React from 'react';
import NavbarComponent from '../components/navbar.component';
import BreadcrumbComponent from '../components/recipe/breadcrumb.component';
import FooterComponent from '../components/footer.component';
import ListFoodRecipeComponent from '../components/recipe/listFoodRecipe.component';

const RecipePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <BreadcrumbComponent />
        <h2 className='text-center' style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Food Recipe
        </h2>
        <p className='text-center mx-4' style={{ color: 'red', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0rem', lineHeight: '1.5' }}>
          This is the place for all delicious recipes! Masak Apa has prepared a variety of fun, home-style dishes, perfect for everyday cooking.
        </p>

        <ListFoodRecipeComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default RecipePage;
