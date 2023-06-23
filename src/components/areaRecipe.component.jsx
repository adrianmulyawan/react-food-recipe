import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AreaRecipeComponent = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const recipeArea = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const data = response.data;
      
      setAreas(data.meals);
    };

    recipeArea();
  }, []);

  console.info(areas, '=> area');

  return (
    <>
      <div className="recipe-category" style={{ marginTop: '48px' }}>
        <h2 className='text-center' style={{ color: 'red', fontSize: '1.75rem' }}>
          <b>Recipes by Country</b>
        </h2>
        
        <div className="recipe-list" style={{ marginTop: '24px' }}>
          <div className="row d-flex justify-content-center">
            {
              areas && (
                areas.map((area, index) => {
                  return (
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 my-2" key={ index }>
                      <div className="card border-0" style={{ backgroundColor: '#02A057', color: 'white' }}>
                        <div className="card-body">
                          <h5 className="card-title">
                            { area.strArea }
                          </h5>
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

export default AreaRecipeComponent;
