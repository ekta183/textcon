import React, {useState} from 'react'

export default function Textform(props) {
    const handleOnChange = (event) =>{
        console.log('on change');
        setText(event.target.value);
        
    }
    const handleUpClick = () =>{
        console.log('uppercase was clicked');
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("success","Converted to Uppercase")
    }
    const handleUpClick2 = () =>{
        console.log('lowercase was clicked');
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("success","Converted to Lowercase")
    }
    const handleUpClick3 = () =>{
      // console.log('lowercase was clicked');
      let newText="";
      setText(newText)
      props.showAlert("success","Text has been cleared")
  }
  const handleUpCopy = () =>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("success","Copied to Clipboard")
}
  const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("success","Extra Spaces has been removed")
}
    const[text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
    <h3>{props.heading}</h3>
   <div className="mb-3">
  <textarea className="form-control border border-dark" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0}className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0}className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1 my-1`} onClick={handleUpClick2}>Convert to Lowercase</button>
  <button disabled={text.length===0}className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1 my-1`} onClick={handleUpClick3}>Clear Text</button>
  <button disabled={text.length===0}className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1 my-1`} onClick={handleUpCopy}>Copy Text</button>
  <button disabled={text.length===0}className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h5>Text Summary</h5>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read </p>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h5>Preview</h5>
      <p>{text.length>0?text:"Enter something in Textbox to preview here."}</p>
    </div>
</>

  )
}
