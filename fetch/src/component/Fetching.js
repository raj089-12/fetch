import React, { useEffect, useState } from "react";
import "../App.css";
const Fetching = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Tortang")
      .then((response) => response.json())
      .then((data) => setData(data.meals));
  });
  return (
    <div>
      {data.map((item) => (
        <>
          <div>
            <div id="lamp">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1>{item.strMeal}</h1>
                    <img
                      src={item.strMealThumb}
                      id="happy"
                      width={'500px'} height={'500px'}
                    />
                    <h1>No Tags</h1>
                    <img src="https://www.themealdb.com/images/icons/Arrow-Left.png" id="mob"></img>
                    <img src="https://www.themealdb.com/images/icons/Arrow-Right.png"></img>
                  </div>
                  <div className="col-sm-2">
                    <h2>Ingredients</h2>
                    <img
                      src="https://www.themealdb.com/images/ingredients/Egg%20Plants.png"
                      id="lol"
                    ></img>
                    <h1>{item.strIngredient1}</h1>
                    <h1>{item.strMeasure1}</h1>
                    <img
                      src="https://www.themealdb.com/images/ingredients/Olive%20Oil.png"
                      id="lol"
                    ></img>
                    <h1>{item.strIngredient4}</h1>
                    <h1>{item.strMeasure4}</h1>
                  </div>
                  <div className="col-sm-2">
                    <img
                      src="https://www.themealdb.com/images/ingredients/Eggs.png"
                      id="lol"
                    ></img>
                    <h1>{item.strIngredient2}</h1>
                    <h1>{item.strMeasure2}</h1>
                  </div>
                  <div className="col-sm-2">
                    <img
                      src="https://www.themealdb.com/images/ingredients/Salt.png"
                      id="lol"
                    ></img>
                    <h1>{item.strIngredient3}</h1>
                    <h1>{item.strMeasure3}</h1>
                  </div>
                  <h1>Instructions</h1>
                  <h4>
                    0. Grill the eggplant until the color of skin turns almost
                    black 1. Let the eggplant cool for a while then peel off the
                    skin. Set aside. 2. Crack the eggs and place in a bowl 3.
                    Add salt and beat 4. Place the eggplant on a flat surface
                    and flatten using a fork. 5. Dip the flattened eggplant in
                    the beaten egg mixture 6. Heat the pan and pour the cooking
                    oil 7. Fry the eggplant (that was dipped in the beaten
                    mixture). Make sure that both sides are cooked. Frying time
                    will take you about 3 to 4 minutes per side on medium heat.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <h1>Browse by name</h1>
      <h4>
        A / B / C / D / E / F / G / H / I / J / K / L / M / N / O / P / Q / R /
        S / T / U / V / W / X / Y / Z
      </h4>
    </div>
  );
};

export default Fetching;
