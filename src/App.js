import logo from './logo.svg';
import './App.css';
import Authen from './Components/Authen';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import DetailPage from './Components/DetailPage';
import Browser from "./Components/Browser"
import PostApi from './Components/PostApi';
function App() {
  return (
    <Switch>
    <Route exact path='/' component={Authen} />
    <Route path="/auth" component={Authen} />
    <Route path="/home" component={Home} />
    <Route path="/detail" component={DetailPage}/>
    <Route path="/browser" component={Browser}/>
    <Route path="/postapi" component={PostApi}/>
  </Switch>
  );
}

export default App;
