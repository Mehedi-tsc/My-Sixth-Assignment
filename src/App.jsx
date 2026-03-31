import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
import OptionalSection from './components/OptionalSection/OptionalSection'
import PricingSection from './components/PricingSection/PricingSection'
import State from './components/State/State'
import StepSection from './components/StepSection/StepSection'

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
     <StepSection></StepSection>
     <PricingSection></PricingSection>
     <OptionalSection></OptionalSection>
     <Footer></Footer>
    </>
  )
}

export default App
