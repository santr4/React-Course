import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here.'); // react hooks
    const handleUpClick = ()=>{
        // console.log("Uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <> {/* this is fragment in react*/}
        <div className="mb-3">
            <label htmlFor="myBox" className="htmlForm-label">
                <b>{props.text}</b>
                <p>Your text will get analyzed here.</p>
            </label>
            <br/>
            <br/>
            <textarea className="htmlForm-control" value = {text} id="myBox" rows={props.row + 5} onChange={handleOnChange} cols={150}></textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLowerClick}>LowerCase</button>
        </div>
        <div className="container1 my-5">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters. </p>
        </div>
        </>
    )
}

TextForm.propTypes={
    row : PropTypes.number
}

TextForm.defaultProps={
    row : 10
}
