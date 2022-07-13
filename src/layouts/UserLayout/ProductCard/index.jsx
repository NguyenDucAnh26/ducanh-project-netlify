import React from "react";

import { Card, Form, notification, Radio, Skeleton } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

import * as S from "./styles";
import {
  getProductImagesListAction,
  getColorListAction,
  getProductListAction,
  createCartAction,
  getVariantListAction,
  getCommentListAction,
} from "../../../redux/actions";
const { Meta } = Card;
function ProductCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productImagesList } = useSelector((state) => state.productImages);
  const { variantList } = useSelector((state) => state.variant);
  useEffect(() => {
    dispatch(getProductImagesListAction());
    dispatch(getProductListAction());
    dispatch(getColorListAction());
    dispatch(getVariantListAction());
    dispatch(getCommentListAction());
    dispatch(getCommentListAction({ productId: data.productId }));
  }, []);

  const productImagesByData = productImagesList.data.filter(
    (item) => item.productId === data.product.id && item.color === data.color
  );

  const sizebyDataColor = variantList.data.filter(
    (item) => item.productId === data.product.id && item.color === data.color
  );
  const renderSizeProductColor = sizebyDataColor.map((item) => {
    return (
      <Radio.Button
        key={item.id}
        name="radio-button"
        className="size-product-btn"
        value={item.size}
      >
        {item.size.toUpperCase()}
      </Radio.Button>
    );
  });

  const renderImagePresentProduct = productImagesByData.map((item, index) => {
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
  const renderImagePresentHoverProduct = productImagesByData.map(
    (item, index) => {
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
    }
  );

  function ProductName() {
    return (
      <S.ProductNameWarpper
        onClick={() => {
          const newPath = generatePath(ROUTES.USER.PRODUCT_DETAIL, {
            id: data.product.id,
          });
          navigate(newPath);
        }}
      >
        <S.ProductNameContent>
          <a href="/">
            {data.product.name}-{" "}
            {data.color.charAt(0).toUpperCase() + data.color.slice(1)}
          </a>
        </S.ProductNameContent>
      </S.ProductNameWarpper>
    );
  }
  function ProductPrice() {
    const PriceProduct = data.product.price.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });

    return (
      <>
        <S.ProductPriceWarpper
          onClick={() => {
            const newPath = generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: data.product.id,
            });
            navigate(newPath);
          }}
        >
          <S.ProductPrice>{PriceProduct}</S.ProductPrice>
          {/* <S.ProductNewPrice>300.000đ</S.ProductNewPrice> */}
          {/* <S.ProductPriceSale>-30%</S.ProductPriceSale> */}
        </S.ProductPriceWarpper>
        {/* star rating */}
      </>
    );
  }
  function handleClickSize(e) {
    dispatch(
      createCartAction({
        data: {
          size: e.target.value,
          color: data.color,
          price: data.product.price,
          name: data.product.name,
          amount: 1,
          variantId: sizebyDataColor.filter(
            (item) => item.size === e.target.value
          )[0],
          image: productImagesByData[0].url,
        },
      })
    );
    notification.success({
      message: "Thêm vào giỏ hàng thành công",
      description: "Mua sắm vui vẽ",
    });
  }

  return (
    <Card
      className="product-card-collection"
      style={{
        minHeight: "560px",
        width: 240,
      }}
      cover={
        productImagesList.loading || variantList.loading ? (
          <S.ProductImgWrapper>
            <Skeleton.Image className="skeletion-collection" />
          </S.ProductImgWrapper>
        ) : (
          <S.ProductImgWrapper>
            <S.ProductImgLink
              onClick={() => {
                const newPath = generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                  id: data.product.id,
                });
                navigate(newPath, { state: data.color });
              }}
            />
            {renderImagePresentProduct}
            {renderImagePresentHoverProduct}
            <S.SizeProduct id="show-size">
              <Form>
                <Form.Item name="radio-button">
                  <Radio.Group
                    onChange={(e) => handleClickSize(e)}
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    {renderSizeProductColor}
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
          productImagesList.loading || variantList.loading ? (
            <Skeleton.Input active block="block" size="large" />
          ) : (
            <ProductName />
          )
        }
        description={
          productImagesList.loading || variantList.loading ? (
            <Skeleton.Input active block="block" size="large" />
          ) : (
            <ProductPrice />
          )
        }
      />
    </Card>
  );
}

export default ProductCard;
