import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/screen/HomePage';
import Products from './pages/ProductsPage/screen/ProductsPage';
import ProductDetail from './pages/ProductsPage/screen/ProductDetail';
import Saved from './pages/Saved/screen/Saved';
import Basket from './pages/Basket/screen/Basket';
import PopUp from './pages/PopUp/screen/PopUp';
import Order from './pages/Order/screen/Order';
import Contacts from './pages/Contacts/screen/Contacts';
import DiscountSystem from './pages/DiscountSystem/screen/DiscountSystem';
import DeliveryPayment from './pages/DeliveryPayment/screen/DeliveryPayment';
import About from './pages/About/screen/AboutCo';
import TermsOfUse from './pages/TermsOfUse/screen/TermsOfUse';
import FAQ from './pages/FAQ/screen/FAQ';
import ReturnConditions from './pages/ReturnConditions/screen/ReturnConditions';
import Error from './pages/ErrorPage/screen/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router >
        <Route
          render={({ location }) =>
            (location.pathname !== "/basket" && <Navbar />)
          }
        />
        
        <Switch>
          {/* Main Pages */}
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
          <Route exact path='/basket' component={Basket} />
          <Route exact path='/popup/:id' component={PopUp} />
          <Route exact path='/order' component={Order} />
          <Route exact path='/products/clothes' component={Products} />
          <Route exact path='/products/:id' children={<ProductDetail/>} />
          <Redirect from='/clothes' to='/products/clothes' />
          {/* Additional Pages */}
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/discount_system' component={DiscountSystem} />
          <Route exact path='/delivery_payment' component={DeliveryPayment} />
          <Route exact path='/about' component={About} />
          <Route exact path='/terms_of_use' component={TermsOfUse} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/return_conditions' component={ReturnConditions} />
          {/* Error Page */}
          <Route path='/not-found'><Error title={"НИЧЕГО НЕ НАЙДЕНО"} text={"Попробуйте сбросить фильтры или обновить страницу"}/></Route>
          <Redirect to='/not-found' />
        </Switch>

        <Route
          render={({ location }) =>
            location.pathname !== "/basket" && <Footer />
          }
        />
      </Router>
    </div>
  );
}

export default App;
