import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MyNavbar from "./Components/MyNavbar";
import PreHome from "./Components/PreHome";
import FirstRowOfFilms from "./Components/FirstRowOfFilms";
import SecondRowOfFilms from "./Components/SecondRowOfFilms";
import ThirdRowOfFilms from "./Components/ThirdRowOfFilms";
import MyFooter from "./Components/MyFooter";
import PaginaProfiloExtra from "./Components/PaginProfiloExtra";
import NetflixSettings from "./Components/NetflixSettings";

function App() {
  return (
    <>
      <div className="Fakebody">
        <MyNavbar />
        <PreHome />
        <FirstRowOfFilms />
        <SecondRowOfFilms />
        <ThirdRowOfFilms />
        <MyFooter />
        {/* <PaginaProfiloExtra />
        <NetflixSettings /> */}
      </div>
    </>
  );
}

export default App;
