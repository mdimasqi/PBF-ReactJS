import React from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomFormDemo from './CustomForm/CustomFormDemo';
import GenericContainerDemo from './GenericContainer/GenericContainerDemo';
import LoaderDemo from './LoadDemo/LoaderDemo';
import ProtectedRoutesDemo from './ProtectedRoutes/RequireAuthDemo';
import RefsDemo from './RefsDemo/RefsDemo';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/generic-container" component={GenericContainerDemo} />
        <Route path="/custom-form" component={CustomFormDemo} />
        <Route path="/loader" component={LoaderDemo} />
        <Route path="/require-auth" component={ProtectedRoutesDemo} />
        <Route path="/refs" component={RefsDemo} />
      </Switch>
    </BrowserRouter>
  );
}

const Navbar = () => {
  return (
    <nav className='w-25 p-3'>
      <ul className='list-group'>
        <li className='list-group-item'><Link to="/">Home</Link></li>
        <li className='list-group-item'><Link to="/generic-container">Generic Container</Link></li>
        <li className='list-group-item'><Link to="/custom-form">Custom Form</Link></li>
        <li className='list-group-item'><Link to="/loader">Loader</Link></li>
        <li className='list-group-item'><Link to="/require-auth">Protected Routes</Link></li>
        <li className='list-group-item'><Link to="/refs">Refs</Link></li>
      </ul>
    </nav>
  )
}

const Home = () => {
  return (
    <div> Praktikum HOC </div>)
}

export default App;