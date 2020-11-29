import React from "react";
import PropTypes from 'prop-types';

export default function Section(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.children}
     
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired
}