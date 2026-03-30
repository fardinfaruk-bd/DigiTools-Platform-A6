
import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Bannner'
import Navbar from './components/navbar/Navbar'
import PreDigiTools from './components/PreDigiTools/PreDigiTools'
import Stats from './components/Stats/Stats'

const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

function App() {
  
  const DataPromise = fetchData();
  return (
    <>
    <Navbar />
    <Banner />
    <Stats />
    <Suspense fallback={<div className='mt-7 flex justify-center items-center'><span className="loading loading-ring loading-xl "></span></div>}>
      <PreDigiTools DataPromise={DataPromise} />
    </Suspense>
    
    </>
  )
}

export default App
