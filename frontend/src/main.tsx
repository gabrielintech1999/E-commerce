import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout";

// pages
import NotFound from "./Not-Found";
import ProductsList from "./pages/products/Products";
import Home from "./pages/home";
import About from "./pages/about";
import ProductDetail from "./pages/products/ProductDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<NotFound />}>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<ProductsList />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>

  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
