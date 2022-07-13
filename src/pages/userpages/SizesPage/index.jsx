import React, { useState } from "react";
import { Slider } from "antd";
import * as S from "./styles";

function SizesPage() {
  const [inputValue, setInputValue] = useState(1.4);

  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }

    setInputValue(value);
  };
  return (
    <S.AboutContainer>
      <S.AboutWrapper>
        <S.Heading>Hướng dẫn chọn size theo chiều cao</S.Heading>
        <S.SliderWrapper>
          <Slider onChange={onChange} step={0.01} min={1.4} max={1.9}></Slider>
        </S.SliderWrapper>
        <S.Number>{inputValue * 100} cm </S.Number>
        <S.Suggest>
          <S.SuggestContent>
            Gợi ý: &nbsp;
            {inputValue <= 1.57
              ? "S"
              : inputValue >= 1.58 && inputValue < 1.65
              ? "M"
              : inputValue >= 1.65 && inputValue <= 1.69
              ? "L"
              : inputValue > 1.69 && inputValue <= 1.73
              ? "XL"
              : inputValue > 1.73
              ? "2XL"
              : ""}
          </S.SuggestContent>
        </S.Suggest>
      </S.AboutWrapper>
    </S.AboutContainer>
  );
}

export default SizesPage;
