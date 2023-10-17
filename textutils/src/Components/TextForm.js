import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here.'); // react hooks
    const handleUpClick = ()=>{
        console.log("Uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log('On Change');
        setText(event.target.value);
    }

    return (
        <div className="mb-3">
            <label htmlFor="myBox" className="htmlForm-label">
                <b>{props.text}</b>
                <p>Your text will get analyzed here.</p>
            </label>
            <br/>
            <br/>
            <textarea className="htmlForm-control" value = {text} id="myBox" rows={props.row + 5} onChange={handleOnChange} cols={150}></textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}

TextForm.propTypes={
    row : PropTypes.number
}

TextForm.defaultProps={
    row : 10
}
