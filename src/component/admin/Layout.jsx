import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Layout() {
  const nav = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // logout logic
        nav("/admin_login");
        document.cookie =
          "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          "value=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        Swal.fire({
          icon: "success",
          title: "Logged out!",
          text: "You have been logged out successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <nav
        className="bg-dark text-white sidebar d-flex flex-column p-3"
        style={{ width: "250px" }}
      >
        <h4 className="text-center mb-4">Admin Panel</h4>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/admin" className="nav-link text-white">
              <i className="fas fa-tachometer-alt me-2"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="nav-link text-white">
              <i className="fas fa-box-open me-2"></i> Products
            </Link>
          </li>
          <li>
            <Link to="/admin/add_product" className="nav-link text-white">
              <i className="fas fa-plus me-2"></i> Add Product
            </Link>
          </li>
          <li>
            <Link to="/admin/order" className="nav-link text-white">
              <i className="fas fa-shopping-cart me-2"></i> Orders
            </Link>
          </li>
        </ul>

        <hr />

        <div className="mt-auto">
          <button className="btn btn-warning w-100" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i> Logout
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex-grow-1 bg-light p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
