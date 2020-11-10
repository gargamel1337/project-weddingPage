import './App.scss';
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom'
import Header from "./js/Header";
import Carusele from "./js/Carusele";
import AboutMe from "./js/AboutMe";
import Oferts from "./js/Oferts";
import Collaboration from "./js/Collaboration";
import Statistick from "./js/Statistick";
import Footer from "./js/Footer";
import Picters from "./js/Picters";
import Form from "./js/Form";
import References from "./js/References";

function App() {
  return (
      <div className="App">

          <Header/>
          <Carusele/>
          <AboutMe/>
          <Statistick/>
          <Oferts/>
          <Collaboration/>
          <Picters/>
          <References/>
          <Footer/>

      </div>
  );
}

export default App;
// <Switch>
//   <Route path="/">
//     <Header />
//   </Route>
//   <Route path="/o mnie">
//     <AboutMe/>
//   </Route>
//   <Route path="/oferta">
//     <Oferts/>
//   </Route>
//   <Route path="/kontakt">
//     <Form/>
//   </Route>
//   <Route path="/">
//     <Header />
//   </Route>
// </Switch>