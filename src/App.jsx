import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css';

import AboutUs from './components/aboutUs/AboutUs';
import Bag from './components/bag/Bag';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import MainLinks from './components/links/MainLinks';
import MainPage from './components/mainpage/MainPage';
import MakeOrder from './components/makeOrder/MakeOrder';
import OrderRecived from './components/orderRecived/OrderRecived';
import Shop from './components/shop/Shop';
import CurrentItem from './components/shop/stuff/CurrentItem';

import modelPhoto1 from './images/newcollection_photo1.png';
import modelPhoto2 from './images/newcollection_photo2.png';
import modelPhoto3 from './images/newcollection_photo3.png';

function App() {

  // const [currentItemValue,setIsCurrentItemValue] = useState('')
  // const [amountValue, setIsAmountValue] = useState('')

  const [amountShirtValue, setIsAmountShirtValue] = useState('')
  const [amountSwimSuitValue, setIsAmountSwimSuitValue] = useState('')
  const [amountSweatShotValue, setIsAmountSweatShotValue] = useState('')

  const amountValue = (+amountShirtValue) + (+amountSweatShotValue) + (+amountSwimSuitValue)

  const shirtPrice = useSelector(state => state.item.shirt.price);
  const shirt = useSelector(state => state.item.shirt.item);

  const swimsuitPrice = useSelector(state => state.item.swimsuit.price);
  const swimsuit = useSelector(state => state.item.swimsuit.item);

  const sweatshotPrice = useSelector(state => state.item.sweatshot.price);
  const sweatshot = useSelector(state => state.item.sweatshot.item);

  return (
    <BrowserRouter>
      <div className="App">
        <MainLinks amountValue={amountValue} />
        <div className='App__content'>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/mainpage" element={<MainPage />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/tshirt" element={
              <CurrentItem title={shirt} listItem='Все' itemName={shirt} img={modelPhoto1} price={shirtPrice} amountItemValue={amountShirtValue} setIsAmountItemValue={setIsAmountShirtValue}
                secondItemLink='/sweatshirt' secondItemImg={modelPhoto3} secondItemText={sweatshot} secondItemPrice={sweatshotPrice}
                thirdItemLink='/swimsuit' thirdItemImg={modelPhoto2} thirdItemText={swimsuit} thirdItemPrice={swimsuitPrice} />}></Route>
            <Route path="/swimsuit" element={
              <CurrentItem title={swimsuit} listItem='Все' itemName={swimsuit} img={modelPhoto2} price={swimsuitPrice} amountItemValue={amountSwimSuitValue} setIsAmountItemValue={setIsAmountSwimSuitValue}
                secondItemLink='/tshirt' secondItemImg={modelPhoto1} secondItemText={shirt} secondItemPrice={shirtPrice}
                thirdItemLink='/sweatshirt' thirdItemImg={modelPhoto3} thirdItemText={sweatshot} thirdItemPrice={sweatshotPrice} />}></Route>
            <Route path="/sweatshirt" element={
              <CurrentItem title='Свитшот Sweet Shot' listItem='Свитшоты' itemName={sweatshot} img={modelPhoto3} price={sweatshotPrice} amountItemValue={amountSweatShotValue} setIsAmountItemValue={setIsAmountSweatShotValue}
                secondItemLink='/tshirt' secondItemImg={modelPhoto1} secondItemText={shirt} secondItemPrice={shirtPrice}
                thirdItemLink='/swimsuit' thirdItemImg={modelPhoto2} thirdItemText={swimsuit} thirdItemPrice={swimsuitPrice} />}></Route>
            <Route path="/bag" element={<Bag />}></Route>
            <Route path='/order' element={<MakeOrder />}></Route>
            <Route path='/orderrecived' element={<OrderRecived />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
