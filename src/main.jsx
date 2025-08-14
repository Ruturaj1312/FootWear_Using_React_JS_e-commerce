import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-datepicker.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/flexslider.css";
import "./assets/css/icomoon.css";
import "./assets/css/ionicons.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
// import "./assets/css/style.css.map";
import "./assets/css/css/mixins/_text-hide.css";
import "./assets/css/css/bootstrap-reboot.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
