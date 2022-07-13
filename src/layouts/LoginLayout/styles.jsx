import styled from "styled-components";

export const mainContainer = styled.div`
  position: relative;
  margin-top: 81px;
  height: 100%;
  min-height: 128vh;
`;
export const Background = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
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
