import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'

function EditAnswers(props){

    return (<div>
        {console.log(props.selectedCorrectAnswer)}
      {props.answers.map((i, answerIndex) =>
        <div key={answerIndex}>
          
            <input type="checkbox" onChange={(e) =>
              { props.selectedCorrectAnswer(e, props.index, props.examIndex, answerIndex) }}
                 selectedCorrectAnswer={i.correctAnswer} defaultValue={i.correctAnswer}/>
            <input type="text" onChange={(e) => 
                {props.answerChanged(e, props.index, props.examIndex, answerIndex)}}
                 defaultValue={i.a}
                     ></input>
            
                      </div>)}
                      <div><button onClick={(e) => 
                { props.addAnswer(props.examIndex, props.index)}}>+ vastausvaihtoehto</button></div>
    </div>
    
    );
    
    }
    export default EditAnswers;