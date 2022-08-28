import React from 'react';
import styled from '../css/Home.module.css'
import avatar from '../assets/avatars.svg'

const Home = () => {
    return (
        <section className={styled.home} id='Home'>
            <div className={styled.container}>
         
         <div className={styled.box}>
            <div className={styled.boxleft}>
                <h1> Hi all, I'm David 👋
</h1>
                <p>A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</p>
               
            </div>


            <div className={styled.boxrigth}>
                
           
                    <img src={avatar} alt="" />
              
            </div>


         </div>

                </div>
              
          

        </section>
    );
};

export default Home;