import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'

function Questions(props) {

  return (<div>
    {props.answers.map((i, answerIndex) =>
      <div key={answerIndex}>
        <label className="checkbox">
          <Checkbox /* type="checkbox" */ onChange={(e) => { props.selectedAnswer(e, props.index, props.examIndex, answerIndex) }}
            checked={i.checked} /><span>{i.a}</span></label></div>)}
  </div>

  );

}
export default Questions;