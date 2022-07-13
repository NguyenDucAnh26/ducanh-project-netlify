import styled from "styled-components";
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
