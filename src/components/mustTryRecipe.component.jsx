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

  const toDetailRecipe = (recipe) => {
    // console.info(recipe, '=> recipe id');
    const getIdRecipe = recipe.idMeal;
    // console.info(getIdRecipe, '=> idnya');
    navigate(`/recipe/detail/${getIdRecipe}`);
  };

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
                  <div className="card border-0" style={{ borderRadius: '15px', cursor: 'pointer' }} onClick={ () => toDetailRecipe(recipeOne) }>
                    <img src={ recipeOne.strMealThumb } style={{ cursor: 'pointer' }} className="card-img-top img-thumbnail rounded mx-auto d-block" alt="receipt-img" />
                    <div className="card-body">
                      <h5 className="card-title" style={{ cursor: 'pointer' }}>{ recipeOne.strMeal }</h5>
                    </div>
                  </div>
                </div>
              )
            }
            {
              recipeTwo && (
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 my-2">
                  <div className="card border-0" style={{ borderRadius: '15px', cursor: 'pointer' }} onClick={ () => toDetailRecipe(recipeTwo) }>
                    <img src={ recipeTwo.strMealThumb } style={{ cursor: 'pointer' }} className="card-img-top img-thumbnail rounded mx-auto d-block" alt="receipt-img" />
                    <div className="card-body">
                      <h5 className="card-title" style={{ cursor: 'pointer' }}>{ recipeTwo.strMeal }</h5>
                    </div>
                  </div>
                </div>
              )
            }
            {
              recipeThree && (
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 my-2">
                  <div className="card border-0" style={{ borderRadius: '15px', cursor: 'pointer' }} onClick={ () => toDetailRecipe(recipeThree) }>
                    <img src={ recipeThree.strMealThumb } style={{ cursor: 'pointer' }} className="card-img-top img-thumbnail rounded mx-auto d-block" alt="receipt-img" />
                    <div className="card-body">
                      <h5 className="card-title" style={{ cursor: 'pointer' }}>{ recipeThree.strMeal }</h5>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>

        <div className="recipe-more" style={{ marginTop: '8px' }}>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={ toRecipe } className="btn btn-lg btn-primary text-center px-3 py-2 border-0" style={{ backgroundColor: 'red', borderRadius: '15px' }}>
              <b>See More Recipe</b>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MustTryRecipeComponent;
