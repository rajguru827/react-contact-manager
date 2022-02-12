import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact';
import ViewContacts from './components/ViewContacts';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="bg-green-400 p-3">
            <div className="container mx-auto">
              <ul className="flex">
                <li><Link to="/">Contacts</Link></li>
                <li><Link to="/add-contact">Add Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container mx-auto">
          <Switch>
            <Route path="/add-contact">
              <AddContact />
            </Route>
            <Route path="/">
              <ViewContacts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
