import React,{useState}from "react";

export default function About(props) {

    // const [myStyle,setStyle]= useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    let myStyle = {
      color: props.mode === 'dark'?'white': '#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
      }
      
    // const[enableTitle,SetenableTitle]=useState("Enable Dark Mode")
    
    // const modeChange=()=>{
    //     if(myStyle.color==="black"){
    //         setStyle({
    //             color: "white",
    //             backgroundColor: "black"

    //         });
    //         SetenableTitle("Disable Dark Mode");


    //     }
    //     else{
    //         setStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         });
    //         SetenableTitle("Enable Dark Mode");
    //     }

        
    // }
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>About Us:-</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <b>About:-</b>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
            Textutils is the utility which can be used to manipulate your text in the way you want.


            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <b>Founder:-</b>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Mr. Avadhoot Prakash Autade
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <b>CEO:-</b>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Mr. Avadhoot Prakash Autade
            </div>
          </div>
        </div>
      </div>
      {/* <button type='button' className='btn btn-primary my-3' onClick={modeChange}>{enableTitle}</button> */}
    </div>
  );
}
