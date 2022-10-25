import React from 'react';
import styled from '../css/Projects.module.css'
import {ProjectsList} from '../utils/imageProjects'
import git from '../assets/Logos/git.svg'
import link from '../assets/Logos/link.svg'


const Projects = ({lenguaje,selectLenguaje}) => {
    return (
        <div className={styled.projects} id='Projects'>

            <div className={styled.container}>

            <div className={styled.box}>
        
{ProjectsList && ProjectsList.map((e,i)=>{

return( 

<div key={i} className={styled.card} >
  <div className={styled.carsup}>
    <img  src={e.img}/>
  </div>
  <div className={styled.carsmedium}>
    <h1>{e.title}</h1>
    <p>{ selectLenguaje == 'es'? e.textes:e.texten}</p>
    <a href={e.link} target="_blank">
    <img style={{marginTop:'10px',marginLeft:'10px',color:'white', width:'50px', height:'60px'}} src={link} alt="" />
    </a>
    <a href={e.git} target="_blank">
    <img style={{marginTop:'10px',marginLeft:'10px',color:'white', width:'50px', height:'60px'}} src={git} alt="" />
    </a>
  </div>
  <div className={styled.carsdown}>
   {e.technology?.map((e,i)=>(
    <div key={i} className={ styled[e.color]}>{e.name}</div>
   ))}
   
   </div>
 </div>
 
 )
}  )}

</div>

            </div>

            
        </div>
    );
};

export default Projects;