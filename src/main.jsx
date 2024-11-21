import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col items-center font-serif">
      <h1 className="text-3xl font-bold text-center p-5 text-white">EasyCV</h1>
      <App />
    </div>
  </StrictMode>
);
