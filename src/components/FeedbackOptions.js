import React from "react";
import { v4 } from "uuid";
import PropTypes from 'prop-types';

export default function FeedbackOptions(props) {
  return (
    <div>
      {props.options.map((elem) => (
        <button key={v4()}type="button" onClick={() => props.onVote(elem)}>
          {elem}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
 options: PropTypes.array.isRequired,
 onVote: PropTypes.func.isRequired
}
