import React, { useState, useEffect, useContext } from 'react'
import { WidthContext } from './contexts/widthContext'
import './App.scss';
import { Switch, Route } from 'react-router-dom'
// Pages
import Home from './pages/home/home'
import Stories from './pages/stories/stories'
import Features from './pages/features/features'
import Pricing from './pages/pricing/pricing'
import Invite from './pages/invite/invite'
// Components
import ScrollTop from './components/scroll-top/scroll-top'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'


const App = () => {
  const [mobileActive, setMobileActive] = useState()
  const [width, setWidth] = useContext(WidthContext)

  useEffect(() => {
    // Call once on load then event listener handles resize
    setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const handleMobileNav = () => {
    if(mobileActive) {
      setMobileActive(false)
    } else {
      setMobileActive(true)
    }
  }

  const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/stories', name: 'Stories', component: Stories},
    {path: '/features', name: 'Features', component: Features},
    {path: '/pricing', name: 'Pricing', component: Pricing},
    {path: '/invite', name: 'Invite', component: Invite}
  ]

  return (
    <div className="App">
      <ScrollTop />
      <div className={`darken ${mobileActive ? 'active' : ''}`}></div>
      <Navbar mobileActive={mobileActive} handleMobileNav={handleMobileNav} />
      <Switch>
        {
          routes.map(({name, path, component}) => (
            <Route key={name} exact path={path} component={component} />
          ))
        }
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
