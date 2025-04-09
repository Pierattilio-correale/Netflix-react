import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner, Form } from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CommentArea from "./CommentArea";
import SearchBar from "./SearchBar";

const MovieDetails = function () {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const URLDB = "https://www.omdbapi.com/?apikey=4b12ae0b&i=";

  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMyFilm = () => {
    fetch(URLDB + params.movieID)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella response");
        }
      })
      .then((data) => {
        console.log(data);

        setFilm(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);

        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    getMyFilm();
  }, [params.movieID]);
  return (
    <>
      <div>
        <SearchBar />
        <Container>
          <Row className="d-flex justify-content-center">
            {isLoading && (
              <div className="text-center my-3">
                <Spinner variant="danger" animation="border" />
              </div>
            )}

            <Col
              key={film.imdbID}
              className="col-lg-3 col-md-4 col-sm-6 col-xl-2 col-12"
            >
              <Card className="border-0 bg-danger">
                <Card.Img
                  variant="top"
                  src={film.Poster}
                  alt={film.Title}
                  className="card-img22"
                />
                <Card.Body>
                  <Card.Title>{film.Title}</Card.Title>
                  <Card.Text>{film.Year}</Card.Text>
                </Card.Body>
                <CommentArea prop={params.movieID} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default MovieDetails;
