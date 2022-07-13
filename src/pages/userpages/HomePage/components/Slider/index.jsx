import React from "react";

import * as S from "./style";
import Slider from "react-slick";

function HomeSlider() {
  return (
    <div>
      <Slider className="slider-homepage" autoplay>
        <div>
          <S.SliderImage
            style={{
              backgroundImage:
                "url(https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/May2022/Hero-banner-CleanVN_42.png)",
            }}
          >
            <S.SliderBackground>
              <S.SliderContentWrapper>
                <S.flexContentWrapper>
                  <S.SliderContentBtn>
                    Miễn phí vận chuyển
                    <br />
                    cho đơn hàng trên 200k
                  </S.SliderContentBtn>
                  <S.SliderContentBtn>
                    60 ngày đổi trả
                    <br />
                    vì bất kì lí do gì
                  </S.SliderContentBtn>
                  <S.SliderContentBtn>
                    Đến tận nơi nhận hàng trả
                    <br />
                    hoàn tiền trong 24h
                  </S.SliderContentBtn>
                </S.flexContentWrapper>
              </S.SliderContentWrapper>
            </S.SliderBackground>
          </S.SliderImage>
        </div>
        <div>
          <S.SliderImage
            style={{
              backgroundImage:
                "url(https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/May2022/Hero-Excool-Website.jpg)",
            }}
          >
            <S.SliderBackground>
              <S.SliderContentWrapper>
                <S.flexContentWrapper>
                  <S.SliderContentBtn>
                    Miễn phí vận chuyển
                    <br />
                    cho đơn hàng trên 200k
                  </S.SliderContentBtn>
                  <S.SliderContentBtn>
                    60 ngày đổi trả
                    <br />
                    vì bất kì lí do gì
                  </S.SliderContentBtn>
                  <S.SliderContentBtn>
                    Đến tận nơi nhận hàng trả
                    <br />
                    hoàn tiền trong 24h
                  </S.SliderContentBtn>
                </S.flexContentWrapper>
              </S.SliderContentWrapper>
            </S.SliderBackground>
          </S.SliderImage>
        </div>
        <div>
          <S.SliderImage
            style={{
              backgroundImage:
                "url(https://www.coolmate.me/images/about-us-banner.jpg?edcc1efd8ea76e0664d01d1b5cbf7dc0)",
            }}
          >
            <S.SliderBackground>
              <S.SliderContentWrapper>
                <S.flexContentWrapper>
                  <S.SliderContentBtn>
                    Miễn phí vận chuyển
                    <br />
                    cho đơn hàng trên 200k
                  </S.SliderContentBtn>
                  <S.SliderContentBtn>
                    60 ngày đổi trả
                    <br />
                    vì bất kì lí do gì
                  </S.SliderContentBtn>
                  <S.SliderContentBtn>
                    Đến tận nơi nhận hàng trả
                    <br />
                    hoàn tiền trong 24h
                  </S.SliderContentBtn>
                </S.flexContentWrapper>
              </S.SliderContentWrapper>
            </S.SliderBackground>
          </S.SliderImage>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
