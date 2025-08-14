import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeToCart,
  incrementQuantity,
  decrementQuantity,
  setDiscountAmount,
  setTotalAmount,
} from "../../app/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  // console.log(data);
  const [allTotal, setAllTotal] = useState(0);
  const [coupon, setCoupon] = useState(0);
  const [discount, setDiscount] = useState(0);

  let data = useSelector((state) => state.cart.product);

  // console.log(data);

  let dispatch = useDispatch();

  function handleDecrement(id) {
    dispatch(decrementQuantity(id));
  }

  function handleIncrement(id) {
    dispatch(incrementQuantity(id));
  }

  useEffect(() => {
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.quentity;
    });
    setAllTotal(total);
  }, [data]);

  function handleCoupon(e) {
    e.preventDefault()
    let promoCode = coupon.match(/(\d+)/);

    if (promoCode) {
      const discountValue = parseInt(promoCode[0]);
      // console.log(typeof discountValue);
      setDiscount(discountValue);
      dispatch(setDiscountAmount(discountValue));
    }
  }

  return (
    <>
      {/* <div class="colorlib-loader"></div> */}

      <div id="page">
        <div class="breadcrumbs">
          <div class="container">
            <div class="row">
              <div class="col">
                <p class="bread">
                  <span>
                    <a href="index.html">Home</a>
                  </span>{" "}
                  / <span>Shopping Cart</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="colorlib-product">
          <div class="container">
            <div class="col-md-12">
              <div class="product-name d-flex">
                <div class="one-forth text-left px-4">
                  <span>Product Details</span>
                </div>
                <div class="one-eight text-center">
                  <span>Price</span>
                </div>
                <div class="one-eight text-center">
                  <span>Quantity</span>
                </div>
                <div class="one-eight text-center">
                  <span>Total</span>
                </div>
                <div class="one-eight text-center px-4">
                  <span>Remove</span>
                </div>
              </div>
              {data.map((eachdata) => (
                <div class="product-cart d-flex">
                  <div class="one-forth">
                    <div
                      class="product-img"
                      style={{ backgroundImage: `url(${eachdata.image})` }}
                    ></div>
                    <div class="display-tc">
                      <h3>{eachdata.title}</h3>
                    </div>
                  </div>
                  <div class="one-eight text-center">
                    <div class="display-tc">
                      <span class="price">₹{eachdata.price}</span>
                    </div>
                  </div>
                  <div class="one-eight text-center">
                    <div class="d-flex">
                      <button
                        onClick={() => handleDecrement(eachdata.id)}
                        class="btn btn-primary mt-4"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        name="quantity"
                        class="form-control input-number text-center mt-4 me-1"
                        min="1"
                        max="100"
                        value={eachdata.quentity}
                      />
                      <button
                        onClick={() => handleIncrement(eachdata.id)}
                        class="btn btn-primary mt-4"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div class="one-eight text-center">
                    <div class="display-tc">
                      <span class="price">
                        ₹{eachdata.price * eachdata.quentity}
                      </span>
                    </div>
                  </div>
                  <div class="one-eight text-center">
                    <div class="display-tc">
                      <button
                        onClick={() => dispatch(removeToCart(eachdata.id))}
                        className="btn btn-secondary"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="row row-pb-lg"></div>
            <div class="row row-pb-lg">
              <div class="col-md-12">
                <div class="total-wrap">
                  <div class="row">
                    <div class="col-sm-8">
                      <form action="#">
                        <div class="row form-group">
                          <div class="col-sm-9">
                            <input
                              type="text"
                              name="quantity"
                              class="form-control input-number"
                              placeholder="Your Coupon Number..."
                              onChange={(e) => setCoupon(e.target.value)}
                            />
                          </div>
                          <div class="col-sm-3">
                            <input
                              type="submit"
                              value="Apply Coupon"
                              class="btn btn-primary"
                              onClick={handleCoupon}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="col-sm-4 text-center">
                      <div class="total">
                        <div class="sub">
                          <p>
                            <span>Subtotal:</span> <span>${allTotal}</span>
                          </p>
                          <p>
                            <span>Delivery:</span> <span>$0.00</span>
                          </p>
                          <p>
                            <span>Discount:</span> <span>${discount}.00</span>
                          </p>
                        </div>
                        <div class="grand-total">
                          <p>
                            <span>
                              <strong>Total:</strong>
                            </span>{" "}
                            <span>${allTotal - discount}</span>
                          </p>
                        </div>
                      </div>

                      <div>
                        <Link to={"/checkout"}>
                          <button
                            className="btn btn-primary mt-4"
                            onClick={() =>
                              dispatch(setTotalAmount(allTotal - discount))
                            }
                          >
                            Proceed to Chekout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>Related Products</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 col-lg-3 mb-4 text-center">
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
              <div class="col-md-3 col-lg-3 mb-4 text-center">
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
              <div class="col-md-3 col-lg-3 mb-4 text-center">
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
              <div class="col-md-3 col-lg-3 mb-4 text-center">
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
            </div>
          </div>
        </div>
      </div>

      <div class="gototop js-top">
        <a href="#" class="js-gotop">
          <i class="ion-ios-arrow-up"></i>
        </a>
      </div>
    </>
  );
}

export default Cart;
