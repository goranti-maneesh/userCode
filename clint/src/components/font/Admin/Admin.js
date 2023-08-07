import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { toast } from "react-toastify";
import "./admin.css";

import Table from "react-bootstrap/Table";

const Admin = () => {
  const [data, setData] = useState([]);

  const loadMyData = async () => {
    const responce = await axios.get("http://localhost:3001/api/get");
    setData(responce.data);

    console.log(data);
  };

  useEffect(() => {
    loadMyData();
  }, []);

  const deleteConatact = (id) => {
    if (window.confirm("are you redy sure to remove")) {
      axios.delete(`http://localhost:3001/api/remove/${id}`);
      toast.success("succefully deleted");
      setTimeout(() => loadMyData(), 500);
    }
  };

  return (
    <div>
      <center>
        <br />
        <br />
        <Link to="/addContact">
          <button>ADD Products</button>
        </Link>
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <th>NO</th>
            <th>name</th>
            <th>PRICE</th>
            <th>IMAGE</th>
            <th>ACTIONS</th>
          </thead>
          {data.map((item, index) => {
            return (
              <tbody key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <img src={item.imeage} alt="img" className="add-cart-img" />
                </td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button>update</button>
                  </Link>

                  <button onClick={() => deleteConatact(item.id)}>
                    Delete
                  </button>
                </td>
              </tbody>
            );
          })}
        </Table>
      </center>
    </div>
  );
};
export default Admin;
