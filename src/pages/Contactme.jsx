import React, { useEffect, useState } from 'react';
import styled from '../css/Contactme.module.css'
import github from '../assets/Logos/github.svg'
import linkedin from '../assets/Logos/linkedin.svg'
import { useForm, ValidationError } from '@formspree/react';
import axios  from 'axios';
import Swal from 'sweetalert2'

const Contactme = () => {


  const [state, handleSubmit] = useForm("xbjblqgr");
 




  return (
    <div className={styled.contactme} id='Contactme'>
      {  state.succeeded ?
    
    window.location.reload()
    
 :null
       }
      <div className={styled.container}>

        <div className={styled.box}>

          <div className={styled.boxleft}>
            <h1>Contact   <h1 style={{ display: 'inline', color: 'red', fontSize: '40PX' }}> me</h1></h1>
            <p>  
              Thank you for coming this far, if you think I can add value to your team, do not hesitate to write me.
            </p>

            <div className={styled.ContainerDown}>
              <a href="https://github.com/davidnatanel" target="_blank">
                <img src={github} />
              </a >
              <a href="https://www.linkedin.com/in/david-natanael-gomez/" target="_blank">

                <img src={linkedin} />
              </a >

            </div>
          </div>
          <div className={styled.boxrigth}>

            <form onSubmit={handleSubmit}>
              <label className={styled.text} htmlFor="email">
                Email Address
              </label>
              <input
              placeholder='Email...'
              required
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
              placeholder='Comment...'

              required
                
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit" onClick={
                ()=>{
Swal.fire({
  title: 'Send!',
  text: 'Thanks for your comment',
  icon: 'success',
  confirmButtonText: 'OK'
})}
} disabled={state.submitting} >
                Submit
              </button>
            </form>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Contactme;