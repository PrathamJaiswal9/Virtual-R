
import './App.css'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Testimonails from './Components/Testimonails'
import Workflow from './Components/Workflow'

function App() {


  return (
    <>
      <Navbar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero/>
      <Features/>
      <Workflow/>
      <Pricing/>
      <Testimonails/>
      <Footer/>
      </div>
    </>
  )
}

export default App
