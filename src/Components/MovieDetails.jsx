import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner, Form } from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import CommentArea from "./CommentArea";

const MovieDetails = function () {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const URLDB = "https://www.omdbapi.com/?apikey=4b12ae0b&i=";
  // state = {
  //   film: [],
  //   isLoading: true,
  //   isError: false,
  // };
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
        // this.setState({
        //   film: data.Search,

        //   isLoading: false,
        //   isError: false,
        // });
        setFilm(data);
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
    // verificheremo qui la validità del parametro "pastaId"
    getMyFilm();
  }, [params.movieID]);
  return (
    <>
      <div>
        <Container className="my-3">
          <Row>
            <Col>
              <h2 className="text-center text-white">Search here</h2>
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="text"
                  className="w-50"
                  placeholder={params.movieID}
                />
              </div>
            </Col>
          </Row>
        </Container>
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
              <Card className="border-0">
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
