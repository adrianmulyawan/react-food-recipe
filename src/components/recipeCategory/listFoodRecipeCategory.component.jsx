import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListFoodRecipeCategory = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getFoodRecipes = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.category}`);
        const data = response.data;
        setRecipes(data.meals);
    };

    getFoodRecipes();
  }, [props.category]);

  console.info(recipes, '=> resep');
  // console.info(query, '=> aku tulis');

  return (
    <>
      <div className="list-food-recipe" style={{ marginTop: '48px' }}>
        <div className="row d-flex justify-content-center">
          {
            recipes && recipes.map((recipe, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 py-2" key={ index += 1 }>
                  <div className="card" style={{ borderRadius: 10 }}>
                    <img src={ recipe.strMealThumb } className="card-img-top" alt="recipe-banner" style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                    <div className="card-body">
                      <h5 className="card-title">
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

export default ListFoodRecipeCategory;
