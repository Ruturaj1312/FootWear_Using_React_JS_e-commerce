import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [newData, setnewData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const [id, setid] = useState(undefined);

  function loadData() {
    axios.get(import.meta.env.VITE_BASE_URL + "/footwear").then((res) => {
      console.log(res.data);
      setnewData(res.data);
    });
  }

  useEffect(() => {
    loadData();
  }, []);
  // console.log(newData);

  function handleDelete(id) {
    // alert(id);
    axios
      .delete(import.meta.env.VITE_BASE_URL + "/footwear/" + id)
      .then((res) => {
        console.log(res.data);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 1000);
        loadData();
      });
  }

  return (
    <div>
      <div>
        <div class="breadcrumbs">
          <div class="container">
            <div class="row">
              <div class="col">
                <p class="bread">
                  <span>
                    <a href="">Admin</a>
                  </span>{" "}
                  / <span>Product</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="container">
            <div class="mt-3">
              <table class="table bg-white">
                <thead
                  class="border rounded-pill"
                  style={{ backgroundColor: "rgb(136, 200, 188)" }}
                >
                  <tr class="text-center">
                    <th scope="col">Sr no.</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">MRP</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  {newData.map((curVal, i) => {
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>
                          <img
                            src={curVal.image}
                            alt="Shoes"
                            width="100"
                            height="100"
                          />
                        </td>
                        <td>{curVal.title}</td>
                        <td>{curVal.brand}</td>
                        <td>{curVal.category}</td>
                        <td>{curVal.price}</td>
                        <td>
                          <del>{curVal.mrp}</del>
                        </td>
                        <td>
                          <Link to={"/admin/add_product/" + curVal.id}>
                            <button
                              class="btn"
                              style={{
                                backgroundColor: "rgb(136, 200, 188)",
                                color: "black",
                              }}
                            >
                              Edit
                            </button>
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(curVal.id);
                            }}
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style={{
                              backgroundColor: "rgb(136, 200, 188)",
                              color: "black",
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {showAlert && (
                <div className="alert alert-danger" role="alert">
                  Data Deleted successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
