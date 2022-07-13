import React from "react";
import * as S from "./styles";
import { Badge, Tooltip } from "antd";
import { getCartListAction } from "../../../../redux/actions";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
function Cart() {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartList.data]);

  return (
    <Link to={ROUTES.USER.CART}>
      <S.Icon>
        <Tooltip
          placement="bottomRight"
          title={
            cartList.data.length === 0
              ? "Giỏ hàng chưa có gì :(, chọn mua đồ bạn nhé"
              : cartList.totalAmount.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
          }
        >
          <Badge
            color="#dad6d6"
            showZero
            size="small"
            count={cartList.totalCount}
          >
            <ShoppingCartOutlined
              style={{
                fontSize: "22px",
              }}
            />
          </Badge>
        </Tooltip>
      </S.Icon>
    </Link>
  );
}

export default Cart;
