import React from "react";
import IMG1 from "/images/img_bg4.jpg";
import IMG2 from "/images/img_bg5.jpg";
import IMG3 from "/images/img_bg_1.jpg";

function Home() {
  return (
    <>
      <div>
        <div className="bg-info w-100" style={{height:"50px",margin:"auto"}}>
          {" "}
          <h3 className="text-light text-center ">
            {" "}
            25% off (Almost) Everything! Use Code: Summer Sale
          </h3>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={IMG1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={IMG2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={IMG3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="colorlib-intro">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h2 class="intro">
                It started with a simple idea: Create quality, well-designed
                products that I wanted myself.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="colorlib-product">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 text-center">
              <div class="featured">
                <a
                  href="#"
                  class="featured-img"
                  style={{ backgroundImage: "url(images/men.jpg)" }}
                ></a>
                <div class="desc">
                  <h2>
                    <a href="#">Shop Men's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-sm-6 text-center">
              <div class="featured">
                <a
                  href="#"
                  class="featured-img"
                  style={{ backgroundImage: "url(images/women.jpg)" }}
                ></a>
                <div class="desc">
                  <h2>
                    <a href="#">Shop Women's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="colorlib-product">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Best Sellers</h2>
            </div>
          </div>
          <div class="row row-pb-md">
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-1.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-2.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Minam Meaghan</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-3.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Men's Taja Commissioner</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-4.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Russ Men's Sneakers</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-5.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-6.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-7.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-8.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-9.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-10.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-11.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-12.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-13.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-14.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-15.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mb-4 text-center">
              <div class="product-entry border">
                <a href="#" class="prod-img">
                  <img
                    src="images/item-16.jpg"
                    class="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div class="desc">
                  <h2>
                    <a href="#">Women's Boots Shoes Maca</a>
                  </h2>
                  <span class="price">$139.00</span>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                <a href="#" class="btn btn-primary btn-lg">
                  Shop All Products
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="colorlib-partner">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>Trusted Partners</h2>
            </div>
          </div>
          <div class="row">
            <div class="col partner-col text-center">
              <img
                src="images/brand-1.jpg"
                class="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
            <div class="col partner-col text-center">
              <img
                src="images/brand-2.jpg"
                class="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
            <div class="col partner-col text-center">
              <img
                src="images/brand-3.jpg"
                class="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
            <div class="col partner-col text-center">
              <img
                src="images/brand-4.jpg"
                class="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
            <div class="col partner-col text-center">
              <img
                src="images/brand-5.jpg"
                class="img-fluid"
                alt="Free html4 bootstrap 4 template"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
