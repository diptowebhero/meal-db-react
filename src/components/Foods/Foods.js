import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const[cart,setCart] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(response => response.json())
            .then(data => setFoods(data.meals))
    }, [])
    const handleAddToCArt=(name)=>{
        const newCart = [...cart, name];
        setCart(newCart);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    {foods.map(food => <Food key ={food.strMeal} handleAddToCArt={handleAddToCArt} food={food}></Food>)}
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Foods;