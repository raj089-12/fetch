import React from 'react'
const Footer = () => {
  return (
    <div>
           <div id='paper'>
          <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <p>© 2023 TheMealDB
                      Proudly built in the UK
                      <img src='https://www.themealdb.com/images/icons/flags/big/16/gb.png'>
                        </img></p>
            </div>
        <div className='col-3'> 
        <h1>social 
        <i class="fa-brands fa-facebook-f" id='pop'></i>
        <i class="fa-brands fa-twitter" id='pad'></i>
        <i class="fa-brands fa-discord" id='did'></i></h1>
        
        
        
       <img src='https://www.themealdb.com/images/logo-tcdb.png'></img>
       <img src='https://www.themealdb.com/images/logo-tadb.png'></img>
       <img src='https://www.themealdb.com/images/logo-tsdb.png'></img>
       </div>
        
            <div className='col-3'>
            <h4>About</h4><h4>Faq</h4><h4>Contact</h4> 
           </div>
           </div>
           </div>
           </div>
           </div>
        
            
        
        

    
  ) 
}


export default Footer;