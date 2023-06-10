import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../src/Component/Navbar/navindex.js";
import Header from "../src/Component/Header/headerindex.js";
import Main from "../src/Component/Main/mainindex.js";
import Footer from "../src/Component/Footer/footerindex.js";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div>
      <div className="icon-bar" style={{background:'black'}} >
        <a href="#" >
          <i class="fa fa-whatsapp"></i>
        </a>
        <a href="#">
          <i class="fa fa-telegram"></i>
        </a>
      </div>
      <Main />
      <Footer />
      </div>
      
    </>
  );
}

export default App;
