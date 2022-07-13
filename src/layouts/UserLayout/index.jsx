import React from "react";

import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { ROUTES } from "../../constants/routes";
import Loading from "./Loading";

function UserLayout() {
  const [isShowMenuHeader, setIsShowMenuHeader] = useState(false);
  const [isShowMenuAbout, setIsShowMenuAbout] = useState(false);
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);

  const { userInfo } = useSelector((state) => state.user);

  if (userInfo.data.role === "admin" && !userInfo.loading) {
    return <Navigate to={ROUTES.ADMIN.DASHBOARD} />;
  }

  if (userInfo.loading) {
    return <Loading />;
  }
  return (
    <>
      <Header
        isShowMenuHeader={isShowMenuHeader}
        setIsShowMenuHeader={setIsShowMenuHeader}
        isShowMenuAbout={isShowMenuAbout}
        setIsShowMenuAbout={setIsShowMenuAbout}
        isShowMenuMobile={isShowMenuMobile}
        setIsShowMenuMobile={setIsShowMenuMobile}
      />
      <S.Layout
        isShowMenuAbout={isShowMenuAbout}
        isShowMenuHeader={isShowMenuHeader}
        isShowMenuMobile={isShowMenuMobile}
      >
        <S.mainContainer>
          <Outlet />
        </S.mainContainer>
        <Footer />
      </S.Layout>
    </>
  );
}

export default UserLayout;
