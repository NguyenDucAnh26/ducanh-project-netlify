import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 108%;
  left: 30%;
  width: 40%;
  height: 100%;
  transition: all 0.2s;
  z-index: 10;
  cursor: inherit;
  display: ${({ showSearchProduct }) => (showSearchProduct ? "block" : "none")};
  border-radius: 20px;
  background-color: #151515;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export const MenuWarpper = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: #151515;
  z-index: 1;
`;
export const MenuInner = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  height: 100%;
  padding: 20px;
  color: white;
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
  color: white;
`;
export const Price = styled.div`
  color: white;
`;
