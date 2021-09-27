import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter the text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase!","success");
  };
  const HandleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase!","success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const HandleClearClick = () => {
    let newText =""
    setText(newText);
    props.showAlert("Cleared the Text!","success");

  };
  const CopyText=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text successfully copied to the clipboard","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra spaces Removed!","success");
    }
    

  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <div className="form-floating mb-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <div className="container">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className= 'btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={CopyText}>
          Copy Text
        </button>

        <div className="container  my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summery: </h1>
        {/* <p>Your text contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} {text.split(/\s+/).filter((element)=>{return element.length!==0}).length===1? 'word': 'words'} and {text.length} {text.length===1?"character":"characters"}</p> */}
        <p>Your text contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} {text.split(/\s+/).filter((element)=>{return element.length!==0}).length===1? 'word': 'words'}.</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read.</p>
        <h2>Preview:-</h2>
        <p>{text.length>1? text: 'Enter your text in the above textarea to preview it here.'}</p>
        </div>

      </div>
    </div>

    // ///

    
  );
}
