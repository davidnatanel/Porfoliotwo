
import './App.css';
import Aboutme from './pages/Aboutme';
import Contactme from './pages/Contactme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { link } from './utils/link';

function App() {
  return (
    <main className="App">
      <nav>
        <ol>
          {link.map((e) => {
            return (
              <li key={e.id}> <a href={e.link} >{e.text}</a> </li>

            )
          })}
        </ol>
      </nav>

{/* <Home></Home> */}
<Aboutme></Aboutme>
<Projects></Projects>
<Contactme></Contactme>     

    </main>
  );
}

export default App;
