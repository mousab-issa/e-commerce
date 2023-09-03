import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import App from "routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
