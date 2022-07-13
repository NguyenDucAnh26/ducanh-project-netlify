import styled from "styled-components";
export const CartProductInfo = styled.div`
  width: 60%;
  margin-left: 10px;
  padding: 12px 0 0 8px;
`;
export const ColorSizeInfo = styled.p`
  font-size: 16px;
`;
export const PriceProduct = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
export const PriceDis = styled.p`
  text-decoration: line-through;
  color: #aaa;
  font-weight: 500;
`;
export const Quantity = styled.div`
  align-items: center;
  width: 100px;
  display: flex;
  border: 1px solid #aaa;
  border-radius: 10px;
`;
export const QuantityWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const QuanIcon = styled.div`
  margin: 0 10px;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`;
export const QuanNum = styled.div`
  font-size: 24px;
`;
export const CloseIcon = styled.div`
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`;
