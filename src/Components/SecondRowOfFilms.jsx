import { Component, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const URLDB = "https://www.omdbapi.com/?apikey=4b12ae0b&s=dragon%20ball ";
const SecondRowOfFilms = function () {
  const params = useParams();
  const navigate = useNavigate();
  // state = {
  //   film: [],
  //   isLoading: true,
  //   isError: false,
  // };
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getMyFilm = () => {
    fetch(URLDB)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella response");
        }
      })
      .then((data) => {
        console.log(data);
        // this.setState({
        //   film: data.Search,
        //   isLoading: false,
        //   isError: false,
        // });
        setFilm(data.Search);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
        // this.setState({
        //   film: data.Search,
        //   isLoading: false,
        //   isError: true,
        // });
        setIsLoading(false);
        setIsError(true);
      });
  };
  // componentDidMount() {
  //   this.getMyFilm();
  // }
  useEffect(() => {
    getMyFilm();
  }, []);
  return (
    <>
      <h4 className="text-white ms-4 my-4">Whatch it Again</h4>
      <Container>
        <Row className="g-3">
          {isLoading && (
            <div className="text-center my-3">
              <Spinner variant="danger" animation="border" />
            </div>
          )}
          {isError && (
            <div className="d-flex justify-content-center">
              <Alert variant="danger" className="my-3 w-50">
                Mi dispiace ma i tuoi film non sono presenti!
              </Alert>
            </div>
          )}
          {film.map((films) => (
            <Col
              key={films.imdbID}
              className="col-lg-3 col-md-4 col-sm-6 col-xl-2 col-12"
            >
              <Card className="border-0">
                <Card.Img
                  style={{ height: 160 }}
                  variant="top"
                  src={films.Poster}
                  alt={films.Title}
                  className="card-img22"
                  onClick={() => {
                    navigate("/MovieDetails/" + films.imdbID);
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default SecondRowOfFilms;
