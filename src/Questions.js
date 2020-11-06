import React from 'react';

function Questions(props){

    return (<div>
      {props.answers.map((i, answerIndex) =>
        <div key={answerIndex}>
          <label className="checkbox">
            <input type="checkbox" onChange={(e) =>
              { props.selectedAnswer(e, props.index, props.examIndex, answerIndex) }}
                 checked={i.checked} /><span>{i.a}</span></label></div>)}
    </div>
    
    );
    
    }
    export default Questions;