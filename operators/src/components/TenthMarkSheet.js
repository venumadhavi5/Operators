import React, { useEffect, useRef } from 'react'

function TenthMarkSheet() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let engInputRef=useRef();
    let engSpanRef=useRef();
    let telInputRef=useRef();
    let telSpanRef=useRef();
    let hinInputRef=useRef();
    let hinSpanRef=useRef();
    let mathsInputRef=useRef();
    let mathsSpanRef=useRef();
    let sciInputRef=useRef();
    let sciSpanRef=useRef();
    let socInputRef=useRef();
    let socSpanRef=useRef();
    let resultLabelRef=useRef();
    useEffect(()=>{
        alert("Tenth MarkSheet")
    })
  return (
    <div>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
                <span></span>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
                <span></span>
            </div>
            <div>
                <label>English</label>
                <input type="number" ref={engInputRef}
                 onChange={()=>{
                    console.log("eng onChange");
                    console.log(engInputRef.current.value);
                    if (engInputRef.current.value >=35) {engSpanRef.current.innerHTML = "Pass";
                        engSpanRef.current.style.backgroundColor="green";
                        
                    } else {engSpanRef.current.innerHTML = "Fail";
                        engSpanRef.current.style.backgroundColor="red";
                        
                    }

                   
                 }}
                  onFocus={()=>{
                    console.log("eng onFocus")
                    engInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("eng onBlur")
                    engInputRef.current.style.backgroundColor="";
                   }}>

                   </input>
                <span ref={engSpanRef}></span>
            </div>
            <div>
                <label>Telugu</label>
                <input type="number" ref={telInputRef}
                onChange={()=>{
                    console.log("tel onChange");
                    console.log(telInputRef.current.value);
                    if (telInputRef.current.value >=35) {telSpanRef.current.innerHTML = "Pass";
                        telSpanRef.current.style.backgroundColor="green";
                        
                    } else {telSpanRef.current.innerHTML = "Fail";
                        telSpanRef.current.style.backgroundColor="red";
                        
                    }

                    

                   
                 }}
                  onFocus={()=>{
                    console.log("tel onFocus")
                    telInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("tel onBlur")
                    telInputRef.current.style.backgroundColor="";
                   }}>
</input>
                <span ref={telSpanRef}></span>
            </div>
            <div>
                <label>Hindi</label>
                <input type="number" ref={hinInputRef}
                onChange={()=>{
                    console.log("hin onChange");
                    console.log(hinInputRef.current.value);
                    if (hinInputRef.current.value >=35) {hinSpanRef.current.innerHTML = "Pass";
                        hinSpanRef.current.style.backgroundColor="green";
                        
                    } else {hinSpanRef.current.innerHTML = "Fail";
                        hinSpanRef.current.style.backgroundColor="red";
                        
                    }

                   
                 }}
                  onFocus={()=>{
                    console.log("hin onFocus")
                    hinInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("hin onBlur")
                    hinInputRef.current.style.backgroundColor="";
                   }}>

                   </input>
                <span ref={hinSpanRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type="number" ref={mathsInputRef}
                 onChange={()=>{
                    console.log("maths onChange");
                    console.log(mathsInputRef.current.value);
                    if (mathsInputRef.current.value >=35) {mathsSpanRef.current.innerHTML = "Pass";
                        mathsSpanRef.current.style.backgroundColor="green";
                        
                    } else {mathsSpanRef.current.innerHTML = "Fail";
                        mathsSpanRef.current.style.backgroundColor="red";
                        
                    }


                    

                   
                 }}
                  onFocus={()=>{
                    console.log("maths onFocus")
                    mathsInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("maths onBlur")
                    mathsInputRef.current.style.backgroundColor="";
                   }}>
</input>
                <span ref={mathsSpanRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input type="number" ref={sciInputRef}
                 onChange={()=>{
                    console.log("sci onChange");
                    console.log(sciInputRef.current.value);
                    if (sciInputRef.current.value >=35) {sciSpanRef.current.innerHTML = "Pass";
                        sciSpanRef.current.style.backgroundColor="green";
                        
                    } else {sciSpanRef.current.innerHTML = "Fail";
                        sciSpanRef.current.style.backgroundColor="red";
                        
                    }
                   
                 }}
                  onFocus={()=>{
                    console.log("sci onFocus")
                    sciInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("sci onBlur")
                    sciInputRef.current.style.backgroundColor="";
                   }}>
</input>
                <span ref={sciSpanRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input type="number" ref={socInputRef}
                 onChange={()=>{
                    console.log("soc onChange");
                    console.log(socInputRef.current.value);
                    if (socInputRef.current.value >=35) {socSpanRef.current.innerHTML = "Pass";
                        socSpanRef.current.style.backgroundColor="green";
                        
                    } else {socSpanRef.current.innerHTML = "Fail";
                        socSpanRef.current.style.backgroundColor="red";
                        
                    }

                   
                 }}
                  onFocus={()=>{
                    console.log("soc onFocus")
                    socInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("soc onBlur")
                    socInputRef.current.style.backgroundColor="";
                   }}>
</input>
                <span ref={socSpanRef}></span>
            </div>
            
            <div>
                <button type='button' onMouseMove={()=>{
                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let engMarks = Number(engInputRef.current.value);
                    let telMarks = Number(telInputRef.current.value);
                    let hinMarks =Number( hinInputRef.current.value);
                    let mathsMarks = Number(mathsInputRef.current.value);
                    let sciMarks = Number(sciInputRef.current.value);
                    let socMarks = Number(socInputRef.current.value);
                    let totalMarks = engMarks+telMarks+hinMarks+mathsMarks+sciMarks+socMarks;
                    
                    resultLabelRef.current.innerHTML= (`${firstName}${lastName} got total marks are ${totalMarks}`)


                }}>Calculate Result</button>
                <br></br>
                
                    <label ref={resultLabelRef} className='resultLabel'></label>
                
            </div>
        </form>
      
      
    </div>
  )
}

export default TenthMarkSheet
