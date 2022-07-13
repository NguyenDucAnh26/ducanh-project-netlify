import React from "react";
import * as S from "./styles";
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../UserLayout/Header";
import { ROUTES } from "../../constants/routes";
import background from "../../assets/img/backgroundlogin2.jpeg";
function LoginLayout() {
  const [isShowMenuHeader, setIsShowMenuHeader] = useState(false);
  const [isShowMenuAbout, setIsShowMenuAbout] = useState(false);
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) return <Navigate to={ROUTES.USER.HOME} />;

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
          <S.Background src={background} />
          <Outlet />
        </S.mainContainer>
      </S.Layout>
    </>
  );
}

export default LoginLayout;
