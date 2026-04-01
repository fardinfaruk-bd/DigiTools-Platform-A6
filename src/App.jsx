import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import PreDigiTools from './components/PreDigiTools/PreDigiTools'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import WorkFlow from './components/WorkFlow/WorkFlow'
import Footer from './components/Footer/Footer'

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar cartProducts={cartProducts}/>
      <Banner />
      <Stats />

      {
        loading ? (
          <div className='mt-7 flex justify-center items-center'>
            <span className="loading loading-ring loading-xl"></span>
          </div>
        ) : (
          <PreDigiTools 
            data={data}
            cartProducts={cartProducts} 
            setCartProducts={setCartProducts} 
          />
        )
      }

      <Steps/>
      <Pricing/>
      <WorkFlow/>
      <Footer/>
    </>
  )
}

export default App