import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import "./styles/index.css";
import { AuthProvider } from "./utils/contexts/auth.tsx";
import { AuthCompanyProvider } from "./utils/contexts/auth_company.tsx";
import { AuthCookieProvider } from "./utils/contexts/newAuth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthCookieProvider>
      <AuthCompanyProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AuthCompanyProvider>
    </AuthCookieProvider>
  </React.StrictMode>
);
