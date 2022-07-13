import React from "react";

import * as S from "./styles";
import { Card, Button, Select, Divider, notification } from "antd";
import {
  getOrderDetailAction,
  updateOrderAction,
} from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ROUTES } from "../../../constants/routes";

const { Option } = Select;
function OrderDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOrderDetailAction({ id: id }));
  }, [id]);
  const { orderDetail } = useSelector((state) => state.order);
  const [progress, setProgress] = useState(orderDetail.data.progress);
  const [payStatus, setPayStatus] = useState(orderDetail.data.progress);
  function handleUpdateStatus() {
    dispatch(
      updateOrderAction({
        id: id,
        data: {
          ...orderDetail,
          progress: progress,
          payStatus: payStatus,
        },
      })
    );
    notification.success({
      message: "Update success",
    });
  }
  return (
    <S.OrderContainer>
      <S.OrderWrapper>
        <S.OrderHead>
          <S.HeadTitle>Orders Detail</S.HeadTitle>
          <S.AddProduct onClick={() => navigate(ROUTES.ADMIN.ORDER_LIST)}>
            Order List
          </S.AddProduct>
        </S.OrderHead>
        <S.DetailBody>
          <S.Info>
            <S.InfoLeft>
              <S.InfoHead>Name: </S.InfoHead>
              <span>{orderDetail.data.name}</span>
              <br />
              <S.InfoHead>Phone: </S.InfoHead>
              <span>{orderDetail.data.phone}</span>
              <br />
              <S.InfoHead>Email: </S.InfoHead>
              <span>{orderDetail.data.email}</span>
              <br />
              <S.InfoHead>Date: </S.InfoHead>
              <span>{orderDetail.data.creatAt}</span>
              <br />
            </S.InfoLeft>
            <S.InfoRight>
              <S.InfoHead>Address: </S.InfoHead>
              <span>{orderDetail.data.address}</span>
              <br />
              <S.InfoHead>Provine: </S.InfoHead>
              <span>{orderDetail.data.province}</span>
              <br />
              <S.InfoHead>District: </S.InfoHead>
              <span> {orderDetail.data.district}</span>
              <br />
              <S.InfoHead>Commune: </S.InfoHead>
              <span>{orderDetail.data.commune}</span>
              <br />
            </S.InfoRight>
          </S.Info>
          <Divider />
          <Select
            onChange={(value) => setProgress(value)}
            placeholder="progress Status"
            style={{
              width: "20%",
              margin: "0 10px",
            }}
          >
            <Option value="new">New</Option>
            <Option value="prepare">Prepare</Option>
            <Option value="deliveried">Deliveried</Option>
          </Select>
          <Select
            onChange={(value) => setPayStatus(value)}
            placeholder="Pay status"
            style={{
              width: "20%",
              margin: "0 10px",
            }}
          >
            <Option value="check"> check</Option>
            <Option value="paid"> Paid</Option>
            <Option value="notpay">Not Pay</Option>
          </Select>
          <Button onClick={handleUpdateStatus}>Save</Button>
          <Divider />
          <S.InfoHead>Total: </S.InfoHead>
          &nbsp;
          {orderDetail.data.total ? (
            <span>
              {orderDetail.data.total.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          ) : null}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <S.InfoHead>Progress:</S.InfoHead>
          &nbsp;
          {orderDetail.data.progress}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <S.InfoHead>Pay status:</S.InfoHead>
          &nbsp;
          {orderDetail.data.payStatus}
          {orderDetail.data.cartProducts
            ? orderDetail.data.cartProducts.map((item) => {
                return (
                  <Card
                    key={item.id}
                    style={{
                      margin: "10px 0",
                    }}
                  >
                    <S.CardFlex>
                      <S.FlexLeft>
                        <S.ImgWrapper>
                          <S.ImgCard src={item.image} alt="coolmate" />
                        </S.ImgWrapper>

                        <div>
                          <S.ProductName>{item.name}</S.ProductName>
                          <S.ProductInfo>
                            <span style={{ fontWeight: "500" }}>Size: </span>
                            {item.size.toUpperCase()}
                          </S.ProductInfo>
                          <S.ProductInfo>
                            <span style={{ fontWeight: "500" }}>Color: </span>
                            {item.color}
                          </S.ProductInfo>
                        </div>
                      </S.FlexLeft>
                      <div>
                        <S.ProductPrice>
                          {item.price.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </S.ProductPrice>
                        <S.ProductQuan>
                          <span style={{ fontWeight: "500" }}>Quantity: </span>
                          {item.amount}
                        </S.ProductQuan>
                      </div>
                    </S.CardFlex>
                  </Card>
                );
              })
            : null}
        </S.DetailBody>
      </S.OrderWrapper>
    </S.OrderContainer>
  );
}

export default OrderDetailPage;
