import  "./App.css"
import Menubar from "./component/menubar/Menubar.jsx";
import Home from"./pages/Home.jsx"
import {Container} from "react-bootstrap"
import Footer from "./component/footer/Footer.jsx";
import WidgetOne from "./component/widget-1/WidgetOne.jsx";
import Banner from "./component/widget-2/Banner.jsx";
import Management from "./component/widget-3/Management"
import OurManagementTeam from "./component/widget-4/OurManagementTeam.jsx";
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Manage from "./pages/Manage.jsx";
import Gc from "./pages/Gc";
import About from "./pages/About";
import Cdc from "./pages/Cdc";
import Desk from "./pages/Desk";

import Vision from "./pages/Vision";
import Core from "./pages/Core";

import News from "./pages/News";
import Widget12 from "./component/widget-12/Widget12";

import Affli from "./pages/Affli";
import Rules from "./pages/Rules";
import Annual from "./pages/Annual";
function App() {
  return (
    
    <Container fluid>
      <BrowserRouter>
      <Widget12/>
      <Banner/>
      <Menubar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/manage" element={<Manage/>}/>
        <Route  path="/gc" element={<Gc/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/cdc" element={<Cdc/>}/>
        <Route  path="/desk" element={<Desk/>}/>
        <Route  path="/vision" element={<Vision/>}/>
        <Route  path="/core" element={<Core/>}/>
        <Route  path="/news" element={<News/>}/>
        <Route  path="/affli" element={<Affli/>}/>
        <Route  path="/rules" element={<Rules/>}/>
        <Route  path="/annual" element={<Annual/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
