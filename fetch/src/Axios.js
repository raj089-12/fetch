
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

const Axios = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
         .get('https://www.themealdb.com/api/json/v1/1/search.php?s=sushi')
         .then((response) => setData(response.data.meals));
    });
  return (
    <div>
        

       {data.map((item)=>(
            <>
            <div>
            <div id="ant">
            <div className='container'> 
            <div className='row'>
                <div className="col-sm-6">
          <h1>{item.strMeal}</h1>
          <img src={item.strMealThumb} style={{width:'100%'}}/> 
          <h1>No Tags</h1>
          <div>
          <img src='https://www.themealdb.com/images/icons/Arrow-Left.png' id="kite"></img>
          <img src='https://www.themealdb.com/images/icons/Arrow-Right.png' id="kite"></img>
           </div></div>
          <div className='col-lg-3'>
        <h2>Ingredients</h2>
        <img src='https://www.themealdb.com/images/ingredients/Sushi%20Rice.png' id="hat"></img>
        <h1>{item.strIngredient1}</h1>
          <h1>{item.strMeasure1}</h1>
          <img src="https://www.themealdb.com/images/ingredients/Mayonnaise.png" id="hat"></img>
          <h1>{item.strIngredient4}</h1>
          <h1>{item.strMeasure4}</h1>
          <img src="https://www.themealdb.com/images/ingredients/Cucumber.png" id="hat"></img>
         <h1>{item.strIngredient7}</h1>
      <h1>{item.strMeasure7}</h1>
        </div> 
        <div className="col-lg-2">
          <img src="https://www.themealdb.com/images/ingredients/Rice%20wine.png" id="hat"></img>
          <h1>{item.strIngredient2}</h1>
          <h1>{item.strMeasure2}</h1>
          <img src="https://www.themealdb.com/images/ingredients/Rice%20wine.png" id="hat"></img>
           <h1>{item.strIngredient5}</h1>
           <h1>{item.strMeasure5}</h1>        
       </div>
       <div className="col-lg-3">
       <img src="https://www.themealdb.com/images/ingredients/Caster%20Sugar.png"id="hat"></img>
       <h1>{item.strIngredient3}</h1>
       <h1>{item.strMeasure3}</h1>
       <img src="https://www.themealdb.com/images/ingredients/Soy%20Sauce.png"id="hat"></img>
           <h1>{item.strIngredient6}</h1>
           <h1>{item.strMeasure6}</h1>
       </div>
       <h1>Instructions</h1>
       <h4>
       STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.
Lay a nori sheet on the mat, shiny-side down.
Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.
STEP 2 Spread over some Japanese mayonnaise.
Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.
STEP 3 Add the filling.
Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber.
STEP 4 Roll it up.
Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.
STEP 5 Stick down the sides like a stamp.
When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.
STEP 6 Wrap in cling film.
Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.
STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.
Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.
STEP 8 Cover with rice and press down.
Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.
STEP 9 Tip it out like a sandcastle.
Turn block of sushi onto a chopping board.
Get a grown-up to cut into fingers, then remove the cling film.
STEP 10 TO MAKE SUSHI BALLS: Choose your topping.
Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it.
Use damp hands to roll walnut-sized balls of rice and place on the topping.
STEP 11 Make into tight balls.
Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.
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

export default Axios;