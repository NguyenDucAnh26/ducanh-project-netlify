import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styles";
import CartProductCard from "./CartProductCard";
import TicketSale from "./TicketSale";
import {
  ConfigProvider,
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
  cleanCartAction,
  getUserListAction,
  updateUserInfoAction,
} from "../../../redux/actions";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import Slider from "react-slick";

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
    <p>bạn cần nhập thông tin phía trước </p>
  </div>
);

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
function CartPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);

  const [payment, setPayment] = useState("cash");
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [commune, setCommune] = useState([]);
  const [provinceID, setProvinceID] = useState();
  const [districtID, setDistrictID] = useState();
  const [communeID, setCommuneID] = useState();

  const accessToken = localStorage.getItem("accessToken");
  const [changeBorderCart, setChangeBorderCart] = useState(false);
  const [sale, setSale] = useState();
  const [saleId, setSaleId] = useState();
  const [pickSale, setPickSale] = useState();

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
    dispatch(getUserListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClickSale(data, index) {
    setSale(data.sale);
    setSaleId(data.id);
    setPickSale(index);
  }
  function handleSubmitForm() {
    form.submit();
  }

  function handleCreateOrder(values) {
    dispatch(
      createOrderAction({
        data: {
          ...values,
          payment: payment,
          creatAt: moment().format("DD/MM/YYYY , HH:mm"),
          total: totalCart,
          cartProducts: [...cartList.data],
          progress: "new",
          payStatus: "check",
          userId: accessToken ? userInfo.data.id : null,
          province: provinceID ? provinceID : userInfo.data.province,
          district: districtID ? districtID : userInfo.data.district,
          commune: communeID ? communeID : userInfo.data.commune,
        },
      })
    );
    dispatch(cleanCartAction());
    notification.success({
      message: "Thanh toán thành công",
      description: "Cảm ơn đã mua hàng của chúng tôi",
    });

    if (saleId) {
      const SaleHaveUse = userInfo.data.sales.find(
        (item) => item.id === saleId
      );

      const SaleHaveUseDecreaseAmount = {
        ...SaleHaveUse,
        amount: SaleHaveUse.amount - 1,
      };
      const SalesNotHaveUse = userInfo.data.sales.filter(
        (item) => item.id !== saleId
      );

      const newSales = saleId && [
        ...SalesNotHaveUse,
        SaleHaveUseDecreaseAmount,
      ];

      dispatch(
        updateUserInfoAction({
          id: userInfo.data.id,
          data: {
            sales: newSales,
          },
        })
      );
    }

    window.location.reload();
  }

  const renderProvince = province.map((item) => {
    return (
      <Option key={item.idProvince} value={item.idProvince}>
        {item.name}
      </Option>
    );
  });

  const districtFilter = district.filter((item) =>
    item.idProvince === userInfo.data.province
      ? userInfo.data.province
      : provinceID
  );

  const communeFilter = commune.filter((item) =>
    item.idDistrict === userInfo.data.district
      ? userInfo.data.district
      : districtID
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
    province: userInfo.data.province,
    district: userInfo.data.district,
    commune: userInfo.data.commune,
    note: "",
  };
  const shipCost = 25000;
  const totalCart =
    cartList.totalAmount +
    shipCost -
    (sale && cartList.data.length !== 0 ? sale : 0);
  return (
    <S.CartPage>
      <S.CartWarpper>
        <S.WrapperFlex>
          <S.InforContainer>
            <S.InfoHeadContainer>
              <S.InfoTitle>Thông tin vận chuyển</S.InfoTitle>
              {!accessToken ? (
                <S.InfoHeadContent>
                  Bạn đã có tài khoản? &nbsp;
                  <S.HeadContentLink
                    onClick={() =>
                      navigate(ROUTES.LOGIN, {
                        state: {
                          prevPath: pathname,
                        },
                      })
                    }
                  >
                    Đăng nhập ngay
                  </S.HeadContentLink>
                </S.InfoHeadContent>
              ) : null}
            </S.InfoHeadContainer>
            <S.InfoFormContainer>
              <ConfigProvider renderEmpty={customizeRenderEmpty}>
                <Form
                  onFinish={(values) => handleCreateOrder(values)}
                  form={form}
                  initialValues={
                    !accessToken ? initialValues : initialValuesUser
                  }
                >
                  <S.FromFlex>
                    <S.FlexItem>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "họ tên là bắt buộc!",
                          },
                        ]}
                        name="name"
                      >
                        <Input
                          className="input-payment-cart"
                          placeholder="Họ tên"
                        />
                      </Form.Item>
                    </S.FlexItem>

                    <S.FlexItem>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Phone là bắt buộc!",
                          },
                        ]}
                        name="phone"
                      >
                        <Input
                          className="input-payment-cart"
                          placeholder="Số điện thoại"
                        />
                      </Form.Item>
                    </S.FlexItem>
                  </S.FromFlex>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Email là bắt buộc!",
                      },
                    ]}
                    name="email"
                  >
                    <Input className="input-payment-cart" placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Địa chỉ là bắt buộc!",
                      },
                    ]}
                    name="address"
                  >
                    <Input
                      className="input-payment-cart"
                      placeholder="Địa chỉ (Ví dụ: 02 Lương Thế Vinh,Phường An Hải Đông)"
                    />
                  </Form.Item>
                  <S.FromFlexSelect>
                    <S.FlexItemSelect>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "vui lòng chọn TP/tỉnh!",
                          },
                        ]}
                        name="province"
                      >
                        <Select
                          placeholder="Thành phố/tỉnh"
                          className="select-payment-cart"
                          onChange={(value) => {
                            setProvinceID(value);
                          }}
                        >
                          {renderProvince}
                        </Select>
                      </Form.Item>
                    </S.FlexItemSelect>
                    <S.FlexItemSelect>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "vui lòng chọn quận/huyện!",
                          },
                        ]}
                        name="district"
                      >
                        {userInfo.data.district ? (
                          <Select
                            onChange={(value) => {
                              setDistrictID(value);
                            }}
                            placeholder="Quận/huyện"
                            className="select-payment-cart"
                          >
                            {renderDistrict}
                          </Select>
                        ) : (
                          <Select
                            onChange={(value) => {
                              setDistrictID(value);
                            }}
                            placeholder="Quận/huyện"
                            className="select-payment-cart"
                          >
                            {renderDistrict}
                          </Select>
                        )}
                      </Form.Item>
                    </S.FlexItemSelect>
                    <S.FlexItemSelect>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "vui lòng chọn phường/xã!",
                          },
                        ]}
                        name="commune"
                      >
                        {userInfo.data.commune ? (
                          <Select
                            onChange={(value) => {
                              setCommuneID(value);
                            }}
                            placeholder="Phường/xã"
                            className="select-payment-cart"
                          >
                            {renderCommune}
                          </Select>
                        ) : (
                          <Select
                            onChange={(value) => {
                              setCommuneID(value);
                            }}
                            placeholder="Phường/xã"
                            className="select-payment-cart"
                          >
                            {renderCommune}
                          </Select>
                        )}
                      </Form.Item>
                    </S.FlexItemSelect>
                  </S.FromFlexSelect>
                  <Form.Item name="note">
                    <Input
                      className="input-payment-cart"
                      placeholder="Ghi chú (ví dụ: giao giờ hành chính)"
                    />
                  </Form.Item>
                  <S.InfoTitle>Hình thức thanh toán</S.InfoTitle>
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
                            <S.PayIcon src={cashPay} alt="coolmate" /> Thanh
                            toán khi nhận hàng
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
              </ConfigProvider>
            </S.InfoFormContainer>
          </S.InforContainer>
          <S.CartContainer>
            <S.SideCart changeBorderCart={changeBorderCart}>
              <S.CartHeading>
                <S.InfoTitle>Giỏ hàng</S.InfoTitle>
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
              <Slider className="slider-homepage" {...settings}>
                {userInfo.data.sales
                  ? userInfo.data.sales.map((item, index) => {
                      if (item.amount > 0) {
                        return (
                          <TicketSale
                            pickSale={pickSale}
                            data={item}
                            index={index}
                            key={item.id}
                            handleClickSale={handleClickSale}
                          />
                        );
                      }
                      return null;
                    })
                  : null}
              </Slider>
              <Divider />
              <S.BillFlex>
                <S.TitleCol>
                  <S.TitleRow>Tạm tính</S.TitleRow>
                  <S.TitleRow>Giảm giá </S.TitleRow>
                  <S.TitleRow>Phí giao hàng</S.TitleRow>
                </S.TitleCol>
                <S.CalCol>
                  <S.CalRow>
                    {cartList.totalAmount.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </S.CalRow>
                  <S.CalRow>
                    {sale && cartList.data.length !== 0
                      ? sale.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })
                      : "0 ₫"}
                  </S.CalRow>
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
                  <S.NotifyCartTtile>
                    Giỏ hàng của bạn hiện đang trống
                  </S.NotifyCartTtile>
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
