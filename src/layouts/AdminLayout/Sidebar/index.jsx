import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import {
  CreditCardFilled,
  ShopFilled,
  ShoppingOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import LogoPage from "../../../assets/img/logooo.png";
import { ROUTES } from "../../../constants/routes";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/actions";
const { Sider } = Layout;

function Sidebar() {
  const dispatch = useDispatch();
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem("Dashboard", "dashboard", <ShopFilled />),
    getItem("Users", "users", <UsergroupAddOutlined />),
    getItem("Orders", "orders", <CreditCardFilled />),
    getItem("Add Product", "addproduct", <PlusCircleOutlined />),
    getItem("Products", "products", <ShoppingOutlined />),
    getItem("Logout", "logout", <LogoutOutlined />),
  ];
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.key === "dashboard") return navigate(`${ROUTES.ADMIN.DASHBOARD}`);
    if (e.key === "products") return navigate(`${ROUTES.ADMIN.PRODUCTS}`);
    if (e.key === "orders") return navigate(`${ROUTES.ADMIN.ORDER_LIST}`);
    if (e.key === "users") return navigate(`${ROUTES.ADMIN.USER_LIST}`);
    if (e.key === "addproduct") return navigate(`${ROUTES.ADMIN.PRODUCT_ADD}`);
    if (e.key === "logout") {
      dispatch(logoutAction());
      navigate(ROUTES.LOGIN);
    }
  };

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          display: "flex",
          height: "64px",
          marginBottom: "32px",
          background: "#fff",
          alignItems: "center",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          src={LogoPage}
          alt="logo"
        />
      </div>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["dashboard"]}
        mode="inline"
        items={items}
      ></Menu>
    </Sider>
  );
}

export default Sidebar;
