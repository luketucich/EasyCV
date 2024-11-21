import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col items-center font-sans">
      <h1 className="drop-shadow-glow text-5xl font-extrabold text-center p-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
        EasyCV
      </h1>
      <div className="rounded-lg">
        <App />
      </div>
    </div>
  </StrictMode>
);
