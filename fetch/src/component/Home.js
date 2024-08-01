import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div id='paper'>
        <div className='container'>
            <div className='row'>
              <div className='col-sm-3'> 
        <img src='https://www.themealdb.com/images/meal-icon.png'id='green' ></img>
        </div>
        <div className='col-sm-6'>
         <h1>Welcome to TheMealDB</h1>
        <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
        <p>We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
        <button type="button"className="btn btn-info d-block mx-auto" ><h1 id='y'>pay<span id='z'>pal</span></h1></button>
        <h4>Click button above to upgrade free API to premium for $3
           Currently 76 supporter</h4>
           </div>
           <div className='col-sm-3'>
           <img src='https://www.themealdb.com/images/meal-icon.png' id='green'></img>
           
           </div>
           </div>
           <hr/>
           </div>
           <form className='text-center'>
            <input type='text' placeholder='search for a meal'></input>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>

           </form>
           <div className='text-center'>
           <img src='https://www.themealdb.com/images/icons/meal-icon6.png'></img>
           <span><b>Total Meals:295</b></span>
           <img src='https://www.themealdb.com/images/icons/meal-icon4.png'></img>
           <span><b>Total Ingredients: 574</b></span>
           <img src='https://www.themealdb.com/images/icons/image2.png'></img>
           <span><b>Images: 295</b></span>
           <hr/>
           </div>

           <h1>Latest Meals</h1>
           <div className='container'>
            <div className ='row'>
       <div className='col-sm-12 col-md-3 col-lg-3'>           
       <img src='https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg' id='tan'>
       </img> 
       <h1>Bread omelette</h1>
       </div>
       <div className='col-sm-12 col-md-3 col-lg-3'>
       <Link to="Fetching"><img src='https://www.themealdb.com/images/media/meals/va668f1683209318.jpg' id='tan'></img>
       <h1>Tortang Talong</h1></Link>

       </div>
       <div className='col-sm-12 col-md-3 col-lg-3'>
       <img src='https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg' id='tan'></img>
       <h4>Grilled eggplant with coconut milk</h4>
      
       </div>
       <div className='col-sm-12 col-md-3 col-lg-3'>
       <Link to="Axis"><img src='https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg' id='tan'></img>
       <h4>Eggplant adobo</h4></Link>
       </div>
       </div>
       </div>
       <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/c7lzrl1683208757.jpg'id='tan'></img>
            <h4>crispy eggpalnt</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg'id='tan'></img>
            <h4>beef asado</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg'id='tan'></img>
            <h4>beef calderata</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/4pqimk1683207418.jpg'id='tan'></img>
            <h4>Bistek</h4>
          </div>
        </div>
        <hr/>
        <h1>Popular Ingredients</h1>
       <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/ingredients/Chicken.png'id='tan'></img>
            <h4>Chicken</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/ingredients/Salmon.png'id='tan'></img>
            <h4>Salmon</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/ingredients/Beef.png'id='tan'></img>
            <h4>beef</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/ingredients/Pork.png'id='tan'></img>
            <h4>pork</h4>
          </div>
          <hr/>
        </div>
        <h1>Random Meals</h1>
       <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg'id='tan'></img>
            <h4>peanut buttercheesecake</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
           <img src='https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg'id='tan'>
           </img>
            <h4>Mince pies</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <Link to="Honey"><img src='https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg'id='tan'></img>
            <h4>Chivito uruguayo</h4></Link>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg'id='tan'></img>
            <h4>Chicken Basquaise</h4>
          </div>
          <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg'id='tan'></img>
            <h4>Steak Daine</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
          <Link to="Axios"><img src='https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg'id='tan'></img>
            <h4>Sushi</h4></Link>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg'id='tan'></img>
            <h4>Dundee cake</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg'id='tan'></img>
            <h4>Ratatouille</h4>
          </div>
          <hr/>
         </div>
         <h1>Random ingredients</h1>
         <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/ingredients/Fresh%20Thyme.png'id='tan'></img>
            <h4>Fresh thaime</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/ingredients/Garlic%20Clove.png'id='tan'></img>
            <h4>Garlic clove</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/ingredients/Mixed%20Peel.png'id='tan'></img>
            <h4>Mixed peel</h4>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='https://www.themealdb.com/images/ingredients/Smoked%20Haddock.png'id='tan'></img>
            <h4>Smoked Haddaock</h4>
          </div>
          <hr/>
        </div>
        <h1>Browse Country</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/gb.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/us.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/fr.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/ca.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/jm.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/nl.png'>
              </img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/eg.png'>
              </img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/cn.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/gr.png'>
              </img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/in.png'>
              </img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/ie.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/it.png'>
              </img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/jp.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/kn.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/my.png'></img>
            </div>
            <div className='col-1'>
              <img src='https://www.themealdb.com/images/icons/flags/big/64/mx.png'></img>
            </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/ma.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/hr.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/no.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/ru.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/ar.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/es.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/th.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/sa.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/vn.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/sy.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/tn.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/pl.png'></img>
           </div>
           <div className='col-1'>
            <img src='https://www.themealdb.com/images/icons/flags/big/64/ph.png'></img>
           </div>
           <h1>Browse by name</h1>
           <h4 id='jam'>A / B / C / D / E / F / G / H / I / J / K / L / M / N / O / P / Q / R / S / T / U / V / W / X / Y / Z</h4>
           </div>

          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>     
         
           
  
  )
}

export default Home