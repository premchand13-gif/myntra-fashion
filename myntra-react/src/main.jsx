import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import ManPage from "./components/ManPage.jsx";
import Bag from "./components/Bag.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/man",
        element: <ManPage />,
        /*action: newPostCreated,*/
      },
      { path: "/", element: <Home /> /*, loader: postLoader*/ },
      {
        path: "/bag",
        element: <Bag />,
        /*action: newPostCreated,*/
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
