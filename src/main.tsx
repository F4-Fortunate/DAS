import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import PhotosSection from "./components/MoreFotosSection";
import PricingPage from "./components/PricingPage";
import TermsPage from "./components/TermsPage";
import "./index.css";

function App() {
  const location = useLocation();

  // Generate unique key for each navigation to force complete re-mount
  const getUniqueKey = (path: string) => {
    return `${path}-${Date.now()}-${Math.random()}`;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Index key={getUniqueKey(location.pathname)} />}
      />
      <Route
        path="/photos"
        element={<PhotosSection key={getUniqueKey(location.pathname)} />}
      />
      <Route
        path="/pricing"
        element={<PricingPage key={getUniqueKey(location.pathname)} />}
      />
      <Route
        path="/terms"
        element={<TermsPage key={getUniqueKey(location.pathname)} />}
      />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
