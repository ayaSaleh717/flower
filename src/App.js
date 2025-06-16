import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import CardDetail from './component/Card/CardDetail'
import ScrollCartButton from './component/ScrollCartButton/ScrollCartButton';


//react router
import { Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

function App() {
  return (
    <div className="App">
    <Header />

    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<CardDetail/>} />




    </Routes>
    <Toaster />



 
   

    </div>
  );
}

export default App;
