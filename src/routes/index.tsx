import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "store";

import DetailProduct from "pages/ProductDetailPage";

import Home from "pages/Home";
import { useEffect } from "react";

import { Provider } from "react-redux";

const App = () => {
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
