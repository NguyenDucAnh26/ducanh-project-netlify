import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import * as S from "./styles";
import { Typography, Divider } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../UserLayout/Header";
import Footer from "../UserLayout/Footer";
import { ROUTES } from "../../constants/routes";
const { Title } = Typography;
function AccountLayout() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const [isShowMenuHeader, setIsShowMenuHeader] = useState(false);
  const [isShowMenuAbout, setIsShowMenuAbout] = useState(false);
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const { userInfo } = useSelector((state) => state.user);
  if (!accessToken) return <Navigate to={ROUTES.USER.HOME} />;
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
          <S.CartPage>
            <S.CartWarpper>
              <S.WrapperFlex>
                <Outlet />
                <S.CartContainer>
                  <S.SideCart>
                    <S.CartHeading>
                      <Title level={2}>{userInfo.data.fullName}</Title>
                    </S.CartHeading>
                    <S.TitleCol>
                      <S.TitleRow>
                        <button
                          onClick={() => {
                            navigate(ROUTES.USER.ACCOUNT_INFO);
                          }}
                          className={
                            pathname === "/account/info"
                              ? "btn-route-account--active"
                              : "btn-route-account"
                          }
                        >
                          Thông tin cá nhân
                        </button>
                      </S.TitleRow>
                      <S.TitleRow>
                        <button
                          onClick={() => {
                            navigate(ROUTES.USER.ACCOUNT_ORDERS);
                          }}
                          className={
                            pathname === "/account/orders"
                              ? "btn-route-account--active"
                              : "btn-route-account"
                          }
                        >
                          Danh sách đơn hàng
                        </button>
                      </S.TitleRow>
                      <S.TitleRow>
                        <button
                          onClick={() => navigate(ROUTES.USER.HOME)}
                          className="btn-route-account"
                        >
                          Thoát
                        </button>
                      </S.TitleRow>
                    </S.TitleCol>
                    <Divider />
                  </S.SideCart>
                </S.CartContainer>
              </S.WrapperFlex>
            </S.CartWarpper>
          </S.CartPage>
        </S.mainContainer>
        <Footer />
      </S.Layout>
    </>
  );
}

export default AccountLayout;
