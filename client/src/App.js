import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import landingPage from './views/landingPage/landingPage';
import home from './views/home/home';
import aboutdev from './views/about/aboutdev'
import error404 from './views/error404/error404'
import pokemonCreate from './views/pokemonCreate/pokemonCreate'
import detail from "./views/detail/detail";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path="/" component={landingPage}/>
          <Route exact path="/home" component={home}/>
          <Route exact path="/pokemon/:id" component={detail}/>
          <Route exact path="/pokemonCreate" component={pokemonCreate}/>
          <Route exact path="/aboutdev" component={aboutdev}/>
          <Route       path='*' component={error404}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
