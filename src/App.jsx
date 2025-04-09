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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="Fakebody min-vh-100 d-flex flex-column">
          <MyNavbar />
          <div className=" flex-grow-1">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="d-flex justify-content-center align-items-center my-5 flex-column">
                      <h3 className="text-white">
                        Benvenuto nella mia pagina Netflix react Dinamica
                      </h3>
                      <img
                        src="logo.png"
                        width="400"
                        height="300"
                        className="d-inline-block align-top"
                        alt="Netflix Logo"
                      />
                    </div>
                  </>
                }
              />
              <Route element={<NotFound />} path="*" />
              <Route path="/tv" element={<PreHome />} />
              <Route
                path="/FirstRowOfFilms/:movieID"
                element={<FirstRowOfFilms />}
              />
              <Route
                path="/SecondRowOfFilms/:movieID"
                element={<SecondRowOfFilms />}
              />
              <Route
                path="/ThirdRowOfFilms/:movieID"
                element={<ThirdRowOfFilms />}
              />
              <Route path="/MovieDetails/:movieID" element={<MovieDetails />} />
              <Route
                path="/PaginaProfiloExtra"
                element={<PaginaProfiloExtra />}
              />
              <Route path="/NetflixSettings" element={<NetflixSettings />} />
            </Routes>
          </div>
          <MyFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
