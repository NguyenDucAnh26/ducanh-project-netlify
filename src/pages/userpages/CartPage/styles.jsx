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
export const WrapperFlex = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 890px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;
export const InforContainer = styled.div`
  width: 60%;
  @media (max-width: 890px) {
    width: 100%;
  }
`;
export const InfoHeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 890px) {
    width: 100%;
  }
`;
export const InfoHeadContent = styled.span`
  padding-bottom: 8px;
`;

export const HeadContentLink = styled.a`
  color: blue;
`;
export const InfoFormContainer = styled.div``;
export const FromFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexItem = styled.div`
  width: 48%;
`;
export const FromFlexSelect = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexItemSelect = styled.div`
  width: 30%;
`;
export const PayIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;
export const FlexCollum = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const FlexCol = styled.div`
  width: 100%;
  margin: 12px 4px;
  border: 1px solid #aaa;
  border-radius: 50px;
  padding: 5px 5px;
`;

export const BtnWrap = styled.div`
  width: 100%;
  height: 100%;
`;

// cart product
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
  border-radius: 14px;
  border: ${({ changeBorderCart }) =>
    changeBorderCart ? "1px solid #ff2459" : "1px solid black"};
  width: 100%;
  height: 100%;
  padding: 10px 40px;
`;
export const BillFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
export const BillTotal = styled.div``;
export const TotalRow = styled.div`
  font-size: 24px;
`;
export const ProductsCart = styled.div`
  width: 100%;
`;
export const CleanIcon = styled.div`
  font-size: 20px;
  color: #ff2459;
  float: right;
  cursor: pointer;
`;
export const CartHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NotifyNoCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NotifyNoCartIcon = styled.div`
  font-size: 22px;
  color: #aaa;
`;
