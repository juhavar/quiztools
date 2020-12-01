import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircle from '@material-ui/icons/AddCircle';
import div from '@material-ui/core/Card'

function EditAnswers(props) {

  return (<div>

    {props.answers.map((i, answerIndex) =>
      <div key={answerIndex}>

        <Checkbox type="checkbox"
         onChange={(e) => 
        { props.selectedCorrectAnswer(e, props.index, props.examIndex, answerIndex) }}
          selectedCorrectAnswer={i.correctAnswer} defaultValue={i.correctAnswer} />
        <Checkbox type="text" 
          onChange={(e) => 
          { props.answerChanged(e, props.index, props.examIndex, answerIndex) }}
          defaultValue={i.a}
        ></Checkbox>
        <DeleteIcon onClick={(e) => { props.deleteAnswer(e, props.examIndex, props.index, answerIndex)}}></DeleteIcon>
            
        </div>)
}
<div><AddCircle onClick={(e) => { props.addAnswer(props.examIndex, props.index) }}></AddCircle></div>
    </div >
    
    );
    
    }
export default EditAnswers;