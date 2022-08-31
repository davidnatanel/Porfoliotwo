import React from 'react';
import Style from '../css/Aboutme.module.css'
import david from '../assets/david.png'
import dart from '../assets/Icons/dart.svg';
import flutter from '../assets/Icons/flutter.svg';
import javascript from '../assets/Icons/javascript.svg';
import mongodb from '../assets/Icons/mongodb.svg';
import nextjs from '../assets/Icons/next-js.svg';
import nodejs from '../assets/Icons/nodejs.svg';
import reactNative from '../assets/Icons/react-native.svg';
import react from '../assets/Icons/react.svg';
import typescript from '../assets/Icons/typescript.svg';
import css3 from '../assets/Icons/css3.svg';
import html from '../assets/Icons/html.svg';
import postgresql from '../assets/Icons/postgresql.svg';
// import cv from /../public/DavidCV.pdf'
var technology= [
    typescript,
    javascript,css3,
    html,
    nodejs,
    mongodb,
    postgresql,
    nextjs,
    dart,
    flutter,
    reactNative,
    react
    ]
const Aboutme = () => {
    return (
        <div className={Style.aboutme} id='Aboutme'>
            

     <div className={Style.container}>

        <div className={Style.box}>
            <div  className={Style.boxleft}>
    <h1>  I'am <h1 style={{display :'inline', color:'red',fontSize:'40PX'}}> David</h1>
    </h1>
    <p>
    intellectually curious, passionate about technology and development in general, I am a person very predisposed to be in continuous learning, seeking to improve myself in each instance, I love new challenges, both individually and in groups. I am very self-taught, which has led me to improve the ability to quickly get involved in something new, and to be able to solve any type of problem that comes my way.
    </p>

    <div className={Style.button}>
    <a href="../public/DavidCV.pdf" download      >
      My CV
    </a>
    </div>
<div className={Style.image} >
    
{technology && technology.map((e,i)=>{

return( 


    <img
      src={e} 
     
   />
)
}  )}
</div>

    </div>
    
    <div  className={Style.boxrigth}>
        <img src={david} alt="" />
    </div>
    </div>
    </div>


        </div>
    );
};

export default Aboutme;