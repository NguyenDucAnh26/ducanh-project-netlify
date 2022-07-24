import React from "react";
import * as S from "./styles";

function TicketSale({ data, handleClickSale, pickSale, index }) {
  return (
    <S.Ticket
      pickSale={index === pickSale && pickSale}
      onClick={() => handleClickSale(data, index)}
    >
      <S.BorderLeftTop></S.BorderLeftTop>
      <S.BorderLeftBottom></S.BorderLeftBottom>
      <S.BorderRightTop></S.BorderRightTop>
      <S.BorderRightBottom></S.BorderRightBottom>
      <p>
        {data.name} <span>({data.amount})</span>
      </p>
      <span>
        {data.sale.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })}
      </span>
    </S.Ticket>
  );
}

export default TicketSale;
