import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MustTryRecipeComponent = () => {
  const [recipeOne, setRecipeone] = useState({});
  const [recipeTwo, setRecipeTwo] = useState({});
  const [recipeThree, setRecipeThree] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getRecipeOne = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = response.data;
      
      setRecipeone(data.meals[0]);
    };

    const getRecipeTwo = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = response.data;
      
      setRecipeTwo(data.meals[0]);
    };

    const getRecipeThree = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = response.data;
      
      setRecipeThree(data.meals[0]);
    };

    getRecipeOne();
    getRecipeTwo();
    getRecipeThree();
  }, []);

  const toRecipe = () => {
    navigate('/recipe');
  }

  // console.info(recipeOne, '=> random resep');

  return (
    <>
      <div className="recipe-category" style={{ marginTop: '48px' }}>
        <h2 className='text-center' style={{ color: 'red', fontSize: '1.75rem' }}>
          <b>Recipe for You</b>
        </h2>
        
        <div className="recipe-list" style={{ marginTop: '24px' }}>
          <div className="row d-flex justify-content-center">
            {
              recipeOne && (
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 my-2">
                  <div className="card border-0" style={{ borderRadius: '15px' }}>
                    <img src={ recipeOne.strMealThumb } className="card-img-top img-thumbnail rounded mx-auto d-block" alt="receipt-img" />
                    <div className="card-body">
                      <h5 className="card-title">{ recipeOne.strMeal }</h5>
                      <p className="card-text">
                        Category: { recipeOne.strCategory }
                      </p>
                      <p className="card-text">
                        From: { recipeOne.strArea }
                      </p>
                    </div>
                  </div>
                </div>
              )
            }
            {
              recipeTwo && (
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 my-2">
                  <div className="card border-0" style={{ borderRadius: '15px' }}>
                    <img src={ recipeTwo.strMealThumb } className="card-img-top img-thumbnail rounded mx-auto d-block" alt="receipt-img" />
                    <div className="card-body">
                      <h5 className="card-title">{ recipeTwo.strMeal }</h5>
                      <p className="card-text">
                        Category: { recipeTwo.strCategory }
                      </p>
                      <p className="card-text">
                        From: { recipeTwo.strArea }
                      </p>
                    </div>
                  </div>
                </div>
              )
            }
            {
              recipeThree && (
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 my-2">
                  <div className="card border-0" style={{ borderRadius: '15px' }}>
                    <img src={ recipeThree.strMealThumb } className="card-img-top img-thumbnail rounded mx-auto d-block" alt="receipt-img" />
                    <div className="card-body">
                      <h5 className="card-title">{ recipeThree.strMeal }</h5>
                      <p className="card-text">
                        Category: { recipeThree.strCategory }
                      </p>
                      <p className="card-text">
                        From: { recipeThree.strArea }
                      </p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>

        <div className="recipe-more" style={{ marginTop: '8px' }}>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button onClick={ toRecipe } class="btn btn-lg btn-primary text-center px-3 py-2 border-0" style={{ backgroundColor: 'red', borderRadius: '15px' }}>
              <b>See More Recipe</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MustTryRecipeComponent;
