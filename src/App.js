import react, { Fragment } from 'react'
import './App.css';
import Appbar from './components/navbar/Appbar'
import Sidebar from './components/sidebar/Sidebar'
import UserList from './components/UserList/UserList'
import Feature from './components/FeatureInfo/Feature'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <div className="sidebarcontainer">
          <Sidebar></Sidebar>
          <div className="other">
              <Switch>
                <Route exact path="/user"><UserList></UserList></Route>
                <Route exact path="/"><Feature></Feature></Route>
              </Switch>
         </div>
        </div>
      </div>
      </Router>
  );

}

export default App;
