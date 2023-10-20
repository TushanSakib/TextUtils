import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("")
    // making text upper case
    const handleUpClick=()=>{
        let newText = text.toLocaleUpperCase()
        setText(newText)
    }
    // making text lower case
    const handleLowClick=()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    // making the text box clear
    const handleClearClick=()=>{
      let newText = "";
      setText(newText)
    }
    // copying the text
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      
      {/*var text= document.getElementById("myBox")
      text.select()
      text.setSelectionRange(0,9999)
      navigator.clipboard.writeText(text.value)*/}
    }
    // removing extra spaces
    const handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }
    // writing the text 
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'white',color: props.mode==='dark'?'black':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Extra spaces remove</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
