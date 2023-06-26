import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListFoodRecipeCountryComponent = (props) => {
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getFoodRecipes = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${props.country}`);
        const data = response.data;
        setRecipes(data.meals);
    };

    getFoodRecipes();
  }, [props.country]);

  console.info(recipes, '=> resep');
  // console.info(query, '=> aku tulis');

  const toDetailRecipe = (recipe) => {
    const getIdRecipe = recipe.idMeal;
    navigate(`/recipe/detail/${getIdRecipe}`);
  };

  return (
    <>
      <div className="list-food-recipe" style={{ marginTop: '48px' }}>
        <div className="row d-flex justify-content-center">
          {
            recipes && recipes.map((recipe, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 py-2" key={ index += 1 }>
                  <div className="card" style={{ borderRadius: 10, cursor: 'pointer' }} onClick={() => toDetailRecipe(recipe) }>
                    <img src={ recipe.strMealThumb } className="card-img-top" alt="recipe-banner" style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', cursor: 'pointer' }} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ cursor: 'pointer' }}>
                        { recipe.strMeal }
                      </h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {
            !recipes && (
              <h5 className='text-center text-danger' style={{ marginBottom: '35vh' }}>Sorry, Recipes Not Found...</h5>
            )
          }
        </div>
      </div>
    </>
  );
}

export default ListFoodRecipeCountryComponent;
