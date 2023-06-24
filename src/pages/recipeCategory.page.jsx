import React from 'react';
import NavbarComponent from '../components/navbar.component';
import { useParams } from 'react-router-dom';
import BreadcrumbComponent from '../components/recipeCategory/breadcrumb.component';
import ListFoodRecipeCategory from '../components/recipeCategory/listFoodRecipeCategory.component';
import FooterComponent from '../components/footer.component';

const RecipeCategoryPage = () => {
  const { categoryName } = useParams();
  const upperCaseCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <BreadcrumbComponent category={ upperCaseCategoryName } />
        <h2 className='text-center' style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Food Recipe for { upperCaseCategoryName }
        </h2>
        <p className='text-center mx-4' style={{ color: 'red', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0rem', lineHeight: '1.5' }}>
          This is a collection for { upperCaseCategoryName }! Masak Apa has prepared a variety of fun home-style dishes, perfect for everyday cooking.
        </p>
        <ListFoodRecipeCategory category={ upperCaseCategoryName } />
      </div>
      <FooterComponent />
    </>
  );
}

export default RecipeCategoryPage;
