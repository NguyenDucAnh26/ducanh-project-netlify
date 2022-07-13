import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styles";
import { Typography, Divider, Tag } from "antd";
import Card from "antd/lib/card/Card";
import { getUserListAction } from "../../../redux/actions";
const { Title } = Typography;

function AccountOrders() {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserListAction());
  }, []);
  return (
    <S.InforContainer>
      <S.InfoHeadContainer>
        <Title level={2}>Danh sách đơn hàng</Title>
        <Title level={3}>
          (bạn có:
          {userInfo.data.orders ? userInfo.data.orders.length : "0"}
          đơn hàng)
        </Title>
      </S.InfoHeadContainer>
      <S.InfoFormContainer>
        {userInfo.data.orders
          ? userInfo.data.orders.map((item) => {
              return (
                <Card
                  key={item.id}
                  className="card-account-order"
                  extra={<Tag> {item.payment}</Tag>}
                  title={
                    <div>
                      <p>ID: {item.id}</p>
                      <p>{item.creatAt}</p>
                    </div>
                  }
                >
                  <Divider />
                  {item.cartProducts.map((item) => {
                    return (
                      <div key={item.id}>
                        <S.CardFlex>
                          <S.ImgWrapper>
                            <S.ImgCard src={item.image} />
                          </S.ImgWrapper>
                          <div>
                            <p>x{item.amount}</p>
                            <p>
                              {item.name} / {item.size.toUpperCase()}
                            </p>
                            <p>
                              {item.price.toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                              })}
                            </p>
                          </div>
                        </S.CardFlex>
                        <Divider />
                      </div>
                    );
                  })}
                  <h3>
                    tổng: &nbsp;
                    <span style={{ fontWeight: "600", fontSize: "18px" }}>
                      {item.total.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </h3>
                  <p style={{ fontWeight: "600" }}>địa chỉ giao hàng: </p>
                  <span>
                    {item.address}, {item.commune}, {item.district},
                    {item.province}.
                  </span>
                </Card>
              );
            })
          : null}
      </S.InfoFormContainer>
    </S.InforContainer>
  );
}

export default AccountOrders;
