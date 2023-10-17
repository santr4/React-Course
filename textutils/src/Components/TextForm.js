import React from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    return (
        <div className="mb-3">
            <label htmlFor="myBox" className="htmlForm-label">Example textarea</label>
            <br/>
            <br/>
            <textarea class="htmlForm-control" id="myBox" rows={props.row} columns={props.col}></textarea>
        </div>
    )
}

TextForm.propTypes={
    row : PropTypes.number,
    col : PropTypes.number
}

TextForm.defaultProps={
    row : 10,
    col : 10
}
