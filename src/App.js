
import './App.css';
import { Switch ,BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route  exact path="/home">
            <Home />
          </Route>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path='/serviceDetails/:serviceId'>
       <ServiceDetails></ServiceDetails>
       </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
