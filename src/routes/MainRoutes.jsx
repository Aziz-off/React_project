import React from "react";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import Favorite from "../components/favorites/Favorite";
import Auth from "../components/auth/Auth";
import Login from "../components/auth/Login";
import { ProtectedRoutes } from "../helpers/function";

export const ADMIN_ROUTES = [
  {
    link: "/admin",
    element: <AdminPage />,
    id: 1,
  },
  {
    link: "/edit/:id",
    element: <EditPage />,
    id: 2,
  },
];

const PUBLIC_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },
  {
    link: "/details/:id",
    element: <DetailsPage />,
    id: 2,
  },
  { id: 3, link: "/products", element: <HomePage /> },
  { id: 4, link: "/about", element: <AboutPage /> },
  { id: 5, link: "/cart", element: <CartPage /> },
  { id: 6, link: "/favorites", element: <Favorite /> },
  {
    link: "/auth",
    element: <Auth />,
    id: 7,
  },
  {
    link: "/login",
    element: <Login />,
    id: 8,
  },
];

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        {ADMIN_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Route>

      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
