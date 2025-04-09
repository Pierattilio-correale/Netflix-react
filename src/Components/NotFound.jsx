import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NotFound = function () {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center mt-5">
        <h2 className="text-white">404 - PAGINA NON TROVATA</h2>

        <p className="text-white">
          Vuoi tornare in{" "}
          <Link to="/" className="text-danger ">
            HOME
          </Link>{" "}
          ?
        </p>
        <p className="text-white">
          Puoi anche utilizzare questo{" "}
          <Button
            variant="danger"
            onClick={() => {
              navigate("/");
            }}
          >
            Button
          </Button>
        </p>
      </div>
    </>
  );
};
export default NotFound;
