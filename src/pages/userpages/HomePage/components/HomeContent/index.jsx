import React from "react";
import * as S from "./styles";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../constants/routes";
function HomeContent() {
  const navigate = useNavigate();
  return (
    <S.HomeContentContainer>
      <S.LinkBtnSmaillScreen>Mua ngay</S.LinkBtnSmaillScreen>

      <S.VideoWrapper>
        <S.Video
          controls={false}
          muted={true}
          autoPlay={true}
          loop={true}
          preload="auto"
          src="https://mcdn.coolmate.me/uploads/assets/Jacketcut_2.mp4"
        ></S.Video>
      </S.VideoWrapper>
      <S.ContentWrapper>
        <S.ContentInside>
          <S.Content1>Dòng sản phẩm công nghệ </S.Content1>
          <S.Content2>
            NEW NORMAL
            <br />
            <S.specialContent>JACKET</S.specialContent>
          </S.Content2>
          <S.Content3>
            Chiếc áo khoác đầu tiên tại Việt Nam ứng dụng công nghệ HeiQ
            ViroBlock
            <br />
            có khả năng diệt 99.99% virus SARS-CoV2
          </S.Content3>
          <S.LinkBtn
            onClick={() => {
              const newPath = generatePath(ROUTES.USER.COLLECTION_CATEGORY, {
                category: "sportjacket",
              });
              navigate(newPath, { state: 8 });
            }}
          >
            Mua ngay
          </S.LinkBtn>
        </S.ContentInside>
      </S.ContentWrapper>
    </S.HomeContentContainer>
  );
}

export default HomeContent;
