import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className="App">
      <MainLinks />
      <div className='App__content'>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/mainpage" element={<MainPage />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/tshirt" element={<CurrentItem title='Футболка USA' listItem='Все' itemName='футболка USA' img={modelPhoto1} price='$129'
            secondItemLink='/sweatshirt' secondItemImg={modelPhoto3} secondItemText='Свитшот Sweet Shot' secondItemPrice='$199' 
            thirdItemLink='/swimsuit' thirdItemImg={modelPhoto2} thirdItemText='Купальник Glow' thirdItemPrice='$149' />}></Route>
          <Route path="/swimsuit" element={<CurrentItem title='Купальник Glow' listItem='Все' itemName='Купальник Glow' img={modelPhoto2} price='$149'
            secondItemLink='/tshirt' secondItemImg={modelPhoto1} secondItemText='Футболка USA' secondItemPrice='$129' 
            thirdItemLink='/sweatshirt' thirdItemImg={modelPhoto3} thirdItemText='Свитшот Sweet Shot' thirdItemPrice='$199' />}></Route>
          <Route path="/sweatshirt" element={
            <CurrentItem title='Свитшот Sweet Shot' listItem='Свитшоты' itemName='Свитшот Sweet Shot' img={modelPhoto3} price='$199'
              secondItemLink='/tshirt' secondItemImg={modelPhoto1} secondItemText='Футболка USA' secondItemPrice='$129' 
              thirdItemLink='/swimsuit' thirdItemImg={modelPhoto2} thirdItemText='Купальник Glow' thirdItemPrice='$149' />}></Route>
          <Route path="/bag" element={<Bag />}></Route>
          <Route path='/order' element={<MakeOrder />}></Route>
          <Route path='/orderrecived' element={<OrderRecived />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
