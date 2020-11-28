import React from "react";

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
//  static propTypes = {
//  upvotes: PropTypes.number,
//  downvotes: PropTypes.number,
//  neutral: PropTypes.number,
//  total: PropTypes.number,
//  percentage: PropTypes.number
// }