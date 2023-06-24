import React from 'react';

const BreadcrumbComponent = (props) => {
  return (
    <>
      <div className="breadcrumb-recipe-component" style={{ paddingTop: '20px', paddingBottom: '0px' }}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/" style={{ textDecoration: 'none' }}>Home</a></li>
            <li className="breadcrumb-item"><a href="/recipe" style={{ textDecoration: 'none' }}>Recipe</a></li>
            <li className="breadcrumb-item active" aria-current="page">Category</li>
            <li className="breadcrumb-item active" aria-current="page">{ props.category }</li>
          </ol> 
        </nav>
      </div>
    </>
  );
}

export default BreadcrumbComponent;
