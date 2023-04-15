import logo from './logo.svg';
import './App.css';
import Header from '../Header/header';
import Content from '../Content/section2/content';
import Footer from '../Footer/footer';
import Slider from '../Content/section1/slider';

function App() {
  return (
    <div class="container">
      <div class="row">
        <Header/>
        <Slider/>
        <Content/>
        <Footer/>
      </div>
   </div>
  );
}

export default App;
