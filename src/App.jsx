import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter basename={"/alexa/"}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
