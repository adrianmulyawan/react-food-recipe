import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarComponent from '../components/navbar.component';
import BreadcrumbComponent from '../components/detailRecipe/breadcrumb.component';
import axios from 'axios';
import DetailRecipeComponent from '../components/detailRecipe/detailRecipe.component';
import FooterComponent from '../components/footer.component';

const DetailRecipePage = () => {
  const [recipe, setRecipe] = useState({});
  
  const { idRecipe } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`);
      const data = response.data;
      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null);
      }
    };

    getRecipe();
  }, [idRecipe]);

  console.info(recipe, '-> dapat datanya');

  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        {
          !recipe ? (
            <h2 className='text-center' style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '10vh' }}>
              Sorry, Recipe Not Found...
            </h2>
          ) : (
            <>
              <BreadcrumbComponent nameRecipe={ recipe.strMeal } />
              <hr />
              <h2 className='text-start' style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Detail Recipe {recipe.strMeal}
              </h2>
              <DetailRecipeComponent dataRecipe={ recipe } />
            </>
          )
        }
      </div>
      <FooterComponent />
    </>
  );
}

export default DetailRecipePage;
