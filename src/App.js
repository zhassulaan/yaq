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
  const DefaultContainer = () => (
    <div>
      <Route component={Navbar}/>
      
      <Switch>
        {/* Main Pages */}
        <Route exact path='/' component={Home} />
        <Route exact path='/saved' component={Saved} />
        <Route exact path='/order' component={Order} />
        {/* Products Pages */}
        <Route exact path='/products/clothes' children={<Products title={"Все товары"} index={11}/>} />
        <Route exact path='/products/clothes/jackets' children={<Products title={"Куртки"} index={0}/>} />
        <Route exact path='/products/clothes/men_jackets' children={<Products title={"Мужские куртки"} index={0} sex={0}/>} />
        <Route exact path='/products/clothes/women_jackets' children={<Products title={"Женские куртки"} index={0} sex={1}/>} />
        <Route exact path='/products/clothes/baby_jackets' children={<Products title={"Детские куртки"} index={0} sex={2}/>} />
        <Route exact path='/products/clothes/vests' children={<Products title={"Жилеты"} index={1}/>} />
        <Route exact path='/products/clothes/men_vests' children={<Products title={"Мужские жилеты"} index={1} sex={0}/>} />
        <Route exact path='/products/clothes/women_vests' children={<Products title={"Женские жилеты"} index={1} sex={1}/>} />
        <Route exact path='/products/clothes/baby_vests' children={<Products title={"Детские жилеты"} index={1} sex={2}/>} />
        <Route exact path='/products/clothes/pants' children={<Products title={"Брюки"} index={2}/>} />
        <Route exact path='/products/clothes/men_pants' children={<Products title={"Мужские брюки"} index={2} sex={0}/>} />
        <Route exact path='/products/clothes/women_pants' children={<Products title={"Женские брюки"} index={2} sex={1}/>} />
        <Route exact path='/products/clothes/baby_pants' children={<Products title={"Детские брюки"} index={2} sex={2}/>} />
        <Route exact path='/products/clothes/tshirts' children={<Products title={"Футболки"} index={3}/>} />
        <Route exact path='/products/clothes/men_tshirts' children={<Products title={"Мужские футболки"} index={3} sex={0}/>} />
        <Route exact path='/products/clothes/women_tshirts' children={<Products title={"Женские футболки"} index={3} sex={1}/>} />
        <Route exact path='/products/clothes/baby_tshirts' children={<Products title={"Детские футболки"} index={3} sex={2}/>} />
        <Route exact path='/products/clothes/shirts' children={<Products title={"Рубашки"} index={4}/>} />
        <Route exact path='/products/clothes/men_shirts' children={<Products title={"Мужские рубашки"} index={4} sex={0}/>} />
        <Route exact path='/products/clothes/women_shirts' children={<Products title={"Женские рубашки"} index={4} sex={1}/>} />
        <Route exact path='/products/clothes/baby_shirts' children={<Products title={"Детские рубашки"} index={4} sex={2}/>} />
        <Route exact path='/products/clothes/shorts' children={<Products title={"Шорты"} index={5}/>} />
        <Route exact path='/products/clothes/men_shorts' children={<Products title={"Мужские шорты"} index={5} sex={0}/>} />
        <Route exact path='/products/clothes/women_shorts' children={<Products title={"Женские шорты"} index={5} sex={1}/>} />
        <Route exact path='/products/clothes/baby_shorts' children={<Products title={"Детские шорты"} index={5} sex={2}/>} />
        <Route exact path='/products/clothes/hoodies_sweaters' children={<Products title={"Толстовки и свитер"} index={6}/>} />
        <Route exact path='/products/clothes/men_hoodies_sweaters' children={<Products title={"Мужские толстовки и свитера"} index={6} sex={0}/>} />
        <Route exact path='/products/clothes/women_hoodies_sweaters' children={<Products title={"Женские толстовки и свитера"} index={6} sex={1}/>} />
        <Route exact path='/products/clothes/baby_hoodies_sweaters' children={<Products title={"Детские толстовки и свитера"} index={6} sex={2}/>} />
        <Route exact path='/products/clothes/shoes' children={<Products title={"Обувь"} index={7}/>} />
        <Route exact path='/products/clothes/men_shoes' children={<Products title={"Мужская обувь"} index={7} sex={0}/>} />
        <Route exact path='/products/clothes/women_shoes' children={<Products title={"Женская обувь"} index={7} sex={1}/>} />
        <Route exact path='/products/clothes/baby_shoes' children={<Products title={"Детская обувь"} index={7} sex={2}/>} />
        <Route exact path='/products/equipment' children={<Products title={"Снаряжение"} index={9}/>} />
        <Route exact path='/products/accessories' children={<Products title={"Аксессуарры"} index={8}/>} />
        <Route exact path='/products/run' children={<Products title={"Бег"} index={10}/>} />
          
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

      <Route component={Footer}/>
    </div>
  )

  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path='/basket' component={Basket} />
          <Route exact path='/popup/:id' component={PopUp} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
