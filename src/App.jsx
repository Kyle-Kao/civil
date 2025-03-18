import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <>
      <Navbar />
      <>
      <div className='pt-7'>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/about' element={ <About/> }></Route>
          </Routes>
        </Suspense>
      </div>
      </>
    </>
  )
}

export default App
