import styled from "styled-components";

export const OrderContainer = styled.div`
  height: 100%;
  border-radius: 10px;
`;
export const OrderWrapper = styled.div`
  margin: 24px;
  padding: 24px;
  background-color: #fff;
  max-height: 100%;
  border-radius: 10px;
`;

export const OrderHead = styled.div`
  margin-bottom: 50px;
`;
export const HeadTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;
export const CardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexLeft = styled.div`
  display: flex;
  width: 80%;
`;

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 18px;
`;
export const DetailBody = styled.div``;

export const ProductInfo = styled.p`
  font-size: 16px;
`;
export const ProductPrice = styled.p`
  font-size: 16px;
`;
export const ProductQuan = styled.p`
  font-size: 16px;
`;
export const Info = styled.div`
  padding: 0 40px;
  display: flex;
  justify-content: space-around;
  line-height: 26px;
  margin-bottom: 20px;
`;
export const InfoLeft = styled.div``;
export const InfoRight = styled.div``;

export const InfoHead = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const ImgCard = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 10%;
`;
export const AddProduct = styled.button`
  padding: 4px;
  background-color: #0a0a0a;
  color: #f0f0f0;
  border-radius: 5px;
  margin-bottom: 20px;
  float: right;
  &:hover {
    background-color: #f0f0f0;
    color: #0a0a0a;
  }
`;
