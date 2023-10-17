import React from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    return (
        <div className="mb-3">
            <label htmlFor="myBox" className="htmlForm-label"><b>{props.text}</b></label>
            <br/>
            <br/>
            <textarea class="htmlForm-control" id="myBox" rows={props.row + 5} cols={150}></textarea>
        </div>
    )
}

TextForm.propTypes={
    row : PropTypes.number
}

TextForm.defaultProps={
    row : 10
}
