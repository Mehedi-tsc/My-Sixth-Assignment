import './App.css'
import Hero from './components/Hero/Hero'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
import State from './components/State/State'

const cardData = async()=>{
  const res =await fetch('/data.json')
  return res.json();
}

const cardPromise = cardData();

function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <State></State>
     <MainSection cardPromise={cardPromise}></MainSection>
    </>
  )
}

export default App
