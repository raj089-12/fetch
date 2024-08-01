import React from 'react'
import{ Link } from'react-router-dom'
const Mealdb = () => {
  return (
    <div>
      <div id='paper'>
    <h1 className='text-center'>MealDB</h1>
    <div id='paper'>
    
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
  <img src='https://www.themealdb.com/images/logo-small.png' ></img>
  
    
    <form class="d-flex">
        <Link to='/'><button type="button"className="btn btn-danger" >HOME</button></Link>
       <Link to='/Apple'><h2>API</h2></Link>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    
    </form>
    
  </div>
</nav>
     
     </div> 
     </div>
     </div>
    
     
  )
}

export default Mealdb;