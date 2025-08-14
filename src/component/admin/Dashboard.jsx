import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="breadcrumbs py-2 bg-light border-bottom mb-4">
        <div className="container">
          <p className="bread mb-0">
            <span>
              <Link to="/admin">Admin</Link>
            </span>{" "}
            / <span>Dashboard</span>
          </p>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row g-4">
          {/* Users Card */}
          <div className="col-md-4">
            <div
              className="card shadow h-100 border-0"
              style={{
                borderRadius: "20px",
                backgroundColor: "#88c8bc",
              }}
            >
              <div className="card-body text-center">
                <i className="fas fa-users fa-2x mb-3"></i>
                <h5 className="fw-bold">Users</h5>
                <hr />
                <button className="btn btn-outline-dark mt-2 px-4">
                  Users
                </button>
              </div>
            </div>
          </div>

          {/* Products Card */}
          <div className="col-md-4">
            <div
              className="card shadow h-100 border-0"
              style={{
                borderRadius: "20px",
                backgroundColor: "#88c8bc",
              }}
            >
              <div className="card-body text-center">
                <i className="fas fa-bag-shopping fa-2x mb-3"></i>
                <h5 className="fw-bold">Products</h5>
                <hr />
                <Link to="/admin/products">
                  <button className="btn btn-outline-dark mt-2 px-4">
                    Products
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Orders Card */}
          <div className="col-md-4">
            <div
              className="card shadow h-100 border-0"
              style={{
                borderRadius: "20px",
                backgroundColor: "#88c8bc",
              }}
            >
              <div className="card-body text-center">
                <i className="fab fa-first-order fa-2x mb-3"></i>
                <h5 className="fw-bold">Orders</h5>
                <hr />
                <Link to="/admin/order">
                  <button className="btn btn-outline-dark mt-2 px-4">
                    Orders
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
