import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from './cmpnts/Banner';
import Header from './cmpnts/Header';
import Home from './cmpnts/Home';
import Opt1 from './cmpnts/opt1';
import Opt2 from './cmpnts/opt2';
import Opt3 from './cmpnts/opt3';

function App() {
  return (
    <div >
      
      <Banner/>
      
      
      <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Header />} >

      <Route index element={<Home />} />
      <Route path="/opt1" element={<Opt1 />} />
      <Route path='/opt2' element={<Opt2 />} />
      <Route path='/opt3' element={<Opt3 />} />

   </Route>
   </Routes>
   </BrowserRouter>
      
     
     
     
    </div>
    
  );
}

export default App;
