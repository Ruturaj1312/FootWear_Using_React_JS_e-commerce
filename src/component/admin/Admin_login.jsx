import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Admin_login() {
  const [id, setid] = useState("");
  const [pass, setPass] = useState("");
  const [alert, setAlert] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    const cookieValue = Cookies.get("name");
    if (cookieValue) {
      nav("/admin");
    }
  });

  function handleSubmit() {
    if (
      id.trim().toLowerCase() === "admin" &&
      pass.trim().toLowerCase() === "admin"
    ) {
      document.cookie =
        "name=" + id + "; expires=Fri, 21 Jun 2026 12:00:00 UTC";
      document.cookie =
        "value=" + pass + ";  expires=Fri, 21 Jun 2026 12:00:00 UTC";
      nav("/admin");
    } else {
      setAlert(true);
      setTimeout(() => setAlert(false), 2000);
    }
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card shadow" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                {/* Image Section */}
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://wildcraft.com/media/mageplaza/blog/post/f/o/footwear_size_chart_for_men_women_1_.jpg"
                    alt="login form"
                    className="img-fluid h-100"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1rem 0 0 1rem",
                    }}
                  />
                </div>
                {/* Form Section */}
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-4">
                        <img
                          src="images/logo.png"
                          alt="Logo"
                          style={{ height: "60px", marginRight: "10px" }}
                        />
                        <h3 className="fw-bold mb-0">
                          <span style={{ color: "#0d6efd" }}>FootWear</span>
                        </h3>
                      </div>

                      <h5
                        className="fw-normal mb-4"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign in to your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          onChange={(e) => setid(e.target.value)}
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Username"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          onChange={(e) => setPass(e.target.value)}
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                      </div>

                      <div className="d-grid mb-4">
                        <button
                          className="btn btn-primary btn-lg"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                      </div>

                      {/* Alert */}
                      {alert && (
                        <div
                          className="alert alert-danger py-2 text-center"
                          role="alert"
                        >
                          Invalid Credentials!
                        </div>
                      )}

                      <div className="text-muted small d-flex justify-content-between">
                        <a href="#!" className="text-decoration-none">
                          Forgot password?
                        </a>
                        <a href="#!" className="text-decoration-none">
                          Register
                        </a>
                      </div>

                      <hr className="my-4" />
                      <div className="text-center text-muted small">
                        <a href="#!" className="me-2 text-decoration-none">
                          Terms of use
                        </a>
                        |
                        <a href="#!" className="ms-2 text-decoration-none">
                          Privacy policy
                        </a>
                      </div>
                    </form>
                  </div>
                </div>{" "}
                {/* End Form Section */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin_login;
