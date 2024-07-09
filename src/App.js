import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import NavB from './Components/NavB';
import Header from './Components/Header';
import Product from './Components/Product';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import GetInTouch from './Components/GetInTouch';
import Footer from './Components/Footer';



function App ()  {
  return (
    <div className="App">
      <NavB/>
      <Header/>
      <Product/>
      <Service/>
      <Gallery/>
      <GetInTouch/>
    <Footer/>
    </div>
  )
}


export default App;