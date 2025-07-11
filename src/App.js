import "./App.css";
import Chef from "./Components/Chef/Chef";
import Culinary from "./Components/Culinary/Culinary";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";
import Meals from "./Components/Meals/Meals";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div dir="ltr">
      <Navbar/>
      <div className="pad">
        <Main/>
        <Meals/>
        <Menu/>
        <Chef/>
        <Culinary/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

