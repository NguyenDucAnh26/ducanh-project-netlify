import styled from "styled-components";

// image
export const ProductImgLink = styled.a`
  position: absolute;
  left: 0;
  height: 70%;
  width: 100%;
`;

export const ProductImg = styled.img`
  display: block;
  width: 100%;
  height: 80%;
`;
export const ProductImgHover = styled.img`
  display: none;
  width: 100%;
`;
export const ProductImgWrapper = styled.div`
  position: relative;

  &:hover #img-contain {
    display: none;
  }

  &:hover #img-hover {
    display: block;
  }
  &:hover #show-size {
    opacity: 1;
    bottom: 40px;
  }
`;

// size
export const SizeProduct = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: transparent;
  height: 20px;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 15px 12px;
  opacity: 0;
  visibility: visible;
  transform: translate3d(0, 20px, 0);
  transition: all 0.2s;
`;

export const ProductNameWarpper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const ProductNameContent = styled.h3`
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  font-weight: 700;
  font-size: 14px;
`;

export const ProductPriceWarpper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  color: red;
  font-weight: 500;
`;

export const ProductNewPrice = styled.span`
  font-size: 14px;
  text-decoration: line-through;
  color: #c4c4c4;
  font-weight: 400;
  margin: 0 10px 0 15px;
`;

export const ProductPriceSale = styled.span`
  font-size: 14px;
  color: red;
  font-weight: 500;
`;

export const StarWrapper = styled.div``;
export const StarGrid = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const StarProduct = styled.span`
  margin: 0 3px;
  color: #2f5acf;
`;
export const RateNumbers = styled.span`
  color: #2f5acf;
`;
export const BonusIcon = styled.div``;
export const IconImg = styled.img``;
export const BonusDes = styled.img``;
