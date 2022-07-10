import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("HandleUpcase was clicked");
    setText('you have click on handle uper case')
  }

  const handleOnChange = ()=>{
    console.log("HandleOnChange was clicked");
  }
  const [text,setText] = useState('Enter Text Here')
  //text = "New Text" ; //wrong way to chnage state of hook function
  //setText('new text'); //correct way to chnage state of hook function
  return (
    <div>
        <form>
          <h2>{props.heading}</h2>
          <div className="form-group">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert To Upercase</button>
        </form>
    </div>
  )
}
