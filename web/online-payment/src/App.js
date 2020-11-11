import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/HomePage/Home';
import Footer from './components/Pages/HomePage/Footer/Footer';
import Services from './components/Pages/HomePage/Services/Services'
import SignUp from './components/Pages/HomePage/SignUp/SignUp';
import Products from './components/Pages/HomePage/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path  = "/services" component={Services}/>
        <Route path = "/products" component={Products}/>
        <Route path = "/sign-up" component = {SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
