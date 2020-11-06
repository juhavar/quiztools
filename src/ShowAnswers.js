import React from 'react';

function ShowAnswers(props, event) {

    if (props.checked===props.correctAnswer){
      
     }  
      return (<div>
        {props.answers.map((i, answerIndex) => 
        <div  key={answerIndex}>
          <label className="checkbox">
            <input type="checkbox" checked={i.checked} disabled/>
            <span>{i.a}</span></label>
            <label className="checkboxRightAns" >
              <input type="checkbox" checked={i.correctAnswer}/><span>
                {i.a}</span></label></div>)}
        </div>
          
        );
        
    }
    
  
  export default ShowAnswers;