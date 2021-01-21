import React, { useState, useEffect, useContext } from 'react'
import { WidthContext } from './contexts/widthContext'
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import debounce from './helperFuncs/debounce'
// Pages
import Home from './pages/home/home'
import Stories from './pages/stories/stories'
import Features from './pages/features/features'
import Pricing from './pages/pricing/pricing'
import Invite from './pages/invite/invite'
import Story from './pages/story/story'
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

    window.addEventListener('resize', debouncedHandleWidth)

    return () => {
      window.removeEventListener('resize', debouncedHandleWidth)
    }
  }, [])

  const debouncedHandleWidth = debounce(() => {
    setWidth(window.innerWidth)
  }, 10)


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
    {path: '/invite', name: 'Invite', component: Invite},
    // {path: '/story', name: 'Story', component: Story}
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
        <Route path={'/story/:id'} children={<Story />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
