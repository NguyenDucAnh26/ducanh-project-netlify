import { Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { ROUTES } from "../../../constants/routes";
import {
  SearchOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
  UserAddOutlined,
  InboxOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import "./";
import LogoPage from "../../../assets/img/logooo.png";
import { MenuHeader } from "./MenuHeader";
import { MenuSearch } from "./MenuSearch";
import { MenuHeaderAbout } from "./MenuHeaderAbout";
import { MenuMobile } from "./MenuMobile";
import { logoutAction, getProductListAction } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
const accessToken = localStorage.getItem("accessToken");
function Header({
  isShowMenuHeader,
  setIsShowMenuHeader,
  isShowMenuAbout,
  setIsShowMenuAbout,
  isShowMenuMobile,
  setIsShowMenuMobile,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchProduct, setShowSearchProduct] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showProductSearchMobile, setShowProductSearchMobile] = useState(false);

  const searchIcon = document.getElementById("searchIcon");

  useEffect(() => {
    getProductListAction({ limit: 0 });
  }, []);

  window.onclick = function(event) {
    const inputHeader = document.getElementById("inputHeader");
    if (event.target === searchIcon) {
      inputHeader.focus();
    }

    if (event.target !== searchIcon && event.target !== inputHeader) {
      setShowSearch(false);
    }
  };
  const clickCloseMobile = () => {
    setShowProductSearchMobile(false);
  };
  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  function handleSearchHead(e) {
    dispatch(
      getProductListAction({
        page: 1,
        limit: 5,
        keyword: e.target.value,
      })
    );
  }
  function handleClickUser() {
    if (!accessToken) {
      navigate(ROUTES.LOGIN);
    }
  }

  if (showSearch)
    return (
      <S.HeaderContainer showHeader={showHeader}>
        <S.HeaderTopBar>
          <S.styleLink>Đăng nhập để nhận nhiều ưu đãi</S.styleLink>
        </S.HeaderTopBar>
        <S.SearchWrapper>
          <S.SearchMobile>
            <S.SearchFlex>
              <Form>
                <Form.Item>
                  <Input
                    onInput={() => {
                      setShowSearchProduct(true);
                    }}
                    onChange={(e) => handleSearchHead(e)}
                    id="inputHeader"
                    placeholder="Tìm kiếm sản phẩm..."
                    prefix={<SearchOutlined />}
                    style={{
                      width: "100%",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
                <MenuSearch showSearchProduct={showSearchProduct} />
              </Form>
            </S.SearchFlex>
          </S.SearchMobile>
        </S.SearchWrapper>
      </S.HeaderContainer>
    );
  return (
    <S.HeaderContainer showHeader={showHeader}>
      <S.HeaderTopBar>
        <S.styleLink>Đăng nhập để nhận nhiều ưu đãi</S.styleLink>
      </S.HeaderTopBar>
      <S.HeaderBar>
        <S.HeaderInner>
          <S.MenuIcon
            onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
            style={{
              cursor: "pointer",
            }}
          >
            {isShowMenuMobile === false ? (
              <MenuOutlined />
            ) : (
              <CloseOutlined onClick={() => clickCloseMobile()} />
            )}
          </S.MenuIcon>
          <MenuMobile
            setIsShowMenuMobile={setIsShowMenuMobile}
            isShowMenuMobile={isShowMenuMobile}
            setShowProductSearchMobile={setShowProductSearchMobile}
            showProductSearchMobile={showProductSearchMobile}
          />
          <S.Logo>
            <a href="/">
              <S.LogoImg src={LogoPage}></S.LogoImg>
            </a>
          </S.Logo>
          <S.Menu>
            <S.MenuList>
              <S.MenuItem
                onMouseOver={() => setIsShowMenuHeader(true)}
                onMouseOut={() => setIsShowMenuHeader(false)}
              >
                <S.MenuItemLink>Sản phẩm</S.MenuItemLink>
              </S.MenuItem>
              <MenuHeader
                setIsShowMenuHeader={setIsShowMenuHeader}
                isShowMenuHeader={isShowMenuHeader}
              />
              <S.MenuItem>
                <S.MenuItemLink href="https://www.facebook.com/profile.php?id=100041190876653">
                  Fanpage
                </S.MenuItemLink>
              </S.MenuItem>
              <S.MenuItem
                onMouseOver={() => setIsShowMenuAbout(true)}
                onMouseOut={() => setIsShowMenuAbout(false)}
              >
                <S.MenuItemLink onClick={() => navigate(ROUTES.USER.ABOUT)}>
                  Về Chúng tôi
                </S.MenuItemLink>
              </S.MenuItem>
              <MenuHeaderAbout
                isShowMenuAbout={isShowMenuAbout}
                setIsShowMenuAbout={setIsShowMenuAbout}
              />

              <S.MenuItem onClick={() => navigate(ROUTES.USER.SIZES)}>
                <S.MenuItemLink>Chọn Size</S.MenuItemLink>
              </S.MenuItem>
            </S.MenuList>
          </S.Menu>
          <S.Icons>
            <S.SearchIcon
              id="searchIcon"
              onClick={() => {
                setShowSearch(true);
              }}
            >
              <SearchOutlined
                style={{
                  pointerEvents: "none",
                }}
              />
            </S.SearchIcon>
            <S.UserIcon
              onMouseOver={() => setShowUserInfo(true)}
              onMouseOut={() => setShowUserInfo(false)}
              onClick={() => handleClickUser()}
            >
              <UserOutlined
                style={{
                  pointerEvents: "none",
                }}
              />
              {accessToken ? (
                <S.UserMenu showUserInfo={showUserInfo}>
                  <S.UserLists>
                    <S.UserList
                      onClick={() => navigate(ROUTES.USER.ACCOUNT_INFO)}
                    >
                      <UserAddOutlined style={{ marginRight: "6px" }} />
                      Thông tin cá nhân
                    </S.UserList>
                    <S.UserList
                      onClick={() => navigate(ROUTES.USER.ACCOUNT_ORDERS)}
                    >
                      <InboxOutlined style={{ marginRight: "6px" }} />
                      Danh sách đơn hàng
                    </S.UserList>
                    <S.UserList
                      onClick={() => {
                        dispatch(logoutAction());
                        navigate(ROUTES.USER.HOME);
                        window.location.reload();
                      }}
                    >
                      <PoweroffOutlined style={{ marginRight: "6px" }} />
                      Đăng xuất
                    </S.UserList>
                  </S.UserLists>
                </S.UserMenu>
              ) : null}
            </S.UserIcon>
            <Cart />
          </S.Icons>
        </S.HeaderInner>
      </S.HeaderBar>
    </S.HeaderContainer>
  );
}

export default Header;
