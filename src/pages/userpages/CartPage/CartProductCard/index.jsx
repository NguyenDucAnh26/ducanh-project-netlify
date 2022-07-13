import React from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { Image, Card } from "antd";
import {
  CloseOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  increaseAction,
  removeAction,
  decreaseAction,
} from "../../../../redux/actions";

function CartProductCard({ data }) {
  const dispatch = useDispatch();
  const PriceProduct = data.price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });

  return (
    <Card
      title={data.name}
      className="product-card-cart"
      extra={
        <S.CloseIcon>
          <CloseOutlined onClick={() => dispatch(removeAction(data.id))} />
        </S.CloseIcon>
      }
    >
      <Image className="product-cart-image" width={100} src={data.image} />
      <S.CartProductInfo>
        <S.ColorSizeInfo>
          {data.color}/ <span>{data.size.toUpperCase()}</span>
        </S.ColorSizeInfo>
        <S.PriceProduct>{PriceProduct}</S.PriceProduct>
        <S.PriceDis>179.000đ</S.PriceDis>
        <S.QuantityWrap>
          <S.Quantity>
            <S.QuanIcon>
              <MinusCircleOutlined
                onClick={() => dispatch(decreaseAction(data.id))}
              />
            </S.QuanIcon>
            <S.QuanNum>{data.amount}</S.QuanNum>
            <S.QuanIcon>
              <PlusCircleOutlined
                onClick={() => dispatch(increaseAction(data.id))}
              />
            </S.QuanIcon>
          </S.Quantity>
        </S.QuantityWrap>
      </S.CartProductInfo>
    </Card>
  );
}

export default CartProductCard;
