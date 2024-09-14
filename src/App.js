import Home from './componenets/home';
import './App.css';
import Portfolio from './componenets/portfolio';
import Service from './componenets/service';
import Footer from './componenets/footer'
import AboutUs from './componenets/aboutUs';
function App() {
  return (
    <div className=" md:container md:mx-auto bg-black min-h-screen text-white space-y-12">
     <Home/>
     <Portfolio/>
     <Service/>
     <AboutUs/>
     <Footer/>
    </div>
  );
}

export default App;
