import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./styles";
import {
  getUserListAction,
  updateUserInfoAction,
} from "../../../redux/actions";
import {
  ConfigProvider,
  Typography,
  Form,
  Input,
  Select,
  Button,
  notification,
} from "antd";
import { SmileOutlined } from "@ant-design/icons";

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
    <p>Bạn cần nhập thông tin phía trước</p>
  </div>
);
function AccountInfo() {
  const [updateForm] = Form.useForm();
  const dispatch = useDispatch();
  const [province, setProvince] = useState([]);
  const [provinceID, setProvinceID] = useState();
  const [district, setDistrict] = useState([]);
  const [districtID, setDistrictID] = useState();
  const [commune, setCommune] = useState([]);
  const [districtName, setDistrictName] = useState();
  const [communeName, setCommuneName] = useState();
  const [provinceName, setProvinceName] = useState();
  const { userInfo } = useSelector((state) => state.user);

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
  useEffect(() => {
    if (userInfo.data.id) {
      updateForm.resetFields();
    }
  }, [userInfo.data]);

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

  function handleUpdateInfo(values) {
    dispatch(
      updateUserInfoAction({
        id: userInfo.data.id,
        data: {
          id: userInfo.data.id,
          province: provinceName,
          district: districtName,
          commune: communeName,
          ...values,
        },
      })
    );
    notification.success({
      message: "Update success",
    });
  }
  function handleSubmitForm() {
    updateForm.submit();
  }

  return (
    <S.InforContainer>
      <S.InfoHeadContainer>
        <Title level={2}>Thông tin tài khoản</Title>
      </S.InfoHeadContainer>
      <S.InfoFormContainer>
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
          <Form
            onFinish={(values) => handleUpdateInfo(values)}
            form={updateForm}
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              name: userInfo.data.fullName,
              password: userInfo.data.password,
              phone: userInfo.data.phone,
              email: userInfo.data.email,
              address: userInfo.data.address,
              province: userInfo.data.province,
              district: userInfo.data.district,
              commune: userInfo.data.commune,
            }}
          >
            <Form.Item label="Họ tên" name="name">
              <Input className="input-payment-cart" placeholder="Họ tên" />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phone">
              <Input
                className="input-payment-cart"
                placeholder="Số điện thoại"
              />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input
                disabled
                className="input-payment-cart"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item label="Mật khẩu" name="password">
              <Input
                type="password"
                className="input-payment-cart"
                placeholder="mật khẩu"
              />
            </Form.Item>
            <Form.Item label="Địa chỉ" name="address">
              <Input
                className="input-payment-cart"
                placeholder="Địa chỉ (Ví dụ: 02 Lương Thế Vinh,Phường An Hải Đông)"
              />
            </Form.Item>

            <S.FromFlexSelect>
              <S.FlexItemSelect>
                <Form.Item name="province">
                  <Select
                    placeholder="Thành phố/tỉnh"
                    className="select-payment-cart"
                    onChange={(value) => {
                      setProvinceName(
                        province.find((item) => item.idProvince === value).name
                      );
                      setProvinceID(value);
                    }}
                  >
                    {renderProvince}
                  </Select>
                </Form.Item>
              </S.FlexItemSelect>
              <S.FlexItemSelect>
                <Form.Item name="district">
                  <Select
                    onChange={(value) => {
                      setDistrictName(
                        district.find((item) => item.idDistrict === value).name
                      );
                      setDistrictID(value);
                    }}
                    placeholder="Quận/huyện"
                    className="select-payment-cart"
                  >
                    {renderDistrict}
                  </Select>
                </Form.Item>
              </S.FlexItemSelect>
              <S.FlexItemSelect>
                <Form.Item name="commune">
                  <Select
                    onChange={(value) => {
                      setCommuneName(
                        commune.find((item) => item.idCommune === value).name
                      );
                    }}
                    placeholder="Phường/xã"
                    className="select-payment-cart"
                  >
                    {renderCommune}
                  </Select>
                </Form.Item>
              </S.FlexItemSelect>
            </S.FromFlexSelect>
            <Form.Item
              styles={{
                width: "100%",
              }}
            >
              <S.BtnWrap>
                <Button
                  className="btn-update-account"
                  onClick={() => handleSubmitForm()}
                  size="large"
                >
                  Cập nhật tài khoản
                </Button>
              </S.BtnWrap>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </S.InfoFormContainer>
    </S.InforContainer>
  );
}

export default AccountInfo;
