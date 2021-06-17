import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router , Route , Switch  } from "react-router-dom";
import Home from "./component/pages/Homepage/Home";
import Footer from "./component/pages/Footerpage/Footer";
import Services from "./component/pages/Services/Services";
import Products from "./component/pages/Products/Products";
import SignUp from "./component/pages/SingUp/SignUp";

function App() {
  return (
      <Router>
         <Navbar />
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/services"  component={Services} />
           <Route path="/products"  component={Products} />
           <Route path="/sign-up"  component={SignUp} />
         </Switch>
         <Footer />
      </Router>
  );
}

export default App;
