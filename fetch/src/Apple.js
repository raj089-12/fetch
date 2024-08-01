import React from 'react'
 import './App.css'
export default function() {
  return (
    <div>
      <div id='paper'>
    <h5 className='text-center'>
        <img src='https://www.themealdb.com/images/icons/thumb_up.gif'></img>
        <span>Support</span>
    <p className='text-center'>The API and site will always remain free at point of access. If you love our service and want extra features you can sign up as a Paypal supporter
You can cancel anytime. This allows us to pay for the servers and bandwidth and develop new features.
</p></h5>
<h5 className='text-center'>
        <img src='https://www.themealdb.com/images/icons/api.png'></img>
        <span>Test API Keys</span>
        <h5 className=' text-center'>You can use the test API key "1" during development of your app or for educational use(see test links below)
However you must become a supporter if releasing publicly on an appstore.
The test key may be revoked at any time if abused</h5></h5>
        
<h5 className='text-center'>
        <img src='https://www.themealdb.com/images/icons/up_arrow.png'></img>
        <span>API Production Key Upgrade</span>
        <p className=' grey text-center'>All supporters have access to the beta version of the API which allows mutiple ingredient filters.
You also get access to adding your own meals and images. You can also list the full database rather than limited to 100 items.
Please sign up on Paypal and we will email you the upgrade.
</p></h5>
    <h5 className='text-center'>
       <img src='https://www.themealdb.com/images/icons/email.png'></img>
       <span>Contact</span>
       <p className='text-center'>Email: thedatadb@gmail.com (please state if you are a Paypal Supporter)
       </p> </h5>
       <h5 className='text-center'>
       <img src='https://www.themealdb.com/images/icons/code.png'></img>
       <span>API Methods using the developer test key '1' as the API key</span></h5>
        <h5 className='text-center'>
         <span>Search meal by name</span>
         <p>www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</p></h5>  
         <h5 className='text-center'>
            <span>List all meals by first letter</span>
            <p>www.themealdb.com/api/json/v1/1/search.php?f=a</p></h5>
            <h5 className='text-center'>
            <span>Lookup full meal details by id</span>
            <p>www.themealdb.com/api/json/v1/1/lookup.php?i=52772</p></h5>
            <h5 className='text-center'>
            <span>Lookup a single random meal</span>
            <p>www.themealdb.com/api/json/v1/1/random.php</p></h5>
            <h5 className='text-center'>
              <span>Lookup a selection of 10 random meals (only available to Paypal supporters)
              </span>
              <p>www.themealdb.com/api/json/v1/1/latest.php</p>
            </h5>
            <h5 className='text-center'>
              <span>List all Categories, Area, Ingredients</span>
              <p>www.themealdb.com/api/json/v1/1/list.php?c=list</p>
               <p>www.themealdb.com/api/json/v1/1/list.php?a=list</p>
                <p>www.themealdb.com/api/json/v1/1/list.php?i=list</p>  
            </h5>
            <h5 className='text-center'>
              <span>Filter by main ingredient</span>
            <p>www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast</p>
            </h5>
            <h5 className='text-center'>
              <span>Filter by multi-ingredient (only available to Paypal supporters)</span>
               <p>www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt</p>
            </h5>
            <h5 className='text-center'>
              <span>Filter by Category</span>
                <p>www.themealdb.com/api/json/v1/1/filter.php?c=Seafood</p></h5>
                <h5 className='text-center'>
                <span>Filter by Area</span>
               <p>www.themealdb.com/api/json/v1/1/filter.php?a=Canadian</p>
            </h5>
            <h5 className='text-center'>
              <img src='https://www.themealdb.com/images/icons/image2.png'></img>
              <span>Images</span>
             <p>Meal Thumbnail Images
            Add /preview to the end of the meal image URL</p>
            <p>/images/media/meals/llcbn01574260722.jpg/preview</p>
            </h5>
            <h5 className='text-center'>
              <span>Ingredient Thumbnail Images</span>
               <p>www.themealdb.com/images/ingredients/Lime.png</p>
               <p>www.themealdb.com/images/ingredients/Lime-Small.png</p>
            </h5>
            
        </div>
        </div>
  )
}
