import React from 'react';

const Food = (props) => {
    const { strMeal, strMealThumb, idMeal,strInstructions } = props.food
    return (
        <div className="container">
            <div className="card mb-3 p-4" style={{"max-width": "540px"}}>
                <div className="row g-0">
                    <div className=" my-auto col-md-4">
                        <img src={strMealThumb} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                            <h5 className="card-title">{idMeal}</h5>
                            <p className="card-text">{strInstructions.slice(0,100)}</p>
                            <button onClick={()=> props.handleAddToCArt(props.food)} className="btn btn-danger">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;