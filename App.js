import './App.css';
import Nav from './components/nav'
import './components/nav.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import Contact from './components/contact'
import Edit from './components/edit'
import View from './components/view'
import './components/contact.css'
function App() {
  return (
    <div className="App">
      
        
        <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/edit/:id" component={Edit} />
          <Route exact path="/user/view/:id" component={View} />
        </Switch>
        </BrowserRouter>

        
      
    </div>
  );
}

export default App;
