import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState(''); // react hooks
    const handleUpClick = () => {
        // console.log("Uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
    }

    return (
        <> {/* this is fragment in react*/}
            <div className="mb-3">
                <label htmlFor="myBox" className="htmlForm-label">
                    <b>{props.text}</b>
                    <p style={{fontsize : '12px'}}>Your text will get analyzed here.</p>
                </label>
                <br />
                <br />
                <textarea className="htmlForm-control" value={text} id="myBox" rows={props.row + 5} onChange={handleOnChange} cols={150}></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container1 my-5">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters. </p>
                <p>{0.008 * text.split(" ").length} Minutes Read. </p>
            </div>
            <div className="container2 my-3">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    row: PropTypes.number
}

TextForm.defaultProps = {
    row: 10
}
