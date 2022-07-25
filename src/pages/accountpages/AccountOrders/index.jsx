import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styles";
import { Typography, Divider, Tag, Popconfirm, message } from "antd";
import Card from "antd/lib/card/Card";
import { getUserListAction, deleteOrderAction } from "../../../redux/actions";
import axios from "axios";
const { Title } = Typography;
const apiProvinces = "https://ducanh-server.herokuapp.com/province";
const apiDistrict = "https://ducanh-server.herokuapp.com/district";
const apiCommune = "https://ducanh-server.herokuapp.com/commune";
function AccountOrders() {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [commune, setCommune] = useState([]);
  const { userInfo } = useSelector((state) => state.user);
  const confirm = (deleteId) => {
    dispatch(deleteOrderAction({ id: deleteId }));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(apiProvinces).then(function(response) {
      const provinces = response.data;
      setProvince(provinces);
    });
    axios.get(apiDistrict).then(function(response) {
      const districts = response.data;
      setDistrict(districts);
    });
    axios.get(apiCommune).then(function(response) {
      const communes = response.data;
      setCommune(communes);
    });
    dispatch(getUserListAction());
  }, []);

  return (
    <S.InforContainer>
      <S.InfoHeadContainer>
        <Title level={2}>Danh sách đơn hàng</Title>
        <Title level={3}>
          ({userInfo.data.orders ? userInfo.data.orders.length : "0"}
          &nbsp; đơn hàng)
        </Title>
      </S.InfoHeadContainer>
      <S.InfoFormContainer>
        {userInfo.data.orders
          ? userInfo.data.orders.map((item) => {
              return (
                <Card
                  key={item.id}
                  className="card-account-order"
                  extra={
                    <>
                      <Tag>
                        {item.progress === "new"
                          ? "mới"
                          : item.progress === "deliveried"
                          ? "đang vận chuyển"
                          : "chuẩn bị giao hàng"}
                      </Tag>
                      <Tag>
                        {item.payment === "cash" ? "tiền mặt" : "online"}
                      </Tag>
                      <Popconfirm
                        title="Bạn có chắc muốn hủy đơn hàng này?"
                        onConfirm={() => confirm(item.id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <S.BtnDelete>Hủy đơn</S.BtnDelete>
                      </Popconfirm>
                    </>
                  }
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
                    {item.address}, &nbsp;
                    {commune.length !== 0 &&
                      commune.find((item2) => item2.idCommune === item.commune)
                        .name}
                    , &nbsp;
                    {district.length !== 0 &&
                      district.find(
                        (item2) => item2.idDistrict === item.district
                      ).name}
                    ,&nbsp;
                    {province.length !== 0 &&
                      province.find(
                        (item2) => item2.idProvince === item.province
                      ).name}
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
