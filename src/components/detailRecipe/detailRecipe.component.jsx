import React from 'react';
// import { Player, ControlBar, BigPlayButton } from 'video-react';

const DetailRecipeComponent = (props) => {
  const dataRecipe = props.dataRecipe;
  console.info(dataRecipe, '=> ini kita berhasil dapat gaes');

  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://video-react.github.io/assets/video-react.css"
      /> */}

      <div className="row" style={{ marginTop: '24px' }}>
        <h4>Receipe Information</h4>
      </div>
      <div className="list-food-recipe" style={{ marginTop: '12px' }}>
        <div className="row d-flex justify-content-center align-items-start">
          <div className="col-sm-6 col-md-5 col-lg-5">
            <img src={ dataRecipe.strMealThumb } className="img-fluid img-thumbmail" alt="recipe-pict" style={{ borderRadius: '10px', width: '100%' }} />
          </div>
          <div className="col-sm-6 col-md-7 col-lg-7">
            <div className="card p-3">
              <h5 className="card-title mx-2 my-3">
                <b>{ dataRecipe.strMeal }</b> ({ dataRecipe.strArea })
              </h5>
              <p className='card-text mx-2'>
                Category: { dataRecipe.strCategory }
              </p>
              <p className='card-text mx-2'>Tags: { dataRecipe.strTags }</p>
              <p className='card-text mx-2'>
                Source Recipe: <a href={ dataRecipe.strSource } target='__blank' style={{ textDecoration: 'none', color: '#000' }}>Click Here...</a>
              </p>
              <p className='mx-2'>Ingredients:</p>
              <table className="table table-borderless mx-0">
                <tbody>
                  <tr>
                    {
                      dataRecipe.strIngredient1 ? ( <th>{dataRecipe.strIngredient1}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure1 ? ( <td>{dataRecipe.strMeasure1}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient2 ? ( <th>{dataRecipe.strIngredient2}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure2 ? ( <td>{dataRecipe.strMeasure2}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient3 ? ( <th>{dataRecipe.strIngredient3}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure3 ? ( <td>{dataRecipe.strMeasure3}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient4 ? ( <th>{dataRecipe.strIngredient4}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure4 ? ( <td>{dataRecipe.strMeasure4}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient5 ? ( <th>{dataRecipe.strIngredient5}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure5 ? ( <td>{dataRecipe.strMeasure5}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient6 ? ( <th>{dataRecipe.strIngredient6}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure6 ? ( <td>{dataRecipe.strMeasure6}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient7 ? ( <th>{dataRecipe.strIngredient7}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure7 ? ( <td>{dataRecipe.strMeasure7}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient8 ? ( <th>{dataRecipe.strIngredient8}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure8 ? ( <td>{dataRecipe.strMeasure8}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient9 ? ( <th>{dataRecipe.strIngredient9}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure9 ? ( <td>{dataRecipe.strMeasure9}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient10 ? ( <th>{dataRecipe.strIngredient10}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure10 ? ( <td>{dataRecipe.strMeasure10}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient11 ? ( <th>{dataRecipe.strIngredient11}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure11 ? ( <td>{dataRecipe.strMeasure11}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient12 ? ( <th>{dataRecipe.strIngredient12}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure12 ? ( <td>{dataRecipe.strMeasure12}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient13 ? ( <th>{dataRecipe.strIngredient13}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure13 ? ( <td>{dataRecipe.strMeasure13}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient14 ? ( <th>{dataRecipe.strIngredient14}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure14 ? ( <td>{dataRecipe.strMeasure14}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient15 ? ( <th>{dataRecipe.strIngredient15}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure15 ? ( <td>{dataRecipe.strMeasure15}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient16 ? ( <th>{dataRecipe.strIngredient16}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure16 ? ( <td>{dataRecipe.strMeasure16}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient17 ? ( <th>{dataRecipe.strIngredient17}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure17 ? ( <td>{dataRecipe.strMeasure17}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient18 ? ( <th>{dataRecipe.strIngredient18}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure18 ? ( <td>{dataRecipe.strMeasure18}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient19 ? ( <th>{dataRecipe.strIngredient19}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure19 ? ( <td>{dataRecipe.strMeasure19}</td> ) : ''
                    }
                  </tr>
                  <tr>
                    {
                      dataRecipe.strIngredient20 ? ( <th>{dataRecipe.strIngredient20}</th> ) : ''
                    }
                    {
                      dataRecipe.strMeasure20 ? ( <td>{dataRecipe.strMeasure20}</td> ) : ''
                    }
                  </tr>
                </tbody>
              </table>
              <p className="card-text mx-2">
                Instructions: { dataRecipe.strInstructions }
              </p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '24px' }}>
          <h4>Receipe Tutorial</h4>
        </div>
        <div className="row justify-content-center" style={{ marginTop: '12px' }}>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card p-2">
              <iframe
                src={ dataRecipe.strYoutube }
                frameBorder="0"
                allowFullScreen
                title='break'
                style={{ width: '100%', height: '40vh' }}
              ></iframe>
              {/* <Player
                playsInline
                poster="/assets/poster.png"
                src={ dataRecipe.strYoutube }
              /> */}
            </div>
          </div>
        </div>  
      </div>
    </>
  );
}

export default DetailRecipeComponent;
