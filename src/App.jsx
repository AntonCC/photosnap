import React from 'react'
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

const routes = [
  {path: '/', name: 'Home', component: Home}
]

const App = () => {
  return (
    <div className="App">
      <Navbar />
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
