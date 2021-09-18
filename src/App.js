import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Education from './components/pages/education/Education';
import Professional from './components/pages/professional/Professional'
import Contact from './components/pages/contact/Contact'
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Error from './components/pages/error/Error'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/skills">
            <Professional />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
