import {Routes, Route} from "react-router-dom";

import './App.css';
import Header from './route/Header'
import Footer from './route/Footer'
import Home from './route/Home'

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/"  element= {<Home/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
