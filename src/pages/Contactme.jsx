import React, { useState } from 'react';
import styled from '../css/Contactme.module.css'
import github from '../assets/Logos/github.svg'
import linkedin from '../assets/Logos/linkedin.svg'


const Contactme = () => {

    let [input, setInput] = useState({
        comment: "",
        name:"",
        email:""
      })
      
    
      function onInputChange(e) {
        e.preventDefault()
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      }
    
      const sendEmail=(e)=>{
    
    
        e.preventDefault()

        console.log(input)
    
    
      }
    


    return (
        <div className={styled.contactme} id='Contactme'>
               <div className={styled.container}>

               <div className={styled.box}>
             
                <div className={styled.boxleft}>
                    <h1>Contact   <h1 style={{display :'inline', color:'red',fontSize:'40PX'}}> me</h1></h1>
                    <p>  contact me
Thank you for coming this far, if you think I can add value to your team, do not hesitate to write me.
                    </p>

                    <div className={styled.ContainerDown}>
        <a href="https://github.com/davidnatanel"> 
        <img     src={github} />
       </a > 
       <a href="https://www.linkedin.com/in/david-natanael-gomez/"> 

        <img  src={linkedin} />
        </a > 

        </div>
                </div>
                <div className={styled.boxrigth}>

                    <form onSubmit={(e)=>sendEmail(e)}>
                        <input     onChange={e=>onInputChange(e)} placeholder='name...' type="text" name='name'/>
                        <input     onChange={e=>onInputChange(e)} placeholder='email...' type="text" name='email'/>
                        <textarea  onChange={e=>onInputChange(e)} placeholder='comment...' name="comment" id="" cols="30" rows="10"></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
               </div>

               </div>

            
        </div>
    );
};

export default Contactme;