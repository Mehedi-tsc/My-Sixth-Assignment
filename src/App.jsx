import { useState } from 'react'
import './App.css'
import CartSection from './components/CartSection/CartSection'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
import OptionalSection from './components/OptionalSection/OptionalSection'
import PricingSection from './components/PricingSection/PricingSection'
import State from './components/State/State'
import StepSection from './components/StepSection/StepSection'
import ToggleSection from './components/ToggleSection/ToggleSection'

const cardData = async()=>{
  const res =await fetch('/data.json')
  return res.json();
}

const cardPromise = cardData();

function App() {
  const [activeBtn, setActiveBtn]=useState('products');
  const [cartProducts, setCartProducts] = useState([]);
  

  return (
    <>
     <Navbar cartProducts={cartProducts}></Navbar>
     <Hero></Hero>
     <State></State>
     <ToggleSection cartProducts={cartProducts} activeBtn={activeBtn} setActiveBtn={setActiveBtn}></ToggleSection>
      {activeBtn==='products' && <MainSection cartProducts={cartProducts} setCartProducts ={setCartProducts} cardPromise={cardPromise}></MainSection>}
      {activeBtn==='carts' && <CartSection cartProducts={cartProducts} setCartProducts={setCartProducts}></CartSection>}
     <StepSection></StepSection>
     <PricingSection></PricingSection>
     <OptionalSection></OptionalSection>
     <Footer></Footer>
    </>
  )
}

export default App
