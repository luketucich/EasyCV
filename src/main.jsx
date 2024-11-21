import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col items-center font-sans leading-5">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-100 text-5xl font-extrabold text-center p-5 hover:scale-110 hover:cursor-pointer select-none transition-transform ease-in-out drop-shadow-glow">
        EasyCV
      </h1>

      <div className="rounded-lg">
        <App />
      </div>
    </div>
  </StrictMode>
);
