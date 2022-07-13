import styled from "styled-components";

export const Filter = styled.div`
  padding-top: 17px;
  padding-bottom: 17px;
  border-bottom: 1px solid #d9d9d9;
`;
export const FilterContainer = styled.div`
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const FilterInner = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 0;
  margin-right: 20px;
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
export const FilterSearch = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const FilterSelect = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SelectItem = styled.div`
  margin-left: 20px;
`;
