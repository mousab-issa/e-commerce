import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import store from "store";
import "styles/index.css";
import App from "routes";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
);
