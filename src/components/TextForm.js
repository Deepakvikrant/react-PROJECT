import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("text converted to Uper case", 'success')
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("text converted to lower case", 'success')
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        props.showAlert("text area Clear", 'warning')
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        //var text = document.getElementById("myBox");
        // text.select();
        //document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert('text copied', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Spaces Removed','success')
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className='container my-3'>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
                <h1>{props.heading}</h1><p>{props.discription}</p>
                <div className="mb-3"> 
                <textarea className="form-control" placeholder='Write Text here' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#000000':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                {/* <p><strong>{text.split(" ").length-1}</strong> words and <b>{text.length}</b> characters</p> */}
                {/* <p><strong>{text.split(" ").filter((element)=>{return element.length!==0}).length}</strong> words and <b>{text.length-text.split(" ").length+1}</b> characters</p> */}
                <p><strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</strong> words and <b>{text.length-text.split(" ").length+1}</b> characters</p>
                <p><b>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing in Textbox to preview here"}</p>
            </div>
        </div>    
        </>
    )
}
