import PropTypes from 'prop-types';

import React from 'react'

export default function Notification(props) {
    return (
        <div>
            <p>{props.message} </p>
        </div>
    )
}
// static propTypes = {
//     message: PropTypes.string
//   }