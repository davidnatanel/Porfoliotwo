
import './App.css';
import Aboutme from './pages/Aboutme';
import Contactme from './pages/Contactme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { link } from './utils/link';
import lenguaje from './utils/lenguaje.json';
import { useState } from 'react';

function App() {
 const [selectLenguaje,setSelectLenguaje]=useState('es')

  return (
    <main className="App">
   
      <nav>
      <div>
        <button  onClick={()=>setSelectLenguaje('es')}>{lenguaje[selectLenguaje].lenguajeEs}</button>
        <button  onClick={()=>setSelectLenguaje('en')} >{lenguaje[selectLenguaje].lenguajeEn}</button>
        </div> 
        <ol>
          {link.map((e,i) => {
            return (
              <li key={i}> <a  href={e.link} >{ selectLenguaje == 'es'? e.textes:e.texten}</a> </li>

            )
          })}
        </ol>
      </nav>

<Aboutme lenguaje={lenguaje}  selectLenguaje={selectLenguaje} ></Aboutme>
<Projects lenguaje={lenguaje}  selectLenguaje={selectLenguaje} ></Projects>
<Contactme lenguaje={lenguaje}  selectLenguaje={selectLenguaje}></Contactme>     

    </main>
  );
}

export default App;
