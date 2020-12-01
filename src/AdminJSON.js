import React from 'react';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircle from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button'
import div from '@material-ui/core/Card'


function AdminEdit(props) {
  let dataCopy = JSON.parse(JSON.stringify(props))
  console.log(dataCopy)
  return (
    
    <div>
    
     <div className="admin">
     
      {dataCopy[props.examIndex].map((exam, index) =>
        <Button key={index}
          onClick={() => props.selectExam(index)}>
          {exam.exam}</Button>)}

      <div className="questions">

        {props.data[props.selectedExamNumber].questions.map((question, qIndex) =>
          <div key={qIndex} className="Card">
            <div className="Question" >

              <input type="text"
                defaultValue={question.q}
                onChange={(e) => props.questionChanged(e, props.selectedExamNumber, qIndex)}></input>
              <DeleteIcon onClick={(e) => props.deleteQuestion(e, props.selectedExamNumber, qIndex)}></DeleteIcon>
            </div>
            {props.question.answers ?
              props.question.answers.map((i, answerIndex) =>
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
           : ""}
            <AddCircle onClick={() => props.addQuestion(props.selectedExamNumber)}></AddCircle>
          </div>

        )

        }
        <div><button onClick={() => props.addExam()}>+ tentti</button></div>

      </div>

    </div>



    {props.answers.map((i, answerIndex) =>
      <div key={answerIndex}>

        <Checkbox type="checkbox"
          onChange={(e) => { props.selectedCorrectAnswer(e, props.index, props.examIndex, answerIndex) }}
          selectedCorrectAnswer={i.correctAnswer} defaultValue={i.correctAnswer} />
        <Checkbox type="text"
          onChange={(e) => { props.answerChanged(e, props.index, props.examIndex, answerIndex) }}
          defaultValue={i.a}
        ></Checkbox>
        <DeleteIcon onClick={(e) => { props.deleteAnswer(e, props.examIndex, props.index, answerIndex) }}></DeleteIcon>

      </div>)
    }
    <div><AddCircle onClick={(e) => { props.addAnswer(props.examIndex, props.index) }}></AddCircle></div>
  </div >

  );

}
export default AdminEdit;