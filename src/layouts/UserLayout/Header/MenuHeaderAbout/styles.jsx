import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  z-index: 10;
  cursor: inherit;
  display: ${({ isShowMenuAbout }) => (isShowMenuAbout ? "block" : "none")};
  /* display: block; */
`;
export const MenuWarpper = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 24px;
  min-height: 300px;
  background-color: #fff;
  z-index: 1000;
`;
export const MenuInner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;
export const MegaMenuItem = styled.div`
  flex: 1;
  padding: 0 15px;
  font-weight: 500;
  font-size: 13px;
  line-height: 200%;
  letter-spacing: 0.03em;
  color: #000;
`;
export const MenuHead = styled.a`
  display: block;
  color: #8e8e8e;
  margin-bottom: 20px;
  font-weight: 700;
  &:hover {
    color: #8e8e8e;
  }
`;
export const Grid = styled.div`
  display: flex;
  display: -webkit-flex;
  -moz-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -9px;
  margin-right: -9px;
  padding: 0;
  position: relative;
  float: none;
`;
export const GridColumn = styled.a`
  width: 25%;
`;
export const GridImage = styled.div``;
export const GridContent = styled.div`
  line-height: 1.1rem;
  margin-top: 10px;
`;

export const Content = styled.span`
  font-size: 13px;
  font-weight: 700;
`;
export const SubContent = styled.span`
  font-size: 11px;
  font-weight: 500;
`;
