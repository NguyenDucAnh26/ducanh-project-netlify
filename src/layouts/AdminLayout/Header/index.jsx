import React from "react";

import { Input, Form } from "antd";
import * as S from "./styles";
import { SearchOutlined, GlobalOutlined } from "@ant-design/icons";
function SiteHeader() {
  return (
    <S.HeaderContainer>
      <S.HeaderGrid>
        <S.HeaderSearch>
          <Form
            style={{
              height: "50%",
              width: "100%",
            }}
          >
            <Form.Item>
              <Input
                style={{
                  width: "100%",
                  border: "1px solid black",
                }}
                prefix={
                  <SearchOutlined
                    style={{
                      color: "#ecddef",
                    }}
                  />
                }
                placeholder="Search a product..."
              />
            </Form.Item>
          </Form>
        </S.HeaderSearch>
        <S.HeaderMenu>
          <S.MenuItem>
            <GlobalOutlined
              style={{
                marginRight: "4px",
              }}
            />
            English
          </S.MenuItem>
          <S.MenuItem>Light</S.MenuItem>
        </S.HeaderMenu>
      </S.HeaderGrid>
    </S.HeaderContainer>
  );
}

export default SiteHeader;
