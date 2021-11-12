import Navbar from './Navbar';
import Connection from './Connection';
import Inscription from './Inscription';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profil from './Profil';
import Posts from './Posts';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Connection />
          </Route>
          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
