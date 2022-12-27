import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import Contacts from './components/contacts/Contacts';

import Footer from './components/footer/Footer';
import MainLinks from './components/links/MainLinks';
import MainPage from './components/mainpage/MainPage';
import Shop from './components/shop/Shop';


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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
