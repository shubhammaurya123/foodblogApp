import './App.css';
import Home from './Components/Home/home' 
import Header from './Components/Header/header';
import Item from './Components/Item/item';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Home/>
      <Header/>
      <Item/>
      <Footer/>
    </div>
  );
}

export default App;
