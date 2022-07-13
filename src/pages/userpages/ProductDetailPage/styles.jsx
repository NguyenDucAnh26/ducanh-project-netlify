import styled from "styled-components";

export const ProductDetail = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const ProductDetailContainer = styled.div`
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
export const DetailMain = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 16px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const ProductImgWrapper = styled.div`
  position: relative;
  width: 60%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
export const ChangeArrowRight = styled.div`
  position: absolute;
  height: 26px;
  width: 26px;
  top: 50%;
  right: 18px;
  font-size: 22px;
  cursor: pointer;
  background-color: #aaa;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ChangeArrowLeft = styled.div`
  position: absolute;
  height: 26px;
  width: 26px;
  top: 50%;
  left: 18px;
  font-size: 22px;
  cursor: pointer;
  background-color: #aaa;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListImage = styled.div`
  position: absolute;
  top: 1%;
  left: 2%;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;
export const ImageOfListWrapper = styled.div`
  position: relative;
  display: block;
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.26666666666666666);
  opacity: ${({ isOpacity }) => (isOpacity ? "1" : "0.4")};

  transition: all 0.3s;
  cursor: pointer;
  @media (max-width: 496px) {
    width: 40px;
    height: 40px;
  }
  margin: 5px 0;
`;
export const ImageOfList = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ProductImages = styled.div`
  position: relative;
  width: 100%;
  padding-top: 130%;
`;
export const productImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: zoom-in;
  object-fit: cover;
`;

export const ProductContent = styled.div`
  padding-left: 60px;
  flex: 1;
  width: 40%;
  @media (max-width: 991px) {
    margin-top: 20px;
    width: 100%;
    padding-left: 12px;
  }
`;

export const ProductPriceWarpper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ProductPrice = styled.span`
  font-size: 20px;
  color: black;
  font-weight: 500;
`;

export const ProductNewPrice = styled.span`
  font-size: 20px;
  text-decoration: line-through;
  color: #c4c4c4;
  font-weight: 400;
  margin: 0 10px 0 15px;
`;

export const ProductPriceSale = styled.span`
  font-size: 16px;
  color: red;
  font-weight: 500;
`;
export const FormProduct = styled.div`
  margin-top: 40px;
`;
export const PickTitle = styled.span`
  font-size: 14px;
  font-weight: 450;
`;
export const ShowTitleContent = styled.span`
  font-size: 16px;
  font-weight: 600;
  padding-left: 4px;
`;
export const ColorShow = styled.div`
  margin-bottom: 10px;
`;
export const SizeShow = styled.div`
  margin-bottom: 10px;
`;

export const ImgRadio = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
export const SizeButton = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  background-color: #ccc;
  border-radius: 10px;
  padding: 10px;
  &:focus-within {
    background-color: #000;
    color: #fff;
  }
`;
export const GridRow = styled.span`
  display: flex;
  @media (max-width: 346px) {
    flex-direction: column;
  }
`;
export const BonusContent = styled.div``;
export const BonusIcon = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin-bottom: 10px;
`;
export const IconImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
`;
export const BonusDes = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
export const BonusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;
export const OutstandContent = styled.div``;

export const AboutProduct = styled.div``;
export const AboutContent = styled.p`
  font-size: 16px;
  line-height: 22px;
`;
export const AboutImage = styled.img`
  margin-top: 10px;
  width: 100%;
  height: 100%;
`;
export const PreviewProduct = styled.div``;
export const PreviewTitle = styled.div`
  display: flex;
`;
export const RateCount = styled.p``;

export const BreadcrumbContainer = styled.div``;
export const ClickLogIn = styled.span`
  margin-left: 10px;
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
export const SuggestProductsContainer = styled.div`
  margin-top: 32px;
`;
export const ProductsSave = styled.div``;
export const ProductSameCategory = styled.div`
  margin-bottom: 22px;
`;
export const TitleProducts = styled.h4`
  margin-bottom: 22px;
  font-weight: 600;
  text-align: center;
`;
export const CardWrapper = styled.div`
  padding: 0 8px;
`;
