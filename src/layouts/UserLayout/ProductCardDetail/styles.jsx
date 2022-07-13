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
  display: none !important;
  width: 100%;
`;
export const ProductImgWrapper = styled.div`
  position: relative;

  &:hover #img-contain {
    display: none;
  }

  &:hover #img-hover {
    display: block !important;
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
  display: flex;
  justify-content: flex-start;
`;
export const ProductNameContent = styled.h3`
  font-weight: 700;
  font-size: 12px;
`;

export const ProductPriceWarpper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ProductPrice = styled.span`
  font-size: 12px;
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
  font-size: 12px;
  margin-left: 2px;
`;
export const ImgRadio = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const RibbonRightCorner = styled.div`
  pointer-events: none;
  top: -4px;
  right: -6px;
  width: 130px;
  height: 130px;
  overflow: hidden;
  position: absolute;

  &:before {
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid #171717;
    border-top-color: transparent;
    border-right-color: transparent;
  }
  &:after {
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid #171717;
    border-top-color: transparent;
    border-right-color: transparent;
  }
`;
export const RibbonContent = styled.span`
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #171717;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #ededed;
  font: 700 18px/1 "Lato", sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
`;
