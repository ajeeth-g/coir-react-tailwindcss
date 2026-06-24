import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import AppWithSplash from "./components/AppWithSplash.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider>
        <AppWithSplash />
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
);
