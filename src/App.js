import logo from './logo.svg';
import './App.css';
import Authen from './Components/Authen';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import DetailPage from './Components/DetailPage';
function App() {
  return (
    <Switch>
    <Route exact path='/' component={Authen} />
    <Route path="/auth" component={Authen} />
    <Route path="/home" component={Home} />
    <Route path="/detail" component={DetailPage}/>
    <Route path="/test" component={PrimarySearchAppBar}/>
  </Switch>
  );
}

export default App;
