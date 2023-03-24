import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Services from './Components/Services';
// For Form validation
import Form from './Components/Form';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <section>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/contact" exact component={Contact}/>
              {/* <Route path="/form" exact component={Form}/> */}
              <Route path="/gallery" exact component={Gallery}/>
              <Route path="/services" exact component={Services}/>
            </Switch>
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
