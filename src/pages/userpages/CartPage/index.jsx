import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styles";
import CartProductCard from "./CartProductCard";
import {
  ConfigProvider,
  Typography,
  Form,
  Input,
  Select,
  Radio,
  Button,
  Divider,
  notification,
  Popconfirm,
} from "antd";
import {
  SmileOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import cashPay from "../../../assets/img/cashpay.png";
import {
  createOrderAction,
  getCartListAction,
  getUserInfoAction,
  cleanCartAction,
} from "../../../redux/actions";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const { Title } = Typography;
const { Option } = Select;
const apiProvinces = "https://ducanh-server.herokuapp.com/province";
const apiDistrict = "https://ducanh-server.herokuapp.com/district";
const apiCommune = "https://ducanh-server.herokuapp.com/commune";
const customizeRenderEmpty = () => (
  <div
    style={{
      textAlign: "center",
    }}
  >
    <SmileOutlined
      style={{
        fontSize: 20,
      }}
    />
    <p>Chọn thành phố/tỉnh trước bạn nhé</p>
  </div>
);

const customizeRenderEmpty2 = () => (
  <div
    style={{
      textAlign: "center",
    }}
  >
    <SmileOutlined
      style={{
        fontSize: 20,
      }}
    />
    <p>Chọn Quận/huyện trước bạn nhé </p>
  </div>
);

function CartPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);

  const [payment, setPayment] = useState("cash");
  const [province, setProvince] = useState([]);
  const [provinceID, setProvinceID] = useState();
  const [district, setDistrict] = useState([]);
  const [districtID, setDistrictID] = useState();
  const [commune, setCommune] = useState([]);
  const [districtName, setDistrictName] = useState();
  const [communeName, setCommuneName] = useState();
  const [provinceName, setProvinceName] = useState();
  // const [provinceInput, setProvinceInput] = useState();
  // const [districtInput, setDistrictInput] = useState();
  // const [communeInput, setCommuneInput] = useState();
  const accessToken = localStorage.getItem("accessToken");

  const [changeBorderCart, setChangeBorderCart] = useState(false);
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
    dispatch(getCartListAction());
    dispatch(getUserInfoAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmitForm() {
    form.submit();
  }

  function handleCreateOrder(values) {
    dispatch(
      createOrderAction({
        data: {
          ...values,
          province: provinceName,
          district: districtName,
          commune: communeName,
          payment: payment,
          creatAt: moment().format("DD/MM/YYYY , HH:mm"),
          total: cartList.totalAmount,
          cartProducts: [...cartList.data],
          progress: "new",
          payStatus: "check",
          userId: accessToken ? userInfo.data.id : null,
        },
      })
    );
    dispatch(cleanCartAction());
    notification.success({
      message: "Thanh toán thành công",
      description: "Cảm ơn đã mua hàng của chúng tôi",
    });
  }

  const renderProvince = province.map((item) => {
    return (
      <Option key={item.idProvince} value={item.idProvince}>
        {item.name}
      </Option>
    );
  });

  const districtFilter = district.filter(
    (item) => item.idProvince === provinceID
  );

  const communeFilter = commune.filter(
    (item) => item.idDistrict === districtID
  );

  const renderCommune = communeFilter.map((item) => {
    return (
      <Option key={item.idCommune} value={item.idCommune}>
        {item.name}
      </Option>
    );
  });
  const renderDistrict = districtFilter.map((item) => {
    return (
      <Option key={item.idDistrict} value={item.idDistrict}>
        {item.name}
      </Option>
    );
  });

  const renderCartCard = cartList.data.map((item) => {
    return <CartProductCard data={item} key={item.id} />;
  });
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  };
  const initialValuesUser = {
    name: userInfo.data.fullName,
    phone: userInfo.data.phone,
    email: userInfo.data.email,
    address: userInfo.data.address,
    note: "",
  };
  const shipCost = 25000;
  const totalCart = cartList.totalAmount + shipCost;
  return (
    <S.CartPage>
      <S.CartWarpper>
        <S.WrapperFlex>
          <S.InforContainer>
            <S.InfoHeadContainer>
              <Title level={2}>Thông tin vận chuyển</Title>
              {!accessToken ? (
                <S.InfoHeadContent>
                  Bạn đã có tài khoản? &nbsp;
                  <S.HeadContentLink onClick={() => navigate(ROUTES.LOGIN)}>
                    Đăng nhập ngay
                  </S.HeadContentLink>
                </S.InfoHeadContent>
              ) : (
                `hello ${userInfo.data.fullName} :))`
              )}
            </S.InfoHeadContainer>
            <S.InfoFormContainer>
              <Form
                onFinish={(values) => handleCreateOrder(values)}
                form={form}
                initialValues={!accessToken ? initialValues : initialValuesUser}
              >
                <S.FromFlex>
                  <S.FlexItem>
                    <Form.Item name="name">
                      <Input
                        className="input-payment-cart"
                        placeholder="Họ tên"
                      />
                    </Form.Item>
                  </S.FlexItem>

                  <S.FlexItem>
                    <Form.Item name="phone">
                      <Input
                        className="input-payment-cart"
                        placeholder="Số điện thoại"
                      />
                    </Form.Item>
                  </S.FlexItem>
                </S.FromFlex>
                <Form.Item name="email">
                  <Input className="input-payment-cart" placeholder="Email" />
                </Form.Item>
                <Form.Item name="address">
                  <Input
                    className="input-payment-cart"
                    placeholder="Địa chỉ (Ví dụ: 02 Lương Thế Vinh,Phường An Hải Đông)"
                  />
                </Form.Item>
                <S.FromFlexSelect>
                  <S.FlexItemSelect>
                    <Form.Item>
                      <Select
                        placeholder="Thành phố/tỉnh"
                        className="select-payment-cart"
                        onChange={(value) => {
                          setProvinceName(
                            province.filter(
                              (item) => item.idProvince === value
                            )[0].name
                          );
                          setProvinceID(value);
                        }}
                      >
                        {renderProvince}
                      </Select>
                    </Form.Item>
                  </S.FlexItemSelect>
                  <S.FlexItemSelect>
                    <Form.Item>
                      <ConfigProvider renderEmpty={customizeRenderEmpty}>
                        <Select
                          onChange={(value) => {
                            setDistrictName(
                              district.filter(
                                (item) => item.idDistrict === value
                              )[0].name
                            );
                            setDistrictID(value);
                          }}
                          placeholder="Quận/huyện"
                          className="select-payment-cart"
                        >
                          {renderDistrict}
                        </Select>
                      </ConfigProvider>
                    </Form.Item>
                  </S.FlexItemSelect>
                  <S.FlexItemSelect>
                    <Form.Item>
                      <ConfigProvider renderEmpty={customizeRenderEmpty2}>
                        <Select
                          onChange={(value) => {
                            setCommuneName(
                              commune.filter(
                                (item) => item.idCommune === value
                              )[0].name
                            );
                          }}
                          placeholder="Phường/xã"
                          className="select-payment-cart"
                        >
                          {renderCommune}
                        </Select>
                      </ConfigProvider>
                    </Form.Item>
                  </S.FlexItemSelect>
                </S.FromFlexSelect>
                <Form.Item name="note">
                  <Input
                    className="input-payment-cart"
                    placeholder="Ghi chú (ví dụ: giao giờ hành chính)"
                  />
                </Form.Item>
                <Title level={2}>Hình thức thanh toán</Title>
                <Form.Item
                  styles={{
                    width: "100%",
                  }}
                >
                  <Radio.Group
                    defaultValue="cash"
                    onChange={(e) => setPayment(e.target.value)}
                    className="radio-group-pay-cart"
                    styles={{
                      width: "100%",
                    }}
                  >
                    <S.FlexCollum>
                      <S.FlexCol>
                        <Radio className="radio-pay-cart" value="cash">
                          <S.PayIcon src={cashPay} alt="coolmate" /> Thanh toán
                          khi nhận hàng
                        </Radio>
                      </S.FlexCol>
                      <S.FlexCol>
                        <Radio className="radio-pay-cart" value="momopay">
                          <S.PayIcon
                            src="https://www.coolmate.me/images/momo-icon.png"
                            alt="coolmate"
                          />
                          MOMO
                        </Radio>
                      </S.FlexCol>
                      <S.FlexCol>
                        <Radio className="radio-pay-cart" value="zalopay">
                          <S.PayIcon
                            src="https://www.coolmate.me/images/logo-zalopay.svg"
                            alt="coolmate"
                          />
                          Ví điện tử ZaloPay
                        </Radio>
                      </S.FlexCol>
                    </S.FlexCollum>
                  </Radio.Group>
                  <S.BtnWrap>
                    <Button
                      onClick={() => handleSubmitForm()}
                      className={
                        cartList.data.length === 0
                          ? "btn-no-payment-cart"
                          : "btn-payment-cart"
                      }
                      size="large"
                    >
                      Thanh toán
                    </Button>
                  </S.BtnWrap>
                </Form.Item>
              </Form>
            </S.InfoFormContainer>
          </S.InforContainer>
          <S.CartContainer>
            <S.SideCart changeBorderCart={changeBorderCart}>
              <S.CartHeading>
                <Title level={2}>Giỏ hàng</Title>
                <Popconfirm
                  onCancel={() => setChangeBorderCart(false)}
                  onConfirm={() => {
                    dispatch(cleanCartAction());
                    setChangeBorderCart(false);
                  }}
                  cancelText="Hủy"
                  title="Bạn có chắc muốn xóa giỏ hàng?"
                  icon={
                    <QuestionCircleOutlined
                      style={{
                        height: 200,
                        color: "red",
                      }}
                    />
                  }
                >
                  <S.CleanIcon onClick={() => setChangeBorderCart(true)}>
                    <DeleteOutlined />
                  </S.CleanIcon>
                </Popconfirm>
              </S.CartHeading>

              <Divider />
              <S.BillFlex>
                <S.TitleCol>
                  <S.TitleRow>Tạm tính</S.TitleRow>
                  <S.TitleRow>Giảm giá</S.TitleRow>
                  <S.TitleRow>Phí giao hàng</S.TitleRow>
                </S.TitleCol>
                <S.CalCol>
                  <S.CalRow>
                    {cartList.totalAmount.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </S.CalRow>
                  <S.CalRow>0₫</S.CalRow>
                  <S.CalRow>
                    {shipCost.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </S.CalRow>
                </S.CalCol>
              </S.BillFlex>
              <Divider />
              <S.BillFlex>
                <S.TitleCol>
                  <S.TitleRow>Tổng</S.TitleRow>
                </S.TitleCol>
                <S.CalCol>
                  <S.TotalRow>
                    {totalCart.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </S.TotalRow>
                </S.CalCol>
              </S.BillFlex>
              <Divider />
              <S.ProductsCart>{renderCartCard}</S.ProductsCart>
              {cartList.data.length === 0 ? (
                <S.NotifyNoCart>
                  <Title style={{ color: "#aaa" }} level={3}>
                    Giỏ hàng của bạn hiện đang trống
                  </Title>
                  <S.NotifyNoCartIcon>
                    <ShoppingCartOutlined />
                  </S.NotifyNoCartIcon>
                </S.NotifyNoCart>
              ) : null}
            </S.SideCart>
          </S.CartContainer>
        </S.WrapperFlex>
      </S.CartWarpper>
    </S.CartPage>
  );
}

export default CartPage;
