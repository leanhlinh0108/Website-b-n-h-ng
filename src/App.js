import {Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/home';
import About from './routes/about';
import Service from './routes/service';
import Contact from './routes/contact';
import News from './routes/news';
import Demo from './components/demo';

function App() {
  return (
    <div className="App">
      <Demo></Demo>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
       </Routes>
       
        
    
    </div>
  );
}

export default App;
