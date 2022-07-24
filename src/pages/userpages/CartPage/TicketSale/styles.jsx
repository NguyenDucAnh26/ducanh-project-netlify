import styled from "styled-components";

export const Ticket = styled.div`
  flex-direction: column;
  position: relative;
  height: 50px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  background-color: ${({ pickSale }) => (pickSale ? "#aaa" : "")};

  &:hover {
    background-color: #aaa;
  }
  cursor: pointer;
  & p {
    font-weight: 500;
    color: #151515;
    font-style: italic;
    & span {
      font-size: 11px;
      color: #ccc;
    }
  }
  & span {
    color: #151515;
    font-size: 14px;
    margin-top: 2px;
    font-style: italic;
  }
`;
export const BorderLeftTop = styled.div`
  position: absolute;
  background-color: white;
  top: -10px;
  left: -10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
export const BorderLeftBottom = styled.div`
  position: absolute;
  background-color: white;
  bottom: -10px;
  left: -10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
export const BorderRightTop = styled.div`
  position: absolute;
  background-color: white;
  top: -10px;
  right: -10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
export const BorderRightBottom = styled.div`
  position: absolute;
  background-color: white;
  bottom: -10px;
  right: -10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
