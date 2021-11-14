import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import Posts from './Posts';
import NotFound from './NotFound';
import Navbar from './Navbar';
import Connection from './Connection';
import Inscription from './Inscription';

function App() {
  return ( 
    <Router>
    <div className="App container ">
    <Navbar />
      <div className="content ">
        <Switch>
          <Route exact path="/">
            <Connection />
          </Route>
          <Route path="/signup">
            <Inscription />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          {/* <Route path="/posts/:id">
            <Profil />
          </Route> */}
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
