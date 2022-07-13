import React from "react";
import * as S from "./styles";

function HomeAbout() {
  return (
    <S.AboutContainer>
      <S.AboutWrapper>
        <S.AboutCard>
          <S.AboutCardImageWrapper>
            <S.AboutCardImage
              src="https://mcdn.coolmate.me/image/June2022/mceclip2_87.png"
              alt="Coolclub"
            />
          </S.AboutCardImageWrapper>
          <S.AboutCardContent>
            <S.ContentTitle>
              Trải nghiệm mua sắm hài lòng với #DucAnh
            </S.ContentTitle>
            <S.AboutCardContentDesc>
              <p style={{ lineHeight: "1.8rem" }}>
                Giá cả hợp lý
                <br />
                Dịch vụ 100% hài lòng
                <br />
                60 ngày đổi trả
                <br />
                Tự hào sản xuất tại Việt Nam
              </p>
            </S.AboutCardContentDesc>
            <S.AboutCardContentBtn>
              <S.CardContentBtn>Tìm hiểu thêm</S.CardContentBtn>
            </S.AboutCardContentBtn>
          </S.AboutCardContent>
        </S.AboutCard>
      </S.AboutWrapper>
    </S.AboutContainer>
  );
}

export default HomeAbout;
