import styled from "styled-components";

export const CollectionList = styled.div`
  padding-top: 25px;
`;

export const CollectionListContainer = styled.div`
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
export const CollectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;
export const TitleName = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 15px;
`;
export const LinkTitle = styled.a`
  margin-top: 10px;
  font-size: 16px;
`;
export const CollectionProducts = styled.div``;

export const ProductCategoryHead = styled.div`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  position: relative;
  @media (max-width: 575px) {
    display: none;
  }
`;
export const ProductCategoryThumbnail = styled.div`
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;
export const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
