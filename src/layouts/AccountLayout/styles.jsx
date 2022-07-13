import styled from "styled-components";

export const CartPage = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CartWarpper = styled.div`
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const mainContainer = styled.div`
  margin-top: 81px;
  height: 100%;
`;
export const Layout = styled.div`
  opacity: ${({ isShowMenuHeader, isShowMenuAbout, isShowMenuMobile }) =>
    isShowMenuHeader || isShowMenuAbout || isShowMenuMobile ? "0.8" : "1"};
  background-color: ${({
    isShowMenuHeader,
    isShowMenuAbout,
    isShowMenuMobile,
  }) =>
    isShowMenuHeader || isShowMenuAbout || isShowMenuMobile
      ? " rgba(77, 77, 77, 0.69)"
      : "#fff"};
`;
export const WrapperFlex = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 890px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
export const CartContainer = styled.div`
  width: 40%;
  margin-left: 20px;
  @media (max-width: 890px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;
export const SideCart = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 40px;
  border-left: 1px solid #ccc;
`;

export const TitleCol = styled.div``;
export const CalCol = styled.div``;
export const TitleRow = styled.div`
  margin: 20px 0;
  font-size: 16px;
`;
export const CalRow = styled.div`
  margin: 20px 0;
  font-size: 20px;
`;
export const CartHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
