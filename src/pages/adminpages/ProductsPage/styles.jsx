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
  margin-bottom: 50px;
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
export const CardFilter = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardContent = styled.div`
  width: 40%;
  margin-top: 8px;
`;
