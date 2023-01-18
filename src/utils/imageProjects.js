import Pi from '../assets/myProjects/Pokemon.png'
import Soundwave from '../assets/myProjects/Soundwave.png'
import chatApp from '../assets/myProjects/Chat-App.png'
import TraileMania from '../assets/myProjects/TraileMania.png'
import NoteApp from '../assets/myProjects/NoteApp.png'

export const ProjectsList = [
  {
    title: "Pokemon",
    texten: "It is an application where you can see the different Pokemon using the external pokeapi api and from it you can, among other things, Search for pokemons Filter them Sort them Create new pokemons.",
    textes: "Es trata de una aplicación donde puedes ver los diferentes Pokémon utilizando la api pokeapi externa y desde ella puedes, entre otras cosas, Buscar pokemons Filtrarlos Ordenarlos Crear nuevos pokemons.",
    img: Pi,
    link: "https://pipokemon-five.vercel.app/",
    git: "https://github.com/davidnatanel/PI-Pokemon",
    technology: [{ name: "Redux", color: "lightblue" }, { name: "Express", color: "black" }, { name: "Sequelize", color: "lightblue" }, { name: "Postgres", color: "blue" }]
  },
  {
    title: "SoundWave",
    texten: "It is an app to develop a free access music streaming service, where any user registered as an artist can share their music and be able to receive donations from their followers to boost their career.",
    textes: "Se trata de una app para desarrollar un servicio de música en streaming de acceso gratuito, donde cualquier usuario registrado como artista puede compartir su música y poder recibir donaciones de sus seguidores para impulsar su carrera.",
    img: Soundwave,
    git: "https://github.com/SoundWavePF",
    link: "https://soundwave-swart.vercel.app/",
    technology: [{ name: "Typescript", color: "blue" }, { name: "bootstrap", color: "purple" }, { name: "React", color: "lightblue" }, { name: "Auth0", color: "red" }, { name: "Postgres", color: "blue" }, { name: "NodeJs", color: "green" }]

  },
  {
    title: "chatApp",
    texten: "It is an application create a realtime chat app with react, node.js and socket.io with mongodb and express. The chat app is also responsive and it is styled with the styled components.",
    textes: "Es  una aplicación de chat en tiempo real con react, nodo.js y socket.io con mongodb y express. La aplicación de chat también es receptiva y está diseñada con los componentes con estilo.",
    img: chatApp,
    git: "https://github.com/davidnatanel/Client-Chat-App-MERN",
    link: "https://clientchatmern.vercel.app/",
    technology: [{ name: "React", color: "blue" }, { name: "NodeJs", color: "green" }, { name: "socket.io", color: "black" }, { name: "mongoDB", color: "green" }]

  },
  {
    title: "TraileMania",
    texten: "It is an app to see both old and newly released movie trailers, this app is with react js.",
    textes: "Es una app para ver tanto trailes de peliculas antiguos como recien estrenados, esta app esta con react js.",
    img: TraileMania,
    git: "https://github.com/davidnatanel/TraileMania",
    link: "https://traile-mania.vercel.app",
    technology: [{ name: "React", color: "blue" }]

  },
  {
    title: "NoteApp",
    texten: "It is an app to write notes made in react js.",
    textes: "Es una app para escribir notas, la app esta creada con react.js.",
    img: NoteApp,
    git: "https://github.com/davidnatanel/notesapp",
    link: "https://notesapp-sand.vercel.app/",
    technology: [{ name: "React", color: "blue" }]

  },
]