/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Input, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import * as S from "./styles";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { useSelector, useDispatch } from "react-redux";
import { getProductListAction } from "../../../../redux/actions";

const { TabPane } = Tabs;

export const MenuMobile = ({
  isShowMenuMobile,
  showProductSearchMobile,
  setShowProductSearchMobile,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productList } = useSelector((state) => state.product);

  function handleSearchHead(e) {
    setShowProductSearchMobile(true);
    dispatch(
      getProductListAction({
        page: 1,
        limit: 5,
        keyword: e.target.value,
      })
    );
  }
  const renderProducts = productList.data.map((product) => {
    return (
      <div key={product.id}>
        <S.Row
          onClick={() => {
            const newPath = generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: product.id,
            });
            navigate(newPath);
          }}
        >
          <S.Image>
            <S.Img src={product.productImages[0].url} />
          </S.Image>
          <S.Content>
            <S.Name>{product.name}</S.Name>
            <S.Price>
              {product.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </S.Price>
          </S.Content>
        </S.Row>
      </div>
    );
  });
  return (
    <S.MenuContainer isShowMenuMobile={isShowMenuMobile}>
      <S.MenuWrapper>
        <S.MenuInner>
          <S.SearchWrapper>
            <S.SearchMobile>
              <Form>
                <Form.Item>
                  <Input
                    onInput={() => {}}
                    onChange={(e) => {
                      handleSearchHead(e);
                    }}
                    placeholder="Tìm kiếm sản phẩm..."
                    prefix={<SearchOutlined />}
                    style={{
                      width: "100%",
                      border: "1px solid black",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
              </Form>
            </S.SearchMobile>
          </S.SearchWrapper>

          {!showProductSearchMobile ? (
            <>
              <S.MenuMainWrapper>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Sản phẩm" key="1">
                    <p
                      onClick={() => {
                        const newPath = generatePath(ROUTES.USER.COLLECTION);
                        navigate(newPath);
                      }}
                      style={{
                        borderBottom: "1px solid #aaa",
                        marginBottom: "10px",
                        cursor: "pointer",
                      }}
                    >
                      Tất cả sản phẩm
                    </p>
                    {/* áo nam */}
                    <S.Lists>
                      <S.ListHead>
                        <p>Áo nam</p>
                      </S.ListHead>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "tanktop",
                            }
                          );
                          navigate(newPath, { state: 7 });
                        }}
                      >
                        <a>Áo Tank top</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "t-shirt",
                            }
                          );
                          navigate(newPath, { state: 6 });
                        }}
                      >
                        <a>Áo T-shirt</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "polo",
                            }
                          );
                          navigate(newPath, { state: 1 });
                        }}
                      >
                        <a>Áo polo</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "shirt",
                            }
                          );
                          navigate(newPath, { state: 2 });
                        }}
                      >
                        <a>Áo sơ mi</a>
                      </li>

                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "sportjacket",
                            }
                          );
                          navigate(newPath, { state: 8 });
                        }}
                      >
                        <a>Áo khoác thể thao</a>
                      </li>
                    </S.Lists>
                    {/* quần nam */}
                    <S.Lists>
                      <S.ListHead>
                        <p>Quần nam</p>
                      </S.ListHead>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "shorts",
                            }
                          );
                          navigate(newPath, { state: 3 });
                        }}
                      >
                        <a>Quần shorts</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "jeans",
                            }
                          );
                          navigate(newPath, { state: 5 });
                        }}
                      >
                        <a>Quần jeans</a>
                      </li>
                      <li
                        onClick={() => {
                          const newPath = generatePath(
                            ROUTES.USER.COLLECTION_CATEGORY,
                            {
                              category: "pants",
                            }
                          );
                          navigate(newPath, { state: 4 });
                        }}
                      >
                        <a>Quần pants</a>
                      </li>
                    </S.Lists>
                  </TabPane>
                </Tabs>
              </S.MenuMainWrapper>
              <S.NavList>
                <S.Nav>
                  <a>Chọn size</a>
                </S.Nav>
                <S.Nav>
                  <a>Về coolmate</a>
                </S.Nav>
              </S.NavList>
            </>
          ) : productList.data.length === 0 ? (
            <h3 style={{ color: "#151515", textAlign: "center" }}>
              chưa tìm thấy sản phẩm
            </h3>
          ) : (
            renderProducts
          )}
        </S.MenuInner>
      </S.MenuWrapper>
    </S.MenuContainer>
  );
};
