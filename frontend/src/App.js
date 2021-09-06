import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar';
import Unica from './pages/unica/Unica'
import Postar from './pages/postar/Postar'
import Modificacao from './pages/modificacao/Modificacao'
import Login from './pages/login/Login'
import Registrar from './pages/registrar/Registrar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  const user = false
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registrar">{user ? <Home /> :<Registrar />}</Route>
          <Route path="/login">{user ? <Home /> :<Login />}</Route>
          <Route path="/postar">{user ? <Postar /> :<Registrar />}</Route>
          <Route path="/modificacao">{user ? <Modificacao /> :<Registrar />}</Route>
          <Route path="/post/:postId">
            <Unica />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
