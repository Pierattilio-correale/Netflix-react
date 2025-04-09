import { Component, useState, useEffect } from "react";

import { ListGroup } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments";

const CommentList = function (props) {
  const [recensioni, setRecensioni] = useState([]);
  const getComments = () => {
    const myId = props.prop;
    fetch(URL + "/" + myId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNmQ4ZTFkNDM2ZTAwMTVkYTI2ZjUiLCJpYXQiOjE3NDM2Nzg4NjIsImV4cCI6MTc0NDg4ODQ2Mn0.m7ASrqAFiIuaIHug3snc-482NIRX5-LfuVSrOg3xfSU",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella response");
        }
      })
      .then((data) => {
        setRecensioni(data);
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
      });
  };

  const deleteRecensioni = (idToDelete) => {
    fetch(URL + "/" + idToDelete, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNmQ4ZTFkNDM2ZTAwMTVkYTI2ZjUiLCJpYXQiOjE3NDM2Nzg4NjIsImV4cCI6MTc0NDg4ODQ2Mn0.m7ASrqAFiIuaIHug3snc-482NIRX5-LfuVSrOg3xfSU",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("elemento eliminato");
          getComments();
        } else {
          throw new Error("elemento non eliminato");
        }
      })
      .catch((err) => {
        console.log("errore nell'eliminazione", err);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [props.prop]);
  const myId = props.prop;

  return (
    <>
      <ListGroup className="my-3 bg ">
        {recensioni.map((recensioniObject) => {
          return (
            <ListGroup.Item
              key={recensioniObject._id}
              className="d-flex justify-content-between bg-success"
            >
              <div>
                {recensioniObject.comment} {recensioniObject.rate}/5{" "}
                <i className="bi bi-star-fill"></i>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteRecensioni(recensioniObject._id);
                  }}
                >
                  {" "}
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default CommentList;
