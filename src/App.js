import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import "moment/locale/vi";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reset.css";
import "./fonts.css";
import Login from "./pages/loginpages/Login";
import Register from "./pages/loginpages/Register";
import AccountInfo from "./pages/accountpages/AccountInfo";
import AccountOrders from "./pages/accountpages/AccountOrders";
import HomePage from "./pages/userpages/HomePage";
import AboutPage from "./pages/userpages/AboutPage";
import SizesPage from "./pages/userpages/SizesPage";
import CollectionPage from "./pages/userpages/CollectionPage";
import CollectionCategoryPage from "./pages/userpages/CollectionCategoryPage";
import CartPage from "./pages/userpages/CartPage";
import ProductDetailPage from "./pages/userpages/ProductDetailPage";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import LoginLayout from "./layouts/LoginLayout";
import AccountLayout from "./layouts/AccountLayout";
import Dashboard from "./pages/adminpages/Dashboard";
import ProductsPage from "./pages/adminpages/ProductsPage";
import UserListPage from "./pages/adminpages/UserListPage";
import OrderListPage from "./pages/adminpages/OrderListPage";
import OrderDetailPage from "./pages/adminpages/OrderDetailPage";
import AddProductPage from "./pages/adminpages/AddProductPage";
import UpdateProductPage from "./pages/adminpages/UpdateProductPage";
import DetailProductPage from "./pages/adminpages/DetailProductPage";
import { ROUTES } from "./constants/routes";

import { getUserInfoAction } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decodedUserData = jwtDecode(accessToken);
      dispatch(getUserInfoAction({ id: decodedUserData.sub }));
    }
  }, []);

  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route element={<HomePage />} path={ROUTES.USER.HOME} />
        <Route element={<AboutPage />} path={ROUTES.USER.ABOUT} />
        <Route element={<SizesPage />} path={ROUTES.USER.SIZES} />
        <Route element={<CollectionPage />} path={ROUTES.USER.COLLECTION} />
        <Route
          element={<CollectionCategoryPage />}
          path={ROUTES.USER.COLLECTION_CATEGORY}
        />
        <Route element={<CartPage />} path={ROUTES.USER.CART} />
        <Route
          element={<ProductDetailPage />}
          path={ROUTES.USER.PRODUCT_DETAIL}
        />
      </Route>
      <Route element={<AdminLayout />}>
        <Route element={<Dashboard />} path={ROUTES.ADMIN.DASHBOARD} />
        <Route element={<ProductsPage />} path={ROUTES.ADMIN.PRODUCTS} />
        <Route
          element={<DetailProductPage />}
          path={ROUTES.ADMIN.PRODUCT_DETAIL}
        />
        <Route element={<UserListPage />} path={ROUTES.ADMIN.USER_LIST} />
        <Route element={<OrderListPage />} path={ROUTES.ADMIN.ORDER_LIST} />
        <Route element={<OrderDetailPage />} path={ROUTES.ADMIN.ORDER_DETAIL} />
        <Route element={<AddProductPage />} path={ROUTES.ADMIN.PRODUCT_ADD} />
        <Route
          element={<UpdateProductPage />}
          path={ROUTES.ADMIN.PRODUCT_UPDATE}
        />
      </Route>
      <Route element={<AccountLayout />}>
        <Route element={<AccountInfo />} path={ROUTES.USER.ACCOUNT_INFO} />
        <Route element={<AccountOrders />} path={ROUTES.USER.ACCOUNT_ORDERS} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route element={<Login />} path={ROUTES.LOGIN} />
        <Route element={<Register />} path={ROUTES.REGISTER} />
      </Route>
    </Routes>
  );
}

export default App;
