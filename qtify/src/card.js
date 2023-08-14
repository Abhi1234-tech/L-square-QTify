import React from "react";
import "./card.css"

function Card(){
    return(
    <div className="main">
       
        
        <div className="card" >
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-idXbli1_F_L1Ii7KtVZ75aThzgt2UsiNXA&usqp=CAU" className="card-img-top" alt="..." />
         <div className="card-body">
            <button className="btn btn-primary">
            # Follows
           </button>
         </div>  
         </div>
        <div className="card-text">
         <p>   
         New Bollywood
        </p>
    </div>
    
 


   
   
  </div>

    );
}

export {Card};