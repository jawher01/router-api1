
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs"
import Erreur from "./pages/Erreur"
import Nav from "./component/NavBar"
import Footer from "./component/Footer"
import Axios from 'axios';
import UserDetails from "./pages/UserDetails"
import { useState, useEffect } from 'react'
import Comment from "./pages/Comment"


function App() {
  const [users, setUsers] = useState([]);
  const [LoadUser, setLoadUser] = useState(true);
  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => { setUsers(res.data);
     setLoadUser(false) }).catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();

  }, [])
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Home LoadUser={LoadUser} users={users} />} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/users/:id" component={UserDetails} />
        <Route path="/posts/:id" component={Comment}/>
        <Route path="/*" component={Erreur} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
