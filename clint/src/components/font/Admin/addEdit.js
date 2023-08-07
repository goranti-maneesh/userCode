import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

const intialState = {
  name: "",
  price: "",
  imeage: "",
};

const AddEdit = () => {
  const { id } = useParams();

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const { name, price, imeage } = state;

  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !imeage) {
      toast.error("please provide value");
    } else {
      if (!id) {
        axios
          .post("http://localhost:3001/api/post", { name, price, imeage })
          .then(() => {
            setState({ name: "", price: "", imeage: "" });
          })
          .catch((err) => console.log(err.response.data));
        toast.success("succefully Added Data");
      } else {
        axios
          .put(`http://localhost:3001/api/update/${id}`, {
            name,
            price,
            imeage,
          })
          .then(() => {
            setState({ name: "", price: "", imeage: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("successfully updated data");
      }

      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    }
  };
  const handlerInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="form-table">
      <center>
        {" "}
        <h1>{id ? "UPDATE CONTENT" : "ADD CONTENT"}</h1>
        <form onSubmit={handlerSubmit}>
          <label>name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={name || ""}
            placeholder="name"
            onChange={handlerInput}
          />
          <br />
          <br />
          <label>price</label>
          <br />
          <input
            type="mail"
            name="price"
            id="price"
            value={price || ""}
            placeholder="price"
            onChange={handlerInput}
          />
          <br />
          <br />
          <label>contact</label>
          <br />
          <input
            type="text"
            name="imeage"
            id="imeage"
            value={imeage || ""}
            placeholder="imeage"
            onChange={handlerInput}
          />
          <br />
          <br />
          <input type="submit" value={id ? "UPDATE" : "SAVE"} />
          <Link to="/">
            <input type="button" value="go back" />
          </Link>
          <br />
          <br />
        </form>
      </center>
    </div>
  );
};
export default AddEdit;
