import styled from "styled-components";

export const ProductsContainer = styled.div`
  height: 100%;
  border-radius: 10px;
`;
export const ProductsWrapper = styled.div`
  margin: 24px;
  padding: 24px;
  background-color: #fff;
  max-height: 100%;
  border-radius: 10px;
`;

export const HeadContainer = styled.div`
  margin-bottom: 20px;
`;
export const HeadTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;
export const AddProduct = styled.button`
  padding: 4px;
  background-color: #0a0a0a;
  color: #f0f0f0;
  border-radius: 5px;
  margin-bottom: 20px;
  float: right;
  &:hover {
    background-color: #f0f0f0;
    color: #0a0a0a;
  }
`;
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1025px) {
    flex-direction: column;
  }
`;
export const FormBody = styled.div`
  flex: 1;
`;
export const FormTable = styled.div`
  margin-right: 20px;
  flex: 1;
  @media (max-width: 1025px) {
    margin-bottom: 40px;
  }
`;
export const ImagesWrap = styled.div`
  flex: 1;
`;
export const TableandImage = styled.div`
  display: flex;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`;
