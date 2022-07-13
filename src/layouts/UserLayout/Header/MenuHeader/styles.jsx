import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 98.5%;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  z-index: 10;
  cursor: inherit;
  display: ${({ isShowMenuHeader }) => (isShowMenuHeader ? "block" : "none")};
`;
export const MenuWarpper = styled.div`
  position: relative;
  background-color: #151515;
  z-index: 1;
`;
export const MenuInner = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  height: 100%;
`;
export const MegaMenuItem = styled.div`
  font-size: 14px;
  letter-spacing: 0.03em;
`;

export const ListMegaItem = styled.li`
  margin: 10px 0;
`;
export const Link = styled.a`
  line-height: 1.3rem;
  font-weight: 700;
`;
export const HeadLink = styled.a`
  display: block;
  color: #8e8e8e;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const SubLink = styled.span`
  display: block;
  font-size: 80%;
  margin-top: -4%;
  font-weight: normal;
  width: 100%;
  &:hover {
    color: blue;
  }
`;
export const LinkProduct = styled.a`
  color: #8e8e8e;
  font-weight: 700;
`;

export const GridTwoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  top: -12px;
`;

export const GridColumn = styled.div`
  width: 50%;
`;

export const Divider = styled.div`
  width: 35px;
  height: 1px;
  background-color: #e9e9e9;
`;
