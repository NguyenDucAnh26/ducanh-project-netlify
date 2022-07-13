import React from "react";

import { Col, Row } from "antd";
import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { getCategoryListAction } from "../../../../../redux/actions";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../constants/routes";
function HomeCollection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategoryListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CollectionListByCategory = useMemo(() => {
    return categoryList.data.map((item) => {
      if (item.url) {
        return (
          <Col
            key={item.id}
            style={{}}
            className="gutter-row"
            lg={4}
            sm={12}
            xs={12}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                const newPath = generatePath(ROUTES.USER.COLLECTION_CATEGORY, {
                  category: item.name,
                });
                navigate(newPath, { state: item.id });
              }}
            >
              <S.CollectionThumbnail>
                <S.CollectionThumbnailImage src={item.url} />
                {/* <S.CollectionThumbnailTitle>
                  {item.name}
                </S.CollectionThumbnailTitle> */}
              </S.CollectionThumbnail>
            </div>
          </Col>
        );
      }
      return null;
    });
  }, [categoryList]);

  return (
    <S.CollectionContainer>
      <S.CollectionWrapper>
        <Row gutter={[16, 24]}>{CollectionListByCategory}</Row>
      </S.CollectionWrapper>
    </S.CollectionContainer>
  );
}

export default HomeCollection;
