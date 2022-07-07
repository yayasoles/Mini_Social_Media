
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import createPost from "./pages/createPost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration  from './pages/Registration';
function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <NavLink to="/createPost.js" replace>Create A  Post</NavLink>
          <Link to="/">Go Home</Link>
          <Link to="/registration">register</Link>
          <Link to="/login">Login</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createPost" exact component={createPost} />
          <Route path="/Post/:id" exact component={Post} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Registration" exact component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
