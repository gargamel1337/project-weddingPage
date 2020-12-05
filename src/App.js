import './App.scss';
import ReactDOM from 'react-dom';
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
import AboutMeSections from "./js/AboutMeSections";
import OfertsSection from "./js/OfertsSection";
import CollaborrationSection from "./js/CollaborrationSection";
import ScrollToTop from "./js/ScrollToTop";
import Registration from "./js/administrationPanel/Registration";

function App() {
  return (
      <HashRouter>
          <ScrollToTop/>
          <div className="App">
              <header><Header/></header>
              <Switch>
                  <Route exact path="/">
                      <>
                          <Carusele/>
                          <AboutMe/>
                          <Statistick/>
                          <Oferts/>
                          <Collaboration/>
                          <References/>
                      </>
                  </Route>

                  <Route path="/omnie">
                      <AboutMeSections/>
                  </Route>
                  <Route path="/oferta">
                      <OfertsSection/>
                  </Route>
                  <Route path="/zasadywspolpracy">
                      <CollaborrationSection/>
                  </Route>
                  <Route path="/kontakt">
                      <Form/>
                  </Route>
                  <Route path="/registrationpanel">
                      <Registration/>
                  </Route>

              </Switch>

              <footer><Footer/></footer>
          </div>
      </HashRouter>
  );
}

export default App;

