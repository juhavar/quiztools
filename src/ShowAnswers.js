import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'
import { green } from '@material-ui/core/colors';
function ShowAnswers(props, event) {

    if (props.checked===props.correctAnswer){
      
     }  
      return (<div>
        {props.answers.map((i, answerIndex) => 
        <div key={answerIndex}>
          <label className="checkbox">
            <Checkbox type="checkbox" checked={i.checked} disabled/>
            <span>{i.a}</span></label>
            <label className="checkboxRightAns" >
              <Checkbox type="checkbox" checked={i.correctAnswer}/><span>
                {i.a}</span></label></div>)}
        </div>
          
        );
        
    }
    
  
  export default ShowAnswers;