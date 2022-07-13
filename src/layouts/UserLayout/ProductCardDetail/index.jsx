import React from "react";

import { Card, Form, Radio, Rate, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

import {
  getProductImagesListAction,
  getColorListAction,
  getVariantListAction,
} from "../../../redux/actions";
import * as S from "./styles";
const { Meta } = Card;
function ProductCardDetail({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [colorSelected, setColorSelected] = useState();
  const { productImagesList } = useSelector((state) => state.productImages);
  const { variantList } = useSelector((state) => state.variant);
  const { colorList } = useSelector((state) => state.color);
  const colorFilter = colorList.data.filter(
    (item) => item.productId === data.id
  );

  const renderColorsRadio = colorFilter.map((item, index) => {
    return (
      <Radio.Button
        key={item.id}
        value={item.color}
        className="custom-button-detail-color-detail"
      >
        <S.ImgRadio src={item.url} />
      </Radio.Button>
    );
  });

  useEffect(() => {
    dispatch(getProductImagesListAction());
    dispatch(getColorListAction({ limit: 1000 }));
    dispatch(getVariantListAction());
  }, []);

  const imagesFilter = productImagesList.data.filter(
    (item) =>
      item.productId === data.id &&
      item.color === (colorSelected ? colorSelected : item.color)
  );

  const renderImagePresentProduct = imagesFilter.map((item, index) => {
    if (index === 0) {
      return (
        <S.ProductImg
          id="img-contain"
          alt="coomate"
          src={item.url}
          key={item.id}
        />
      );
    }
    return null;
  });

  const renderImagePresentHoverProduct = imagesFilter.map((item, index) => {
    if (index === 1) {
      return (
        <S.ProductImgHover
          id="img-hover"
          alt="coomate"
          src={item.url}
          key={item.id}
        />
      );
    }
    return null;
  });

  let totalRate = 0;

  data.comments.forEach((item) => {
    totalRate += item.rate;
  });
  let totalRateAverage = totalRate / data.comments.length;

  function ProductName() {
    return (
      <>
        <Radio.Group onChange={(e) => setColorSelected(e.target.value)}>
          {renderColorsRadio}
        </Radio.Group>
        <S.ProductNameWarpper>
          <S.ProductNameContent>
            <a href="/">{data.name}</a>
          </S.ProductNameContent>
        </S.ProductNameWarpper>
      </>
    );
  }
  function ProductPrice() {
    return (
      <>
        <S.ProductPriceWarpper>
          <S.ProductPrice>
            {data.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </S.ProductPrice>
          {/* <S.ProductNewPrice>300.000đ</S.ProductNewPrice> */}
          {/* <S.ProductPriceSale>-30%</S.ProductPriceSale> */}
        </S.ProductPriceWarpper>
        {/* star rating */}
        <ProductRateStar />
      </>
    );
  }

  function ProductRateStar() {
    return (
      <S.StarWrapper>
        <S.StarGrid>
          <Rate
            style={{ fontSize: "12px" }}
            disabled
            defaultValue={totalRateAverage}
            show
          />
          <S.RateNumbers>({data.comments.length})</S.RateNumbers>
        </S.StarGrid>
      </S.StarWrapper>
    );
  }

  return (
    <Card
      className="product-card-collection"
      style={{
        minHeight: "522px",
        width: 240,
      }}
      cover={
        productImagesList.loading ||
        variantList.loading ||
        colorList.loading ? (
          <S.ProductImgWrapper>
            <Skeleton.Image className="skeletion-collection" />
          </S.ProductImgWrapper>
        ) : (
          <S.ProductImgWrapper>
            <S.ProductImgLink
              onClick={() => {
                const newPath = generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                  id: data.id,
                });
                navigate(newPath, {
                  state: colorSelected ? colorSelected : colorFilter[0].color,
                });
              }}
            />
            {renderImagePresentProduct}
            {renderImagePresentHoverProduct}
            <S.SizeProduct id="show-size">
              <Form>
                <Form.Item name="radio-button">
                  <Radio.Group
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* {renderSizeProductColor} */}
                  </Radio.Group>
                </Form.Item>
              </Form>
            </S.SizeProduct>
          </S.ProductImgWrapper>
        )
      }
    >
      <Meta
        className="product-card-meta-collection"
        title={
          productImagesList.loading ||
          variantList.loading ||
          colorList.loading ? (
            <Skeleton.Input active block="block" size="large" />
          ) : (
            <ProductName />
          )
        }
        description={
          productImagesList.loading ||
          variantList.loading ||
          colorList.loading ? (
            <Skeleton.Input active block="block" size="large" />
          ) : (
            <ProductPrice />
          )
        }
      />
    </Card>
  );
}

export default ProductCardDetail;
