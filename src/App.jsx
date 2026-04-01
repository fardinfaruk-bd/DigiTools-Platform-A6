
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import PreDigiTools from './components/PreDigiTools/PreDigiTools'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import WorkFlow from './components/WorkFlow/WorkFlow'
import Footer from './components/Footer/Footer'

const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

function App() {
  
  const DataPromise = fetchData();
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <>
    <Navbar cartProducts={cartProducts}/>
    <Banner />
    <Stats />
    <Suspense fallback={<div className='mt-7 flex justify-center items-center'><span className="loading loading-ring loading-xl "></span></div>}>
      <PreDigiTools DataPromise={DataPromise} cartProducts={cartProducts} setCartProducts={setCartProducts} />
    </Suspense>
    <Steps/>
    <Pricing/>
    <WorkFlow/>
    <Footer/>





    
    
    </>
  )
}

export default App
