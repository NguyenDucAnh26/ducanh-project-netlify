import React from "react";
import * as S from "./styles";
import { Typography, Form, Input, Button, Divider, Checkbox } from "antd";
import { FacebookFilled, GooglePlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginAction } from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

const { Title } = Typography;
function Login() {
  const [loginForm] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData } = useSelector((state) => state.user);
  useEffect(() => {
    if (loginData.error) {
      loginForm.setFields([
        {
          name: "email",
          errors: [" "],
        },
        {
          name: "password",
          errors: [loginData.error],
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginData.error]);

  const handleLogin = (values) => {
    dispatch(
      loginAction({
        data: {
          email: values.email,
          password: values.password,
        },
        callback: {
          goToDashboard: () => navigate(ROUTES.ADMIN.DASHBOARD),
          goToHome: () => {
            navigate(ROUTES.USER.HOME);
            window.location.reload();
          },
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
          Đăng nhập
        </Title>

        <S.FormLogin>
          <Form
            form={loginForm}
            initialValues={{ remember: true }}
            onFinish={(values) => handleLogin(values)}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                className="input-login"
                placeholder="Email/Số điện thoại của bạn"
              />
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
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="checkbox-login">Remember me</Checkbox>
            </Form.Item>
            <Form.Item className="form-login">
              <Button htmlType="submit" className="btn-login">
                Đăng nhập
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
                Đăng nhập với Facebook
                <FacebookFilled />
              </Button>
            </Form.Item>

            <Form.Item style={{ pointerEvents: "none" }}>
              <Button
                style={{ pointerEvents: "none" }}
                className="btn-login btn-login-gg"
              >
                Đăng nhập với Google
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
            bạn chưa có tài khoản? &nbsp;
            <S.LinkToLog>
              <Link
                to={ROUTES.REGISTER}
                style={{
                  color: "#5b5be7",
                }}
              >
                Đăng ký
              </Link>
            </S.LinkToLog>
          </div>
        </S.FormLogin>
      </S.Inside>
    </S.LoginContainer>
  );
}

export default Login;
