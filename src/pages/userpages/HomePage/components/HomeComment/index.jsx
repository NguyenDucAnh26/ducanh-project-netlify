import React from "react";

import { Rate } from "antd";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import moment from "moment";
import * as S from "./styles";
import { getCommentListAction } from "../../../../../redux/actions";

function HomeComment() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentListAction({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { commentList } = useSelector((state) => state.comment);
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2400,
    autoplaySpeed: 3000,
    cssEase: "linear",
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CollectionListByCategory = useMemo(() => {
    return commentList.data.map((item, index) => {
      if (index < 12) {
        return (
          <S.ColComment key={item.id}>
            <S.CardComment>
              <S.RowImage>
                <S.Time>{moment(item.createdAt).format("MM/DD/YYYY ")}</S.Time>
                <S.ImgWrap>
                  <S.imgContent src={item.productImg} alt="cool" />
                </S.ImgWrap>
              </S.RowImage>
              <S.Author>{item.user.fullName}</S.Author>
              <S.Content>{item.content}</S.Content>
              <S.ContentProductName>{item.productName}</S.ContentProductName>
              <Rate disabled defaultValue={item.rate} />
            </S.CardComment>
          </S.ColComment>
        );
      }
      return null;
    });
  }, [commentList]);

  return (
    <S.CollectionContainer>
      <h3
        style={{
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "20px",
        }}
      >
        Đánh giá của khách hàng
      </h3>
      <S.CollectionWrapper>
        <Slider className="slider-homepage" {...settings}>
          {CollectionListByCategory}
        </Slider>
      </S.CollectionWrapper>
    </S.CollectionContainer>
  );
}

export default HomeComment;
