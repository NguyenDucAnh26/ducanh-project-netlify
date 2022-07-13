import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: ${({ showHeader }) => (showHeader ? "-81px" : "0")};
  left: 0;
  width: 100%;
  height: auto;
  z-index: 10;
  transition: all 0.2s;
  background-color: #151515;
`;

export const HeaderTopBar = styled.div`
  background-color: #151515;
  color: #fff;
  text-align: center;
  height: 30px;
  &:hover {
    background-color: #d9d9d9;
    color: black;
  }
`;
export const styleLink = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
  font-size: 13px;
  line-height: 30px;
  font-weight: 700;
  font-family: Roboto;
  &:hover {
    color: black;
  }
`;
export const HeaderBar = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  transition: all 0.3s;
  &:hover {
    background-color: #ff2459;
  }
`;
export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 990px) {
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
  }
`;
export const Logo = styled.div`
  height: 36px;
`;
export const LogoImg = styled.img`
  width: auto;
  height: 100%;
`;
export const MenuIcon = styled.div`
  width: 68px;
  @media (min-width: 990px) {
    display: none;
  }
`;

export const Menu = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;
export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0 30px;
  height: 50px;
`;
export const MenuItemLink = styled.a`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  padding: 0;
  white-space: nowrap;
  &:hover {
    color: #8e8e8e;
  }
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin: 0 6px;
  cursor: pointer;
  &:hover {
    color: #8e8e8e;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin: 0 6px;
  cursor: pointer;
  &:hover {
    color: #8e8e8e;
  }
`;

export const CartNumber = styled.span`
  top: -2px;
  right: -5px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13x;
  width: 13px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background-color: #2f5acf;
  border-radius: 100px;
  pointer-events: none;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
`;

export const SearchMobile = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchFlex = styled.div`
  width: 50%;
  height: 50%;
`;

export const UserMenu = styled.div`
  &:before {
    position: absolute;
    content: "";
    width: 50%;
    height: 30px;
    top: -17px;
    right: 0;
  }
  opacity: ${({ showUserInfo }) => (showUserInfo ? "1" : "0")};
  visibility: ${({ showUserInfo }) => (showUserInfo ? "none" : "hidden")};
  transform: translateY(1rem);
  transition: all 0.35s;
  position: absolute;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  border-radius: 20px;
  height: 140px;
  width: 230px;
  padding: 20px;
  z-index: 10000;
  top: 28px;
  right: 0;
`;
export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin: 0 6px;
  cursor: pointer;
  &:hover {
    color: #8e8e8e;
  }
  position: relative;
`;
export const UserLists = styled.ul``;
export const UserList = styled.li`
  font-size: 18px;
  line-height: 38px;
`;
