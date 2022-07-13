import styled from "styled-components";

export const CollectionContainer = styled.div`
  margin-top: 50px;
`;
export const CollectionWrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  border-radius: 16px;
`;
export const CollectionThumbnail = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;
export const CollectionThumbnailImage = styled.img`
  border-radius: 16px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CollectionThumbnailTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 32px);
  transform: translate3d(-50%, -50%, 0);
  border: 2px solid #fff;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 16px;
  transition: all 0.3s;
  font-weight: 500;
`;
