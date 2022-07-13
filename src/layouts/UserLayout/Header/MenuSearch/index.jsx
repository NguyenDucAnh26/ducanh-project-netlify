/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as S from "./styles";
import { ROUTES } from "../../../../constants/routes";
import { generatePath, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const MenuSearch = ({ showSearchProduct }) => {
  const navigate = useNavigate();
  const { productList } = useSelector((state) => state.product);

  const renderProducts = productList.data.map((product) => {
    return (
      <div key={product.id}>
        <S.Row
          onClick={() => {
            const newPath = generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: product.id,
            });
            navigate(newPath);
          }}
        >
          <S.Image>
            <S.Img src={product.productImages[0].url} />
          </S.Image>
          <S.Content>
            <S.Name>{product.name}</S.Name>
            <S.Price>
              {product.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </S.Price>
          </S.Content>
        </S.Row>
      </div>
    );
  });
  return (
    <S.MenuContainer showSearchProduct={showSearchProduct}>
      <S.MenuWarpper>
        <S.MenuInner>
          {productList.data.length === 0 ? (
            <h3 style={{ color: "white", textAlign: "center" }}>
              chưa tìm thấy sản phẩm
            </h3>
          ) : (
            renderProducts
          )}
        </S.MenuInner>
      </S.MenuWarpper>
    </S.MenuContainer>
  );
};
