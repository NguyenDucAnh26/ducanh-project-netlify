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
  display: ${({ isShowMenuMobile }) => (isShowMenuMobile ? "block" : "none")};
  @media (min-width: 990px) {
    display: none;
  }
`;
export const MenuWrapper = styled.div`
  position: relative;
  padding-top: 16px;
  padding-bottom: 24px;
  max-height: 500px;
  overflow: hidden auto;
  border-top: 1px solid rgb(217, 217, 217);
  background-color: #fff;
  z-index: 1;
`;

export const MenuInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchMobile = styled.div`
  width: 100%;
  padding: 0 40px;
`;
export const MenuMainWrapper = styled.div`
  padding: 0 20px;
`;

export const Lists = styled.ul`
  margin-bottom: 4px;
  line-height: 1.6rem;
`;

export const ListHead = styled.li`
  font-weight: 700;
`;

// bo suu tap
export const ListMegaItem = styled.li`
  margin: 10px 0;
  height: 40px;
  line-height: 1.4rem;
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
  font-weight: normal;
  width: 100%;
  &:hover {
    color: blue;
  }
`;
export const Link = styled.a`
  /* line-height: 3rem; */
  font-weight: 700;
`;
export const NavList = styled.ul`
  padding: 0 20px;
  margin-top: 10px;
  line-height: 2rem;
`;
export const Nav = styled.li`
  border-bottom: 1px solid #aaa;
`;
export const Row = styled.div`
  cursor: pointer;
  width: 100%;
  margin: 16px 0;
  display: flex;
`;
export const Image = styled.div`
  width: 10%;
  position: relative;
  margin-right: 2px;
`;
export const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
export const Content = styled.div``;
export const Name = styled.div`
  color: #151515;
`;
export const Price = styled.div`
  color: #151515;
`;
