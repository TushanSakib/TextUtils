import React,{useState} from 'react'

export default function About() {
    const[myStyle,setmyStyle]=useState({
        color:'white',
        backgroundColor:'black'
    })
    const[btnText,setBtnText]=useState("Enable Light Mode")
    
    const toggleStyle=()=>{
        if(myStyle.color === 'white'){
            setmyStyle({
                color:'black',
                backgroundColor:'white',
                border:'1px solid black'
            })
            setBtnText("Enable Dark Mode")
        } else{
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border:'1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
    }

  return (
    <div className='container' style={myStyle}>
        <h2 className='my-2'>About Us</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives a way to analyze your text quickly and efficiently. Be it word count, character count or.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free To Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils is a Free character counter tool that provides instant character count & word count statistic for given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limits

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compitable</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software work in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf documnet, essays et. 
      </div>
    </div>
  </div>
</div>
      <div className='container my-3 mx-3'>
           <button onClick={toggleStyle} type="button" className='btn btn-primary'>{btnText}</button>
      </div>
    </div>
  )
}
