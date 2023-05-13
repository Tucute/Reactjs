import logo from './logo.svg';
import './App.css';
import Content from '../../lifeCycle/Component/Content/Content';
import Header from '../../lifeCycle/Component/Header/Header';
import Footer from '../../lifeCycle/Component/Footer/Header';

function App() {
  return (
    <div class="container">
      <Header/>
      <Content/>
      <Footer/>
   </div>
  );
}

export default App;
