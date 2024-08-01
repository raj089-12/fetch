import React,{useState,useEffect}from "react";
import axios from "axios";
import './App.css'
const Axis = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
         .get('https://www.themealdb.com/api/json/v1/1/search.php?s=Eggplant adobo')
         .then((response) => setData(response.data.meals));
    });
  return (
    <div>
        {data.map((plant)=>(
            <>
            <div>
            <div id="ant">
            <div className='container'> 
            <div className='row'>
             <div className="col-sm-6"> 
            <h1>{plant.strMeal}</h1>
          <img src={plant.strMealThumb} style={{width:'100%'}}/>
          <h1>No Tags</h1>
          <div>
          <img src='https://www.themealdb.com/images/icons/Arrow-Left.png' id="kite"></img>
          <img src='https://www.themealdb.com/images/icons/Arrow-Right.png' id="kite"></img>
          </div>
          </div>
          <div className='col-sm-3'>
            <h1>Ingredients</h1>
            <img src="https://www.themealdb.com/images/ingredients/Egg%20Plants.png" id="kite"/>
            <h1>{plant.strMeasure1}{plant.strIngredient1}</h1>  
            <img src="https://www.themealdb.com/images/ingredients/Pepper.png"id="kite"/>
            <h1>{plant.strMeasure4}{plant.strIngredient4}</h1> 
            <img src="https://www.themealdb.com/images/ingredients/Ground%20Pork.png"id="kite"/>
            <h1>{plant.strMeasure7}{plant.strIngredient7}</h1>
            <img src="https://www.themealdb.com/images/ingredients/Bay%20Leaf.png"id="kite"/>
            <h1>{plant.strMeasure10}{plant.strIngredient10}</h1>         
                </div>
                <div className="col-sm-3">
                   <img src="https://www.themealdb.com/images/ingredients/Sugar.png" id="kite"/>
                   <h1>{plant.strMeasure2}{plant.strIngredient2}</h1>
                   <img src="https://www.themealdb.com/images/ingredients/Garlic.png"id="kite"/>
                   <h1>{plant.strMeasure5}{plant.strIngredient5}</h1> 
                   <img src="https://www.themealdb.com/images/ingredients/Rice%20Vinegar.png"id="kite"/>
                   <h1>{plant.strMeasure8}{plant.strIngredient8}</h1>
                </div>
                <div className="col-lg-2">
        <img src="https://www.themealdb.com/images/ingredients/Salt.png" id="kite"/>
             <h1>{plant.strMeasure3}{plant.strIngredient3}</h1>
             <img src="https://www.themealdb.com/images/ingredients/Olive%20Oil.png"id="kite"/>
             <h1>{plant.strMeasure6}{plant.strIngredient6}</h1>
               <img src="https://www.themealdb.com/images/ingredients/Soy%20Sauce.png"id="kite"/>
               <h1>{plant.strMeasure9}{plant.strIngredient9}</h1>
                </div>
                <h1>Instructions</h1>
                <h4>
                1.
Slice 1 lb.
small Japanese or Italian eggplant (about 3) into quarters lengthwise, then cut crosswise into 2"-wide pieces.
Place in a medium bowl.
Add 1 Tbsp.
sugar, 1 tsp.
Diamond Crystal or ½ tsp.
Morton kosher salt, and ½ tsp.
freshly ground black pepper.
Toss to evenly coat eggplant and let sit at room temperature at least 20 minutes and up to 2 hours.
2.
Peel and thinly slice 8 garlic cloves.
Add 3 Tbsp.
vegetable oil and half of garlic to a medium Dutch oven or other heavy pot.
Cook over medium-high heat, stirring constantly with a wooden spoon, until light golden and crisp, about 5 minutes.
Using a slotted spoon, transfer garlic chips to a plate; season lightly with salt.
3.
Place 4 oz.
ground pork in same pot and break up into small pieces with wooden spoon.
Season with ¼ tsp.
Diamond Crystal or Morton kosher salt and cook, undisturbed, until deeply browned underneath, about 5 minutes.
Using a slotted spoon, transfer to another plate, leaving fat behind in the pot.
4.
Place eggplant on a clean kitchen towel and blot away any moisture the salt has drawn out.
5.
Working in batches and adding more oil if needed, cook eggplant in the same pot until lightly browned, about 3 minutes per side.
Transfer to a plate with pork.
6.
Pour 1½ cups of water into the pot and scrape up browned bits from the bottom with a wooden spoon.
Add remaining garlic, 3 Tbsp.
coconut vinegar or unseasoned rice vinegar, 2 Tbsp.
soy sauce, 2 bay leaves, 1 tsp.
freshly ground black pepper, and remaining 1 Tbsp.
sugar.
Bring to a simmer, then return pork and eggplant to pot.
Reduce heat to medium-low, partially cover, and simmer until eggplant is tender and silky and sauce is reduced by half, 20–25 minutes.
Taste and season with more salt and pepper and add a little more sugar if needed.
7.
Top with garlic chips and serve with cooked white rice.


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

export default Axis;