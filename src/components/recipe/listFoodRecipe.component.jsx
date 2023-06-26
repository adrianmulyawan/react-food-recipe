import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListFoodRecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const getFoodRecipes = async () => {
      if (query !== '') {
        console.info(query);
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = response.data;
        setRecipes(data.meals);
      } else {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=f');
        const data = response.data;
        setRecipes(data.meals);
      }
    };

    getFoodRecipes();
  }, [query]);

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
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search Receipt Food..." value={ query } onChange={ (e) => setQuery(e.target.value) } />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center" style={{ marginTop: '24px' }}>
          {
            recipes && recipes.map((recipe, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 py-2" key={ index += 1 }>
                  <div className="card" style={{ borderRadius: 10, cursor: 'pointer' }} onClick={ () => toDetailRecipe(recipe) }>
                    <img src={ recipe.strMealThumb } className="card-img-top" alt="recipe-banner" style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', cursor: 'pointer' }} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ cursor: 'pointer' }}>
                        { recipe.strMeal }
                      </h5>
                      <p className="card-text" style={{ cursor: 'pointer' }}>
                        Origin: { recipe.strArea }
                      </p>
                      <p className='card-text' style={{ marginTop: 0, cursor: 'pointer' }}>
                        Category: { recipe.strCategory }
                      </p>
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

export default ListFoodRecipeComponent;
