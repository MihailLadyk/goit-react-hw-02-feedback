import React from "react";
import { v4 } from "uuid";

export default function VoteOptions(props) {
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
// static propTypes = {
//  options: PropTypes.array,
//  onVote: PropTypes.func
// }
