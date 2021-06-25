import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Delete from './Components/delete';
import View from './Components/view';
import Add from './Components/add';
import Update from './Components/update';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Delete}/>
        <Route path="/view/:id" component={View}/>
        <Route path="/add" component={Add}/>
        <Route path="/update" component={Update}/>
      </Switch>
    </Router>
  );
}

export default App;
