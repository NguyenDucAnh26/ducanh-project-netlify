import React from "react";
import { Typography, Tabs, Col, Row } from "antd";
import * as S from "./style";
import ProductCardHomePage from "../../../../../layouts/UserLayout/ProductCardHomePage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  getProductListUserAction,
  getColorListAction,
  getCategoryListAction,
} from "../../../../../redux/actions";
const { Title } = Typography;
const { TabPane } = Tabs;
function HomeProduct() {
  const dispatch = useDispatch();
  const { productListUser } = useSelector((state) => state.product);
  // const [productShow, setProductShow] = useState(1);

  useEffect(() => {
    dispatch(getProductListUserAction({ categoryIds: 1 }));

    dispatch(getColorListAction({}));
    dispatch(getCategoryListAction());
  }, []);

  const onChange = (key) => {
    dispatch(getProductListUserAction({ categoryIds: key }));
  };

  const renderProductHomePage = useMemo(() => {
    return productListUser.data.map((item, index) => {
      if (index >= 0 && index <= 3) {
        return (
          <Col key={item.id} className="gutter-row" lg={6} sm={12} xs={24}>
            <ProductCardHomePage data={item} />
          </Col>
        );
      }
      return null;
    });
  }, [productListUser]);

  return (
    <S.HomeProductContainer>
      <S.HomeProductWrapper>
        <Title
          style={{
            textAlign: "center",
          }}
          level={2}
        >
          Cần phải có
        </Title>

        <S.TabContainer>
          {/* TAB */}
          <Tabs
            style={{ textAlign: "center" }}
            centered
            defaultActiveKey="1"
            onChange={onChange}
          >
            <TabPane tab="Polo" key="1">
              <Row gutter={[16, 24]}>{renderProductHomePage}</Row>
            </TabPane>
            <TabPane tab="Shirt" key="2">
              <Row gutter={[16, 24]}>{renderProductHomePage}</Row>
            </TabPane>
            <TabPane tab="T-shirt" key="6">
              <Row gutter={[16, 24]}>{renderProductHomePage}</Row>
            </TabPane>
            <TabPane tab="Pants" key="4">
              <Row gutter={[16, 24]}>{renderProductHomePage}</Row>
            </TabPane>
          </Tabs>
        </S.TabContainer>
      </S.HomeProductWrapper>
    </S.HomeProductContainer>
  );
}

export default HomeProduct;
