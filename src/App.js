import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/screen/HomePage';
import Products from './pages/ProductsPage/screen/ProductsPage';
import ProductDetail from './pages/ProductsPage/screen/ProductDetail';
import Saved from './pages/Saved/screen/Saved';
import Contacts from './pages/Contacts/screen/Contacts';
import DiscountSystem from './pages/DiscountSystem/screen/DiscountSystem';
import DeliveryPayment from './pages/DeliveryPayment/screen/DeliveryPayment';
import About from './pages/About/screen/AboutCo';
import TermsOfUse from './pages/TermsOfUse/screen/TermsOfUse';
import FAQ from './pages/FAQ/screen/FAQ';
import ReturnConditions from './pages/ReturnConditions/screen/ReturnConditions';
import Error from './pages/ErrorPage/screen/ErrorPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <p>12e</p>
      {/* <Router >
        <Navbar/>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
          <Route exact path='/products/clothes' component={Products} />
          <Route exact path='/products/:id' children={<ProductDetail/>} />
          <Redirect from='/clothes' to='/products/clothes' />

          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/discount_system' component={DiscountSystem} />
          <Route exact path='/delivery_payment' component={DeliveryPayment} />
          <Route exact path='/about' component={About} />
          <Route exact path='/terms_of_use' component={TermsOfUse} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/return_conditions' component={ReturnConditions} />
          <Route path='/not-found' component={Error} />
          <Redirect to='/not-found' />
        </Switch>

        <Footer/>
      </Router> */}
    </div>
  );
}

export default App;
