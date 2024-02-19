import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import "./styles/index.css";
import { AuthCookieProvider } from "./utils/contexts/newAuth.tsx";
// import { AuthCompanyCookieProvider } from "./utils/contexts/newAuth_company.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <AuthCompanyCookieProvider> */}
    <AuthCookieProvider>
      <App />
    </AuthCookieProvider>
    {/* </AuthCompanyCookieProvider> */}
  </React.StrictMode>
);
