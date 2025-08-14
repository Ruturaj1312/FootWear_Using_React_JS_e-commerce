import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../app/cartSlice";

function All_Product() {
  let dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [spinner, setSpiner] = useState(true);

  useEffect(() => {
    axios
      .get("https://683968736561b8d882b0457d.mockapi.io/footwear")
      .then((res) => {
        setData(res.data);
        setFilterData(res.data);
        setSpiner(false);
      });
  }, []);

  function handalSerch(e) {
    let keyword = e.target.value.toLowerCase();
    // console.log(keyword);
    if (keyword === "") {
      setFilterData(data);
    } else {
      const result = data.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword) ||
          item.brand.toLowerCase().includes(keyword)
      );
      setFilterData(result);
    }
  }

  const filterBy = (type, value) => {
    // console.log(type, value);
    const result = data.filter((item) => item[type].toLowerCase() === value);
    setFilterData(result);
  };

  function handalClear() {
    setFilterData(data);
  }

  function addProductToCart(product) {
    // console.log(product);
    const cartProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quentity: 1,
    };
    // console.log(cartProduct);
    dispatch(addToCart(cartProduct));
  }

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        {/* Serch & Sort */}
        <div className="col-12 d-flex justify-content-between align-items-center mb-3">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Search Product..."
              onChange={handalSerch}
            />
          </div>
          <div className="col-md-3 text-end">
            <select
              className="form-select"
              onChange={() => {
                const sorted = [...filterdata].sort(
                  (a, b) => a.price - b.price
                );
                setFilterData(sorted);
              }}
            >
              <option defaultValue>Sort by: Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border p-3 mb-3">
            <h5>Category</h5>
            <button
              className="btn btn-link p-0"
              onClick={() => filterBy("category", "male")}
            >
              Male
            </button>
            <br />
            <button
              className="btn btn-link p-0"
              onClick={() => filterBy("category", "female")}
            >
              Female
            </button>
            <br />
          </div>

          <div className="border p-3 mb-3">
            <h5>Brand</h5>
            <button
              className="btn btn-link p-0"
              onClick={() => filterBy("brand", "adidas")}
            >
              Adidas
            </button>
            <br />
            <button
              className="btn btn-link p-0"
              onClick={() => filterBy("brand", "nike")}
            >
              Nike
            </button>
            <br />
            <button
              className="btn btn-link p-0"
              onClick={() => filterBy("brand", "bata")}
            >
              Bata
            </button>
            <br />
            <button
              className="btn btn-link p-0"
              onClick={() => filterBy("brand", "puma")}
            >
              Puma
            </button>
          </div>

          <div className="border p-3 mb-3">
            <h5>Size</h5>
            {[6, 7, 8, 9, 10].map((size) => (
              <button
                key={size}
                className="btn btn-outline-secondary btn-sm m-1"
              >
                {size}
              </button>
            ))}
          </div>
          <div className="border p-3 mb-3">
            <h5>Colors</h5>
            {["Black", "White", "Red", "Blue", "Green"].map((color) => (
              <span key={color} className="badge bg-light text-dark border m-1">
                {color}
              </span>
            ))}
          </div>
          <button className="btn btn-primary w-100" onClick={handalClear}>
            Clear Filter
          </button>
        </div>
        <div className="col-md-9">
          <div className="row">
            {spinner ? (
              <div className="text-center">
                <div className="spinner-border text-info" role="status" />
              </div>
            ) : (
              filterdata.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                  <div className="card h-100 text-center">
                    <Link to={`/productdetail/${product.id}`}>
                      <img
                        src={product.image}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    </Link>
                    <div className="card-body">
                      <h6>{product.brand}</h6>
                      <p>{product.title}</p>
                      <p className="mb-0">
                        <strong>₹{product.price}</strong>{" "}
                        <del className="text-muted">₹{product.mrp}</del>
                      </p>
                    </div>
                    <div className="card-footer">
                      <button
                        onClick={() => addProductToCart(product)}
                        className="btn btn-warning w-80"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination UI (Dummy) */}
          <div className="text-center mt-4">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  «
                </a>
              </li>
              <li className="page-item active">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  »
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_Product;

{
  /* <div id="page">
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread">
                  <span>
                    <Link to={"/"}>Home</Link>
                  </span>{" "}
                  / <span>All Product</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-product">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>View All Products</h2>
              </div>
            </div>

            <div className="row row-pb-md">
              {spiner ? (
                <div class="text-center">
                  <div
                    class="spinner-border text-info"
                    role="status"
                    style={{ width: "10rem", height: "10rem" }}
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                data.map((curval) => {
                  return (
                    <div
                      className="col-md-3 col-lg-3 mb-4 text-center"
                      key={curval.id}
                    >
                      <div className="product-entry border">
                        <a href="#" className="prod-img">
                          <img
                            src={curval.image}
                            className="img-fluid mt-3"
                            alt="Product"
                            style={{
                              width: "200px",
                              height: "200px",
                              objectFit: "cover",
                              margin: "0 auto",
                              display: "block",
                            }}
                          />
                        </a>
                        <div className="desc">
                          <h2>
                            <a href="#">{curval.title}</a>
                          </h2>
                          <span className="price">${curval.price}</span>
                          <del className="price">${curval.mrp}</del>
                          <br />
                          <button
                            onClick={() => addProductToCart(curval)}
                            className="btn btn-warning"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

              <div className="w-100"></div>

              <div className="w-100"></div>

              <div className="w-100"></div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="block-27">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ion-ios-arrow-back"></i>
                      </a>
                    </li>
                    <li className="active">
                      <span>1</span>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-ios-arrow-forward"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-partner">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>Trusted Partners</h2>
              </div>
            </div>
            <div className="row">
              <div className="col partner-col text-center">
                <img
                  src="images/brand-1.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src="images/brand-2.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src="images/brand-3.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src="images/brand-4.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
              <div className="col partner-col text-center">
                <img
                  src="images/brand-5.jpg"
                  className="img-fluid"
                  alt="Free html4 bootstrap 4 template"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="ion-ios-arrow-up"></i>
        </a>
      </div> */
}
