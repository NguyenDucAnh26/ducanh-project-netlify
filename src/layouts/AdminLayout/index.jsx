import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import SiteHeader from "./Header";
import Loading from "./Loading";
import { ROUTES } from "../../constants/routes";

const { Header, Content, Footer } = Layout;
function AdminLayout() {
  const accessToken = localStorage.getItem("accessToken");
  const { userInfo } = useSelector((state) => state.user);
  if (!accessToken) return <Navigate to={ROUTES.LOGIN} />;
  if (userInfo.data.role !== "admin" && !userInfo.loading) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  if (userInfo.loading) {
    return <Loading />;
  }
  return (
    <>
      <Layout>
        <Sidebar
          styles={{
            height: "200vh",
          }}
        />
        <Layout
          style={{
            background: "#fafafa",
          }}
        >
          <Header
            style={{
              background: "#fff",
            }}
          >
            <SiteHeader />
          </Header>
          <Content>
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: "center",
              background: "#fafafa",
            }}
          ></Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default AdminLayout;
