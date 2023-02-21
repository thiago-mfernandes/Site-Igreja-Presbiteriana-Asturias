import { Routes, Route } from 'react-router-dom'
import { Home } from './src/pages/Home/home'
import { NavigationHeader } from './src/components/NavigationHeader'
import { Footer } from './src/components/Footer'
import { About } from './src/pages/About/about'
import { Ministries } from './src/pages/Ministries'

export function Router() {
  return (
    <>
      <NavigationHeader />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        
        <Route path="/ministries" element={ <Ministries /> } />
      </Routes>
      
      <Footer />    
    </>
  )
}