import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddProduct() {
  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
    brand: "",
    color: "",
    size: "",
    description: "",
  });

  let { id } = useParams();

  const navigate = useNavigate();

  // const [titleError,setTitleError]= useState("");

  const [newData, setnewData] = useState([]);

  const [showAlert, setShowAlert] = useState(false);

  const [error, setError] = useState({
    titleError: "",
    categoryError: "",
    priceError: "",
    mrpError: "",
    imageError: "",
    brandError: "",
    sizeError: "",
  });

  function handlechange(e) {
    setError({
      titleError: "",
      categoryError: "",
      priceError: "",
      mrpError: "",
      imageError: "",
      brandError: "",
      sizeError: "",
    });
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    const errObj = {
      titleError: "",
      categoryError: "",
      priceError: "",
      mrpError: "",
      imageError: "",
      brandError: "",
      sizeError: "",
    };

    let isValid = true;

    e.preventDefault();
    console.log(data);

    if (!data.title.trim()) {
      errObj.titleError = "Title is Required";
      isValid = false;
    }

    if (!data.category.trim()) {
      errObj.categoryError = "Please select the category";
      isValid = false;
    }

    if (!data.price.trim()) {
      errObj.priceError = "Price is Required";
      isValid = false;
    }

    if (!data.mrp.trim()) {
      errObj.mrpError = "MRP is Required";
      isValid = false;
    }

    if (!data.image.trim()) {
      errObj.imageError = "Image is Required";
      isValid = false;
    }

    if (!data.brand.trim()) {
      errObj.brandError = "Please select Brand...";
      isValid = false;
    }

    if (!data.size.trim()) {
      errObj.sizeError = "Please select Size...";
      isValid = false;
    }

    setError(errObj);

    if (id === undefined) {
      if (isValid) {
        axios
          .post(import.meta.env.VITE_BASE_URL + "/footwear", data)
          .then((res) => {
            console.log(res.data);
            setShowAlert(true);
            loadData();
          });

        setData({
          title: "",
          category: "",
          price: "",
          mrp: "",
          image: "",
          brand: "",
          color: "",
          size: "",
          description: "",
        });
        setTimeout(() => {
          setShowAlert(false);
          navigate("/admin/products");
        }, 2000);
      }
    } else {
      if (isValid) {
        axios
          .put(import.meta.env.VITE_BASE_URL + "/footwear/" + id, data)
          .then((res) => {
            console.log(res.data);
            loadData();
            // setid(undefined);

            setShowAlert(true);
          });

        setData({
          title: "",
          category: "",
          price: "",
          mrp: "",
          image: "",
          brand: "",
          color: "",
          size: "",
          description: "",
        });
      }
      setTimeout(() => {
        setShowAlert(false);
        navigate("/admin/products");
      }, 2000);
    }
  }

  useEffect(() => {
    if (id) {
      axios
        .get(import.meta.env.VITE_BASE_URL + "/footwear/" + id, data)
        .then((res) => {
          // console.log(res.data);
          setData({
            title: res.data.title,
            category: res.data.category,
            price: res.data.price,
            mrp: res.data.mrp,
            image: res.data.image,
            brand: res.data.brand,
            color: res.data.color,
            size: res.data.size,
            description: res.data.description,
          });
        });
    }
  }, []);

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
                  / <span>Add Product</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="container">
            <div class="row mt-2">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Title <span className="text-danger">*</span>
                  </label>

                  <span className="text-danger">
                    {error.titleError && error.titleError}
                  </span>

                  <input
                    onChange={handlechange}
                    type="text"
                    name="title"
                    class="form-control border border-secondary"
                    value={data.title}
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <span className="text-danger">
                    {error.categoryError && error.categoryError}
                  </span>
                  <select
                    onChange={handlechange}
                    value={data.category}
                    name="category"
                    class="form-select form-control border border-secondary border-5"
                    id="inputGroupSelect01"
                  >
                    <option>Choose Category...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="kids">Kids</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-lg-3">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Price <span className="text-danger">*</span>
                    <span className="text-danger">
                      {error.priceError && error.priceError}
                    </span>
                  </label>
                  <input
                    onChange={handlechange}
                    type="number"
                    name="price"
                    class="form-control border border-secondary border-5"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.price}
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    MRP <span className="text-danger">*</span>
                    <span className="text-danger">
                      {error.mrpError && error.mrpError}
                    </span>
                  </label>
                  <input
                    onChange={handlechange}
                    type="number"
                    name="mrp"
                    class="form-control border border-secondary border-5"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.mrp}
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Image <span className="text-danger">*</span>{" "}
                    <span className="text-danger">
                      {error.imageError && error.imageError}
                    </span>
                  </label>
                  <input
                    onChange={handlechange}
                    type="text"
                    name="image"
                    class="form-control border border-secondary border-5"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data.image}
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Upload Image
                  </label>
                  <input
                    class="form-control border border-secondary border-5"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-lg-3">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Brand <span className="text-danger">*</span>
                    <span className="text-danger">
                      {error.brandError && error.brandError}
                    </span>
                  </label>
                  <select
                    onChange={handlechange}
                    value={data.brand}
                    name="brand"
                    class="form-select form-control border border-secondary border-5"
                    id="inputGroupSelect01"
                  >
                    <option>Choose Brand...</option>
                    <option value="adidas">Adidas</option>
                    <option value="bata">Bata</option>
                    <option value="nike">Nike</option>
                    <option value="puma">Puma</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Color
                  </label>
                  <input
                    onChange={handlechange}
                    type="text"
                    name="color"
                    class="form-control border border-secondary border-5"
                    id="exampleInputEmail1"
                    value={data.color}
                  />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Size <span className="text-danger">*</span>
                    <span className="text-danger">
                      {error.sizeError && error.sizeError}
                    </span>
                  </label>
                  <select
                    value={data.size}
                    onChange={handlechange}
                    name="size"
                    class="form-select form-control border border-secondary border-5"
                    id="inputGroupSelect01"
                  >
                    <option>Choose Size...</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-10">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Description
                  </label>
                  <textarea
                    value={data.description}
                    onChange={handlechange}
                    name="description"
                    class="form-control form-control border border-secondary border-5"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  class="btn"
                  style={{
                    backgroundColor: "rgb(136, 200, 188)",
                    color: "black",
                  }}
                >
                  Submit
                </button>

                {showAlert && (
                  <div className="alert alert-success" role="alert">
                    ✅
                    {id
                      ? "Data updated successfully!"
                      : "Data submitted successfully!"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
