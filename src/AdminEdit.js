import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircle from '@material-ui/icons/AddCircle';

function EditAnswers(props) {

  return (<div>

    {props.answers.map((i, answerIndex) =>
      <div key={answerIndex}>

        <input type="checkbox"
         onChange={(e) => 
        { props.selectedCorrectAnswer(e, props.index, props.examIndex, answerIndex) }}
          selectedCorrectAnswer={i.correctAnswer} defaultValue={i.correctAnswer} />
        <input type="text" 
          onChange={(e) => 
          { props.answerChanged(e, props.index, props.examIndex, answerIndex) }}
          defaultValue={i.a}
        ></input>
        <DeleteIcon onClick={(e) => { props.deleteAnswer(e, props.examIndex, props.index, answerIndex)}}></DeleteIcon>
            
        </div>)
}
<div><AddCircle onClick={(e) => { props.addAnswer(props.examIndex, props.index) }}>+ vastausvaihtoehto</AddCircle></div>
    </div >
    
    );
    
    }
export default EditAnswers;