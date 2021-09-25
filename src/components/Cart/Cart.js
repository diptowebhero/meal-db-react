import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    return (
        <div>
            <h4><i class="fas fa-shopping-cart"></i> {props.cart.length}</h4>
            <div>
                <h4>Selected Items : </h4>
                {cart.map(pd =>
                        <div className='card p-2 w-50 my-2'>
                            <div className="">
                                <img src={pd.strMealThumb} class="img-fluid rounded-start" alt="..." />
                                <div>
                                    <p>{pd.idMeal}</p>
                                    <p>{pd.strMeal}</p>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        </div>
    );
};

export default Cart;