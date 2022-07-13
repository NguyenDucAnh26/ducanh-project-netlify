import React from "react";
import * as S from "./styles";

export const MenuHeaderAbout = ({ isShowMenuAbout, setIsShowMenuAbout }) => {
  return (
    <S.MenuContainer
      onMouseOver={() => setIsShowMenuAbout(true)}
      onMouseOut={() => setIsShowMenuAbout(false)}
      isShowMenuAbout={isShowMenuAbout}
    >
      <S.MenuWarpper>
        <S.MenuInner>
          <S.MegaMenuItem>
            <S.MenuHead>Coolmate</S.MenuHead>
            <S.Grid>
              <S.GridColumn>
                <S.GridImage>
                  <img
                    src="https://media.coolmate.me/cdn-cgi/image/height=162,quality=80/uploads/January2022/DSC00630_5_(1).png"
                    alt="Coolmate"
                  />
                </S.GridImage>
                <S.GridContent>
                  <S.Content>Coolmate 101</S.Content>
                  <br></br>
                  <S.SubContent>
                    Tất cả những gì bạn muốn biết về Coolmate! và gia nhập
                    Coolmate
                  </S.SubContent>
                </S.GridContent>
              </S.GridColumn>
              <S.GridColumn>
                <S.GridImage>
                  <img
                    src="https://media.coolmate.me/cdn-cgi/image/height=162,quality=80/uploads/December2021/3-2_1_(2)_(1).jpg"
                    alt="Coolmate"
                  />
                </S.GridImage>
                <S.GridContent>
                  <S.Content>Dịch vụ 100% hài lòng </S.Content>
                  <br></br>
                  <S.SubContent>
                    Bật mí 11 dịch vụ Coolmate cam kết với khách hàng
                  </S.SubContent>
                </S.GridContent>
              </S.GridColumn>
              <S.GridColumn>
                <S.GridImage>
                  <img
                    src="https://media.coolmate.me/cdn-cgi/image/height=162,quality=80/uploads/January2022/23_(1).png"
                    alt="Coolmate"
                  />
                </S.GridImage>
                <S.GridContent>
                  <S.Content>Coolclub - Khách hàng thân thiết</S.Content>
                  <br></br>
                  <S.SubContent>
                    Những ưu đãi hấp dẫn dành cho khách hàng thân thiết
                  </S.SubContent>
                </S.GridContent>
              </S.GridColumn>
              <S.GridColumn>
                <S.GridImage>
                  <img
                    src="https://media.coolmate.me/cdn-cgi/image/height=162,quality=80/uploads/January2022/Anh_chup_Man_hinh_2022-01-22_luc_10.26_1_(1).png"
                    alt="Coolmate"
                  />
                </S.GridImage>
                <S.GridContent>
                  <S.Content>Câu chuyện</S.Content>
                  <br></br>
                  <S.SubContent>Về Startup với mô hình Online D2C</S.SubContent>
                </S.GridContent>
              </S.GridColumn>
            </S.Grid>
          </S.MegaMenuItem>
        </S.MenuInner>
      </S.MenuWarpper>
    </S.MenuContainer>
  );
};
