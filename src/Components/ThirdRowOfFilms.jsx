import { Component } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
const URLStarWars = "https://www.omdbapi.com/?apikey=4b12ae0b&s=Avengers ";
class ThirdRowOfFilms extends Component {
  state = {
    film: [],
    isLoading: true,
    isError: false,
  };
  getMyFilm = () => {
    fetch(URLStarWars)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella response");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          film: data.Search,
          isLoading: false,
          isError: false,
        });
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };
  componentDidMount() {
    this.getMyFilm();
  }
  render() {
    return (
      <>
        <h4 className="text-white ms-4 my-4">New Releases</h4>
        <Container>
          <Row className="g-3">
            {this.state.isLoading && (
              <div className="text-center my-3">
                <Spinner variant="danger" animation="border" />
              </div>
            )}
            {this.state.isError && (
              <div className="d-flex justify-content-center">
                <Alert variant="danger" className="my-3 w-50">
                  Mi dispiace ma i tuoi film non sono presenti!
                </Alert>
              </div>
            )}
            {this.state.film.map((films) => (
              <Col
                key={films.imdbID}
                className="col-lg-3 col-md-4 col-sm-6 col-xl-2 col-12"
              >
                <Card className="border-0">
                  <Card.Img
                    style={{ height: 130 }}
                    variant="top"
                    src={films.Poster}
                    alt="Filmstarwars"
                    className="card-img22"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default ThirdRowOfFilms;
