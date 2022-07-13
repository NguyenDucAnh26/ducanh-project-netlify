import React from "react";

import * as S from "./styles";
import { Typography, Form, Input, Button, Divider } from "antd";
import { FacebookFilled, GooglePlusOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../constants/routes";
import { registerAction } from "../../../redux/actions";
import moment from "moment";
const { Title } = Typography;
function Register() {
  const [registerForm] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registerData } = useSelector((state) => state.user);
  useEffect(() => {
    if (registerData.error) {
      registerForm.setFields([
        {
          name: "email",
          errors: [registerData.error],
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerData.error]);
  const handleRegister = (values) => {
    dispatch(
      registerAction({
        data: {
          fullName: values.fullName,
          phone: values.phone,
          email: values.email,
          password: values.password,
          role: "user",
          creatAt: moment().format("DD/MM/YYYY , HH:mm"),
        },
        callback: {
          goToLogin: () => navigate(ROUTES.LOGIN),
        },
      })
    );
  };
  return (
    <S.LoginContainer>
      <S.Inside>
        <Title
          style={{
            color: "white",
            textAlign: "center",
          }}
          level={2}
        >
          Đăng ký
        </Title>

        <S.FormLogin>
          <Form
            initialValues={{ remember: true }}
            onFinish={(values) => handleRegister(values)}
            autoComplete="off"
            form={registerForm}
            name="registerForm"
          >
            <Form.Item
              name="fullName"
              rules={[
                { required: true, message: "Please input your fullName!" },
              ]}
            >
              <Input className="input-login" placeholder="Tên của bạn" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <Input
                className="input-login"
                placeholder="Số điện thoại của bạn"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
            >
              <Input className="input-login" placeholder="Email của bạn" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                className="input-login"
                placeholder="Mật khẩu của bạn"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                className="input-login"
                placeholder="Nhập lại Mật khẩu của bạn"
              />
            </Form.Item>
            <Form.Item className="form-login">
              <Button
                htmlType="submit"
                loading={registerData.loading}
                className="btn-login"
              >
                Đăng ký
              </Button>
            </Form.Item>
            <Divider
              className="divider-login"
              style={{
                color: "white",
              }}
            >
              Hoặc
            </Divider>
            <Form.Item style={{ pointerEvents: "none" }}>
              <Button
                style={{ pointerEvents: "none" }}
                className="btn-login btn-login-fb"
              >
                Đăng ký với Facebook
                <FacebookFilled />
              </Button>
            </Form.Item>

            <Form.Item style={{ pointerEvents: "none" }}>
              <Button
                style={{ pointerEvents: "none" }}
                className="btn-login btn-login-gg"
              >
                Đăng ký với Google
                <GooglePlusOutlined />
              </Button>
            </Form.Item>
          </Form>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              color: "white",
            }}
          >
            bạn đã có tài khoản? &nbsp;
            <S.LinkToLog>
              <Link
                style={{
                  color: "#5b5be7",
                }}
                to={ROUTES.LOGIN}
              >
                Đăng nhập
              </Link>
            </S.LinkToLog>
          </div>
        </S.FormLogin>
      </S.Inside>
    </S.LoginContainer>
  );
}

export default Register;
