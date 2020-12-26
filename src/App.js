import logo from './logo.svg';
import './App.css';
import Authen from './Components/Authen';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import DetailPage from './Components/DetailPage';
import Browser from "./Components/Browser"
import PostApi from './Components/PostApi';
import YourApi from "./Components/YourApi";
import SupportPostApi from './Components/SupportPostApi';
import CreateCategory from "./Components/CreateCategory";
import CreateType from './Components/CreateType';
function App() {
  return (
    <Switch>
    <Route exact path='/' component={Authen} />
    <Route path="/auth" component={Authen} />
    <Route path="/home" component={Home} />
    <Route path="/detail" component={DetailPage}/>
    <Route path="/browser" component={Browser}/>
    <Route path="/postapi" component={SupportPostApi} />
    <Route path="/yourapis" component={YourApi}/>
    <Route path="/testapi" component={PostApi}/>
    <Route path="/createCategory" component={CreateType} />
  </Switch>
  );
}

export default App;
