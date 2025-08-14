import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function Checkout() {
  //check Terms & Conditions
  const [terms, setTerms] = useState(false);

  const finalAmount = useSelector((state) => state.cart.finalAmount);
  const cartProduct = useSelector((state) => state.cart.product);

  console.log(finalAmount);
  console.log(cartProduct);

  const [data, setData] = useState({
    country: "",
    name: "",
    surname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    mobile: "",
    orders: cartProduct,
    subTotal: finalAmount,
  });

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  function handleSubmit() {
    if (
      data.country.trim() === "" ||
      data.name.trim() === "" ||
      data.surname.trim() === "" ||
      data.address.trim() === "" ||
      data.city.trim() === "" ||
      data.state.trim() === "" ||
      data.zip.trim() === "" ||
      data.email.trim() === "" ||
      data.mobile.trim() === ""
    ) {
      Swal.fire({
        icon: "warning",
        text: "All Fields are Mandatory !",
      });
    } else {
      axios.post(import.meta.env.VITE_BASE_URL + "/orders", data).then((res) => {
        console.log(res.data);
        handlePayment();
      });
    }
  }

  function handlePayment() {
    if (terms) {
      var options = {
        key: "rzp_test_t7awF2g8eomrtU", // Enter the Key ID generated from the Dashboard
        amount: "50000", // Amount is in currency subunits.
        currency: "INR",
        name: "FootWear", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: "Gaurav Kumar", //your customer's name
          email: "gaurav.kumar@example.com",
          contact: "+919876543210", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.open();
    } else {
      Swal.fire({
        icon: "warning",
        text: "Accept Terms and Condition !",
      });
    }
  }
  return (
    <>
      <div class="colorlib-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <form method="post" class="colorlib-form">
                <h2>Billing Details</h2>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="country">Select Country</label>
                      <div class="form-field">
                        <i class="icon icon-arrow-down3"></i>
                        <select
                          name="people"
                          id="country"
                          class="form-control"
                          onChange={handleChange}
                        >
                          <option>Select country</option>
                          <option value="india">India</option>
                          <option value="china">China</option>
                          <option value="japan">Japan</option>
                          <option value="korea">Korea</option>
                          <option value="Philippines">Philippines</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="fname">First Name</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="name"
                        class="form-control"
                        placeholder="Your firstname"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="lname">Last Name</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="surname"
                        class="form-control"
                        placeholder="Your lastname"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="fname">Address</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="address"
                        class="form-control"
                        placeholder="Enter Your Address"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="companyname">Town/City</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="city"
                        class="form-control"
                        placeholder="Town or City"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="stateprovince">State</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="state"
                        class="form-control"
                        placeholder="State Province"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="lname">Zip/Postal Code</label>
                      <input
                        onChange={handleChange}
                        type="number"
                        id="zip"
                        class="form-control"
                        placeholder="Zip / Postal"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">E-mail Address</label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="email"
                        class="form-control"
                        placeholder="State Province"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="Phone">Phone Number</label>
                      <input
                        onChange={handleChange}
                        type="number"
                        id="mobile"
                        class="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="radio"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="row">
                <div class="col-md-12">
                  <div class="cart-detail">
                    <h2>Cart Total</h2>
                    <ul>
                      <li>
                        <span>Subtotal</span> <span>{finalAmount}/-</span>
                        <ul>
                          {cartProduct.map((product) => {
                            return (
                              <li>
                                <span>
                                  {product.quantity} x {product.title}
                                </span>{" "}
                                <span>{product.price}/-</span>
                              </li>
                            );
                          })}
                          {/* <li>
                            <span>1 x Mens Fancy Shoes</span>{" "}
                            <span>1999/-</span>
                          </li> */}
                        </ul>
                      </li>
                      <li>
                        <span>Shipping</span> <span>50.00/-</span>
                      </li>
                      <li>
                        <span>Order Total</span>{" "}
                        <span>{finalAmount - 50.0}/-</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="w-100"></div>
                <div class="col-md-12">
                  <div class="cart-detail">
                    <h2>Payment Method</h2>
                    <div class="form-group">
                      <div class="col-md-12">
                        <div class="radio">
                          <label>
                            <input type="radio" name="optradio" /> Direct Bank
                            Tranfer
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <div class="radio">
                          <label>
                            <input type="radio" name="optradio" /> Check Payment
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <div class="radio">
                          <label>
                            <input type="radio" name="optradio" /> Paypal
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-md-12">
                        <div class="checkbox">
                          <label>
                            <input
                              onChange={(e) => setTerms(e.target.checked)}
                              class="me-1"
                              type="checkbox"
                              value="checked"
                            />
                            I have read and accept the terms and conditions
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <p>
                    <button
                      onClick={handleSubmit}
                      class="btn btn-primary"
                      style={{
                        backgroundColor: "rgb(136, 200, 188)",
                        color: "black",
                      }}
                    >
                      Place an Order
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
