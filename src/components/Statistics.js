import React from "react";
import PropTypes from 'prop-types';


export default function Statistics(props) {
  return (
    <div>
      <p>Upvotes: {props.upvotes}</p>
      <p>Downvotes: {props.downvotes}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Total: {props.total}</p>
      <p>Positive feedback: {props.percentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
 upvotes: PropTypes.number,
 downvotes: PropTypes.number,
 neutral: PropTypes.number,
 total: PropTypes.number,
 percentage: PropTypes.number
}