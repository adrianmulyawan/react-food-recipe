import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListCategoryComponent = () => {
  const [recipeCategories, setRecipeCategories] = useState([]);

  useEffect(() => {
    const recipeCateogry = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = response.data;
      
      setRecipeCategories(data.categories);
    };

    recipeCateogry();
  }, []);

  console.info(recipeCategories, '=> list');

  return (
    <>
      <div className="recipe-category" style={{ marginTop: '48px' }}>
        <h2 className='text-center' style={{ color: 'red', fontSize: '1.75rem' }}>
          <b>Recipe Category</b>
        </h2>
        
        <div className="recipe-list" style={{ marginTop: '24px' }}>
          <div className="row d-flex justify-content-center">
            {
              recipeCategories && (
                recipeCategories.map((category) => {
                  return (
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-2 my-2" key={ category.idCategory }>
                      <div className="card border-0">
                        <img src={ category.strCategoryThumb } className="card-img-top" alt="category-thumbnail col-sm-none" style={{ width: '75%' }} />
                        <div className="card-body">
                          <h5 className="card-title">{ category.strCategory }</h5>
                        </div>
                      </div>
                    </div>
                  )
                })
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCategoryComponent;
