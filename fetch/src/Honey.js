import React,{ useEffect, useState } from 'react'
import './App.css'
const Honey = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chivito')
          .then(response =>response.json())
          .then (data=>setData(data.meals))
          
    });
  return (
    <div>
     {               
        data.map((icon)=>(
                <>
                <div>
                  <div id='cap'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-sm-6'>
                 <h1>{icon.strMeal}</h1>
                 <img src={icon.strMealThumb}id='pot'/>
                 <h1>No Tags</h1>
          <img src='https://www.themealdb.com/images/icons/Arrow-Left.png'></img>
          <img src='https://www.themealdb.com/images/icons/Arrow-Right.png'></img>
                 </div>
                 <div className='col-sm-4'>
           <h1>Ingredients</h1>
   <img src='https://www.themealdb.com/images/ingredients/Beef%20Brisket.png'id='post'>
          </img>
          <h1>{icon.strMeasure1}{icon.strIngredient1}</h1>
  <img src='https://www.themealdb.com/images/ingredients/Tomato.png'id='post'/>
          <h1>{icon.strMeasure4}{icon.strIngredient4}</h1>
          <img src='https://www.themealdb.com/images/ingredients/Bacon.png'id='post'/>
          <h1>{icon.strIngredient7}{icon.strMeasure7}</h1>  
        <img src='https://www.themealdb.com/images/ingredients/Pepper.png'id='post'/>
           <h1>{icon.strMeasure10}{icon.strIngredient10}</h1>        
                 </div>
                 <div className='col-sm-2'>
      <img src='https://www.themealdb.com/images/ingredients/Bread.png'id='post'/>
           <h1>{icon.strMeasure2}{icon.strIngredient2}</h1> 
           <img src='https://www.themealdb.com/images/ingredients/Ham.png'id='post'/>
           <h1>{icon.strMeasure5}{icon.strIngredient5}</h1>
       <img src='https://www.themealdb.com/images/ingredients/Egg.png'id='post'/>
          <h1>{icon.strMeasure8}{icon.strIngredient8}</h1>    
                </div>
                <div className='col-sm-2'>
         <img src='https://www.themealdb.com/images/ingredients/Lettuce.png' id='post'/>
         <h1>{icon.strMeasure3}{icon.strIngredient3}</h1>
         <img src='https://www.themealdb.com/images/ingredients/Mozzarella.png'id='post'/>
           <h1>{icon.strMeasure6}{icon.strIngredient6}</h1>
           <img src='https://www.themealdb.com/images/ingredients/Onion.png'id='post'/>
           <h1>{icon.strMeasure9}{icon.strIngredient9}</h1>
                    </div>
                    <h1>Instructions</h1>
                    <h4>
                    Crush the meat so that it is finite and we put it on a griddle to brown.
           Put the eggs, bacon and ham to fry. 
          Cut the bread in half, put the beef brisket, the fried eggs, the bacon, the ham, the mozzarella, the tomato and the lettuce.
          Cover with the other half of the bread and serve.
                    </h4>
                </div>
                </div>
                </div>
                 </div>    
                    </>
                    
        ))}
        <h1>Browse by name</h1>
    <h4>A / B / C / D / E / F / G / H / I / J / K / L / M / N / O / P / Q / R / S / T / U / V / W / X / Y / Z</h4>
    </div>
  )
}

export default Honey;