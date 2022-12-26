import './App.css';

import Footer from './components/footer/Footer';
import MainLinks from './components/links/MainLinks';
import MainPage from './components/mainpage/MainPage';


function App() {
  return (
    <div className="App">
      <MainLinks />
      <div className='App__content'>
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
