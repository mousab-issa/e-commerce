import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCookies } from "react-cookie";
import store from "store";

import DetailProduct from "pages/ProductDetailPage";

import Home from "pages/Home";
import { useEffect } from "react";

import { setupApiInterceptors } from "services/axios";
import { Provider } from "react-redux";

const App = () => {
  const removeCookie = useCookies(["token"])[2];

  useEffect(() => {
    setupApiInterceptors(removeCookie);
  }, [removeCookie]);

  const router = createBrowserRouter([
    {
      id: "home",
      path: "/",
      element: <Home />,
    },
    {
      id: "product-detail",
      path: "/product-detail/:id",
      element: <DetailProduct />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};

export default App;
