import React from "react";

import * as S from "./styles";
import { Button, Col, Row, Spin } from "antd";
import ProductCard from "../../../../../layouts/UserLayout/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { PAGE_SIZE } from "../../../../../constants/pagination";
import { getColorListAction } from "../../../../../redux/actions";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";

function CollectionList({ filterParams, handleShowMore }) {
  const dispatch = useDispatch();
  const { colorList } = useSelector((state) => state.color);
  useEffect(() => {
    dispatch(
      getColorListAction({
        ...filterParams,
        page: 1,
        limit: PAGE_SIZE.MINI,
      })
    );
  }, []);

  const renderProductByCategory = useMemo(() => {
    return colorList.data.map((item) => {
      return (
        <Col key={item.id} className="gutter-row" lg={6} sm={12} xs={24}>
          <ProductCard data={item} dataLoading={colorList.loading} />
        </Col>
      );
    });
  }, [colorList.data]);

  return (
    <S.CollectionList>
      <S.CollectionListContainer>
        <S.CollectionProducts>
          <Row gutter={[16, 24]}>
            {renderProductByCategory}
            <Col className="gutter-row" lg={6} sm={12} xs={24}>
              {colorList.loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{ fontSize: "40px", color: "black" }}
                    />
                  }
                  size="large"
                  style={{ marginLeft: "50%", marginTop: "10%" }}
                />
              ) : (
                <Button
                  className="btn-load-more"
                  icon={<DownOutlined />}
                  onClick={() => handleShowMore()}
                >
                  Xem thêm
                </Button>
              )}
            </Col>
          </Row>
        </S.CollectionProducts>
      </S.CollectionListContainer>
    </S.CollectionList>
  );
}

export default CollectionList;
