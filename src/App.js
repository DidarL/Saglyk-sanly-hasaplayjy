import React from 'react';
import Header from './Header.js';
import HSection from './HSection.js';
import Calc1 from './calc/Calc1.js';
import Calc from './calc/Calc.js';
import Calc2 from './calc/Calc2.js';
import Calc3 from './calc/Calc3.js';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Zag from './Zag.js';
import News from './News.js';
import Footer from './Footer.js';
import MainContentNews from './MainContentNews.js';
import MainNewsPage from './MainNewsPage.js';
import Talk from './Talk.js';
import Catalog from './Catalog.js';
import Product from './Product.js';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        <Routes><Route path="/Calc/:id" element={<Zag ob={props.state.CalcN}/>} /></Routes>
        <Routes>
          <Route path="/Calc/1" element={<Calc1/>} />
          <Route path="/Calc" element={<Calc ob={props.state.CalcN}/>} />
          <Route path="/Calc/2" element={<Calc2/>} />
          <Route path="/Calc/3" element={<Calc3/>} />
          
          <Route path="/" element={<HSection />} />
          <Route path="/talk" element={<Talk Time={props.state.Time} ob={props.state.Talkde}/>} />
          <Route path="/News/:id" element={<News ob={props.state.NewsN} /> }/>
          <Route path="/News" element={<MainNewsPage ob={props.state.NewsN}/>} />
          <Route path="/Catalog" element={<Catalog ob={props.state.Catalog}/>} />
          <Route path="/Catalog/:id" element={<Product ob={props.state.Products}/>} />

        </Routes>
        <Routes><Route path="/" element={<MainContentNews ob={props.state.NewsN}/>}/></Routes>
        <Routes>
        <Route path="/News/:id" element={<Footer />}/>
        <Route path="/" element={<Footer />}/>
        <Route path="/News" element={<Footer />}/>
        <Route path="/button" element={<Footer />}/>
        <Route path="/Calc/:id" element={<Footer />}/>
        <Route path="/Catalog/:id" element={<Footer />}/>
        <Route path="/Calc" element={<Footer />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
