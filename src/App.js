import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/Shared/NotFound/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/purchase">
            <Purchase />
          </Route>
          <Route path="/allProducts">
            <AllProducts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
