import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col items-center font-sans bg-gradient-to-r from-blue-800 to-purple-900">
      <h1 className="text-5xl font-extrabold text-center p-5 text-white drop-shadow-lg">
        EasyCV
      </h1>
      <div className="rounded-lg">
        <App />
      </div>
    </div>
  </StrictMode>
);
