import React from 'react';
import { useParams } from 'react-router-dom';
import FooterComponent from '../components/footer.component';
import BreadcrumbComponent from '../components/recipeCountry/breadcrumb.component';
import NavbarComponent from '../components/navbar.component';
import ListFoodRecipeCountryComponent from '../components/recipeCountry/listFoodRecipeCountry.component';

const RecipeCountryPage = () => {
  const { countryName } = useParams();
  const upperCaseCountryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
  
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <BreadcrumbComponent country={ upperCaseCountryName } />
        <h2 className='text-center' style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Food Recipe from { upperCaseCountryName }
        </h2>
        <p className='text-center mx-4' style={{ color: 'red', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0rem', lineHeight: '1.5' }}>
          This is a collection for all delicious recipes from { upperCaseCountryName }! Masak Apa has prepared a variety of fun home-style dishes, perfect for everyday cooking.
        </p>

        <ListFoodRecipeCountryComponent country={ upperCaseCountryName } />
      </div>
      <FooterComponent />
    </>
  );
}

export default RecipeCountryPage;
