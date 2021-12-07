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
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Myorders from "./Pages/MyOrders/Myorders";
import AddReview from "./Pages/AddReview/AddReview";
import Pay from "./Pages/Pay/Pay";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute path="/purchase/:purchaseId">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <Myorders />
            </PrivateRoute>
            <PrivateRoute path="/addReviews">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute path="/addProducts">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay />
            </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
