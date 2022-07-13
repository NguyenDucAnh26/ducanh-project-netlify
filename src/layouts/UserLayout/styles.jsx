import styled from "styled-components";

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
