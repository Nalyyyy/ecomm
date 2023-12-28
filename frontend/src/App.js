import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

import './App.css';
import Header from './route/Header'
import Footer from './route/Footer'
import Home from './route/Home'
import Product from "./route/Product";
import Products from "./route/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/"  element= {<Home/>}/>
          <Route path="/search/:keyword"  element= {<Products/>}/>
          <Route path="/product/:id"  element= {<Product/>}/>
          <Route path="/products"  element= {<Products/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
