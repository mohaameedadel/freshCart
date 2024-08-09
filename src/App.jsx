import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Productes from "./components/Productes/Productes";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Login from "./components/Login/Login";
import Regestier from "./components/Regestier/Regestier";
import Notfound from "./components/Notfound/Notfound";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import NameContextProvider from "./components/context/NameContext";
import ProtectedComponent from "./components/ProtectedComponent/ProtectedComponent";
import ProtectedUser from "./components/ProtectedUser/ProtectedUser";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedComponent>
              <Home />
            </ProtectedComponent>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedComponent>
              <Cart />
            </ProtectedComponent>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedComponent>
              <Productes />
            </ProtectedComponent>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedComponent>
              <Categories />
            </ProtectedComponent>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedComponent>
              <Brands />
            </ProtectedComponent>
          ),
        },
        {
          path: "login",
          element: (
            <ProtectedUser>
              <Login />
            </ProtectedUser>
          ),
        },
        {
          path: "register",
          element: (
            <ProtectedUser>
              <Regestier />
            </ProtectedUser>
          ),
        },
        {
          path: "details/:id",
          element: (
            <ProductDetails>
              <ProductDetails />
            </ProductDetails>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>
      <NameContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </NameContextProvider>
    </>
  );
}

export default App;
