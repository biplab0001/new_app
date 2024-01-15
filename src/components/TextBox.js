import React, {useState} from 'react'


export default function TextBox(props) {

    const upperCase= () =>{
        setText(text.toUpperCase())
        if(text.length!==0){
            props.alert("Uppercase transformation done", "success")
        }  
    }
    const lowerCase= () =>{
        setText(text.toLowerCase())
        if(text.length!==0){
            props.alert("Lowercase transformation done", "success")
        } 
        
    }
    const clearText= () =>{
        setText('')
        if(text.length!==0){
            props.alert("Clear Text", "success")
        } 
        
    }

    const copyText= () =>{
        navigator.clipboard.writeText(text)
        if(text.length!==0){
            props.alert("The text has been copied", "success")
        } 
        
    }

    const extraSpaceRemover= () =>{
        let newText= text.split(/[  ]+/)
        setText(newText.join(" "))
        if(text.length!==0){
            props.alert("Extra spaces has been removed", "success")
        } 
        
    }

    const changeValue= (event) =>{
        setText(event.target.value)
    }

    const [text, setText]= useState('')
    return (
        <>
            <div className='container'>
            <h1 className='my-3'>Enter the subject</h1>
            <div>
                <div className="form-group my-3">
                    <textarea className="form-control" style={{backgroundColor: props.bgcolor}} value={text} onChange={changeValue} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={upperCase}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={lowerCase}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={extraSpaceRemover}>Space Remover</button>
            </div>
            <div className='container my-3'>
                <h3>Text summary</h3>
                <p>
                    Number of letter: {text.length} <br/>
                    Number of word: {text.split(/\s/).filter((element)=>{return element.length!==0}).length}<br/>
                    How many time it will take to read this paragraph: {0.008* text.split(/\s/).filter((element)=>{return element.length!==0}).length}
                </p>
                <h3>Preview</h3>
                <p>{text.length>0? text : "No subject to preview"}</p>
            </div>
        </>

    )
}
