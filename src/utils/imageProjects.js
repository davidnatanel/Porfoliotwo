import Pi from '../assets/myProjects/Pokemon.png'
import Soundwave from '../assets/myProjects/Soundwave.png'
import chatApp from '../assets/myProjects/Chat-App.png'

export const ProjectsList=[
    {
      title:"Pokemon",
      text:"It is an application where you can see the different Pokemon using the external pokeapi api and from it you can, among other things, Search for pokemons Filter them Sort them Create new pokemons.",
      img:Pi,
      link:"https://pi-pokemon-lemkjkzz5-davidnatanaelgomez2-gmailcom.vercel.app/",
      git:"https://github.com/davidnatanel/PI-Pokemon",
      technology:[ {name:"Redux",color:"lightblue"} ,{name:"Express",color:"black"} ,{name:"Sequelize",color:"lightblue"} ,{name:"Postgres",color:"blue"}]
    },
    {
      title:"SoundWave", 
      text:"It is an app to develop a free access music streaming service, where any user registered as an artist can share their music and be able to receive donations from their followers to boost their career.",
      img:Soundwave,
      git:"https://github.com/SoundWavePF",
      link:"https://soundwave-swart.vercel.app/",
      technology:[ {name:"Typescript",color:"blue"} ,{name:"bootstrap",color:"purple"} ,{name:"React",color:"lightblue"},{name:"Auth0",color:"red"} ,{name:"Postgres",color:"blue"},{name:"NodeJs",color:"green"}]
  
    },
    {
      title:"chatApp", 
      text:"It is an application create a realtime chat app with react, node.js and socket.io with mongodb and express. The chat app is also responsive and it is styled with the styled components.",
      img:chatApp,
      git:"https://github.com/chat-app-MERN/Server",
      link:"https://chat-app-mern-eight.vercel.app/login",
      technology:[ {name:"React",color:"blue"} ,{name:"NodeJs",color:"green"} ,{name:"socket.io",color:"black"},{name:"mongoDB",color:"green"} ]
  
    }
  ]