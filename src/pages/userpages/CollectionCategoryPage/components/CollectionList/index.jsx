import React from "react";

import * as S from "./styles";
import { Col, Row } from "antd";
import ProductCard from "../../../../../layouts/UserLayout/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { getColorListAction } from "../../../../../redux/actions";

function CollectionList({ filterId }) {
  const dispatch = useDispatch();
  const { colorList } = useSelector((state) => state.color);

  useEffect(() => {
    dispatch(getColorListAction({}));
  }, [filterId]);

  const filterCategory = colorList.data.filter(
    (item) => item.categoryId === filterId
  );

  const renderProductByCategory = useMemo(() => {
    return filterCategory.map((item) => {
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
          <Row gutter={[16, 24]}>{renderProductByCategory}</Row>
        </S.CollectionProducts>
      </S.CollectionListContainer>
    </S.CollectionList>
  );
}

export default CollectionList;
