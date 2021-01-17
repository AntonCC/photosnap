import React, { useState } from 'react'
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

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/stories', name: 'Stories', component: Stories},
  {path: '/features', name: 'Features', component: Features},
  {path: '/pricing', name: 'Pricing', component: Pricing},
  {path: '/invite', name: 'Invite', component: Invite}
]

const App = () => {
  const [mobileActive, setMobileActive] = useState()

  const handleMobileNav = () => {
    if(mobileActive) {
      setMobileActive(false)
    } else {
      setMobileActive(true)
    }
  }

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
