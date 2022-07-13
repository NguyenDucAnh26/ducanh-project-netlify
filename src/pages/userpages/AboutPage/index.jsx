import React from "react";
import * as S from "./styles";
function AboutPage() {
  return (
    <S.AboutContainer>
      <S.AboutImageHead></S.AboutImageHead>
      <S.AboutImageContent>
        <S.NeonText>Thanks for visiting</S.NeonText>
        <S.TitleImage>The project website base on the origin web:</S.TitleImage>
        <S.LinkToWeb>https://www.coolmate.me/</S.LinkToWeb>
        <S.AuthorWeb>Nguyen Duc Anh</S.AuthorWeb>
        <S.PhoneNumber>0766616660</S.PhoneNumber>
        <S.Place>Da Nang city,Iviettech programming center</S.Place>
      </S.AboutImageContent>
      <S.AboutWrapper></S.AboutWrapper>
    </S.AboutContainer>
  );
}

export default AboutPage;
