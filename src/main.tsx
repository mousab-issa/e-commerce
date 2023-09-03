import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import App from "routes";
import { ErrorBoundary } from "common";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </ErrorBoundary>
);
