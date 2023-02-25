import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './src/pages/Home/home'
import { NavigationHeader } from './src/components/NavigationHeader'
import { Footer } from './src/components/Footer'
import { About } from './src/pages/About/about'
import { Ministries } from './src/pages/Ministries'
import { Schedule } from './src/pages/Schedule'
import { Giving } from './src/pages/Giving'
import { Faq } from './src/pages/Faq'
import { Contact } from './src/pages/Contact'
import { Login } from './src/pages/Login'
import { NotFound } from './src/pages/NotFound'
import { AnimatePresence } from 'framer-motion'

export function Router() {
  //const location = useLocation();

  return (
    <AnimatePresence>
      <NavigationHeader />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/schedule" element={ <Schedule /> } />        
        <Route path="/ministries" element={ <Ministries /> } />
        <Route path="/giving" element={ <Giving /> } />
        <Route path="/faq" element={ <Faq /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path='/*' element={ <NotFound /> } />
      </Routes>      
      <Footer />
    </AnimatePresence>
  )
}
