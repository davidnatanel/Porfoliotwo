import React, { useEffect, useState } from 'react';
import styled from '../css/Contactme.module.css'
import github from '../assets/Logos/github.svg'
import linkedin from '../assets/Logos/linkedin.svg'
import { useForm, ValidationError } from '@formspree/react';
import axios  from 'axios';
import Swal from 'sweetalert2'

const Contactme = ({lenguaje,selectLenguaje}) => {


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
            <h1 >{lenguaje[selectLenguaje].boxLefth1}
         {   selectLenguaje == 'en'?
            <h1 style={{ display: 'inline', color: 'red', fontSize: '40PX', marginLeft:'5px' }}>me</h1>
            :<p className={styled.letter}>me</p>}
            </h1>
            <p>  
            {lenguaje[selectLenguaje].boxLeftp}
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
              {lenguaje[selectLenguaje].boxRigthEmail}
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
              placeholder={lenguaje[selectLenguaje].boxRigthComment}

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
                {lenguaje[selectLenguaje].boxRigthSubmit}
              </button>
            </form>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Contactme;