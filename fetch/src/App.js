import React from 'react';

import Mealdb from './Mealdb'
  import Home from './component/Home';
  import Fetching from'./component/Fetching';
 import Honey from './Honey';
 import Footer from './Footer';

 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
 
 import  Axios from './Axios';
 import Axis from './Axis';
 import Apple from './Apple';



const App = () => {
  return (
    <div>
      
    
     
      <Router> 
      
      <Mealdb/> 
     
    <Routes> 
      <Route path='/'element={<Home/>}></Route>
      <Route path='/Fetching' element={<Fetching/>}></Route>
      <Route path='/Honey' element={<Honey/>}></Route>
      <Route path='/Axios' element={<Axios/>}></Route>
      <Route path='/Axis' element={<Axis/>}></Route>
      <Route path='/Apple' element={<Apple/>}></Route> 
    
     
      </Routes>
    </Router>
  
        <Footer/>  
       
      
   
  </div>
    
  )
}

export default App;


