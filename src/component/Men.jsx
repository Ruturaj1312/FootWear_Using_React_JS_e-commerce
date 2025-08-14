import axios from "axios";
import React, { useEffect, useState } from "react";

function Men() {
  const [data, setData] = useState([]);

  function loadData() {
    axios
      .get("https://683968736561b8d882b0457d.mockapi.io/footwear")
      .then((res) => {
        const mensData = res.data.filter((item) => item.category === "male");

        setData(mensData);
        // console.log(men);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  console.log(data);

  return (
    <body>
      <div id="page">
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread">
                  <span>
                    <a href="index.html">Home</a>
                  </span>{" "}
                  / <span>Men</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="breadcrumbs-two">
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className="breadcrumbs-img"
                  style={{ backgroundImage: "url(images/cover-img-1.jpg)" }}
                >
                  <h2>Men's</h2>
                </div>
                <div className="menu text-center">
                  <p>
                    <a href="#">New Arrivals</a> <a href="#">Best Sellers</a>{" "}
                    <a href="#">Extended Widths</a> <a href="#">Sale</a>
                  </p>
                </div>
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
              {data.map((curval) => {
                return (
                  <div className="col-md-3 col-lg-3 mb-4 text-center">
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
                      </div>
                    </div>
                  </div>
                );
              })}

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
      </div>
    </body>
  );
}

export default Men;
