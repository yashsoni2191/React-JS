import {Provider} from 'react-redux'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Yash } from './Redux/store.js';

createRoot(document.getElementById("root")).render(
  <Provider store={Yash}>
    <App />
  </Provider>
);
