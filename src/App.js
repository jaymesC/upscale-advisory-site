import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import {Home} from './components/Home'
import {About} from './components/About'
import {Services} from './components/Services'
import { Contact } from './components/Contact'
import { Blog } from './components/Blog'
import { Blog2 } from './components/Blog2'
import { Blog3 } from './components/Blog3'
import {Footer} from './components/Footer';




  function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog2" component={Blog2} />
            <Route exact path="/blog3" component={Blog3} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
