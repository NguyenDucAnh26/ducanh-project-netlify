import styled from "styled-components";

export const HeaderContainer = styled.div`
  @media (max-width: 724px) {
    display: none;
  }
`;
export const HeaderGrid = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  /* align-items: center; */
`;
export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  @media (max-width: 724px) {
    display: none;
  }
`;
export const HeaderMenu = styled.div`
  display: flex;
  @media (max-width: 724px) {
    display: none;
  }
`;
export const MenuItem = styled.div`
  cursor: pointer;
  margin: 0 6px;
  color: black;
`;
