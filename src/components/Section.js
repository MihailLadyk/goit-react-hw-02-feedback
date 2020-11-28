import React from "react";

export default function Section(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.children}
     
    </div>
  );
}
// static propTypes = {
//   title: PropTypes.string
// }