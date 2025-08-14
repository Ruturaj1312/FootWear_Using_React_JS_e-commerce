import axios from "axios";
import React, { useEffect, useState } from "react";

function Order() {
  const [order, setOrder] = useState([]);
  const [selectOrder, setSelectOrder] = useState(null);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BASE_URL + "/orders").then((res) => {
      // console.log(res.data);
      setOrder(res.data);
    });
  }, []);

  const handleView = (order) => {
    console.log(order);

    setSelectOrder(order);
  };

  // console.log(selectOrder);

  const handlePrint = () => {
    const printContaint = document.getElementById("invoice").innerHTML;
    const originalContaint = document.body.innerHTML;

    // Replace the body content with the invoice content
    document.body.innerHTML = printContaint;

    // Trigger the print
    window.print();

    // Restore the original content
    document.body.innerHTML = originalContaint;

    // Re-apply event listeners if needed (React components may need a full reload)
    window.location.reload();
  };

  return (
    <div>
      <div className="container mt-4">
        <h3>Orders</h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Sub total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.subTotal}</td>
                <td>
                  <button
                    onClick={() => handleView(item)}
                    type="button"
                    style={{ backgroundColor: "#007BFF", color: "black" }}
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal View */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog  modal-dialog-centered"
          style={{ maxWidth: "1000px" }}
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Selected Order
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {selectOrder && (
                <div className="container p-4 bg-light " id="invoice">
                  <h3 className="text-center text-primary">Invoice</h3>
                  <p>
                    <strong>Name:</strong> {selectOrder.name}{" "}
                    {selectOrder.surname}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectOrder.email}
                  </p>
                  <p>
                    <strong>Mobile:</strong> {selectOrder.mobile}
                  </p>
                  <p>
                    <strong>Address:</strong> {selectOrder.address} ,
                    {selectOrder.city} ,{selectOrder.state}-{selectOrder.zip} ,
                    {selectOrder.country}
                  </p>
                  <hr />

                  <h5>Order Details</h5>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectOrder.orders.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>
                            <img
                              src={item.image}
                              alt=""
                              style={{ width: "60px" }}
                            />{" "}
                            {item.title}
                          </td>
                          <td>{item.price}</td>
                          <td>{item.quentity}</td>
                          <td>{item.quentity * item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h5 className="text-right">
                    SubTotal: ${selectOrder.subTotal}
                  </h5>
                </div>
              )}
            </div>
            <span><hr /></span>
            <div class="modal-body">
              <button className="btn btn-success " onClick={handlePrint}>
                Print Invoice
              </button>
              <button
                type="button"
                class="btn btn-secondary float-end"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
