import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          {user ? <Redirect to="/"/> : <Login />}
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
