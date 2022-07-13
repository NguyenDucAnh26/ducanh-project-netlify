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
export const CardComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(-45deg, #ece3e3, #5f5c5c, #535050, #dad6d6);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #151515;
  padding: 18px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
export const Author = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
export const Time = styled.p`
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
`;
export const Content = styled.p`
  margin-top: 10px;
  color: white;
  font-size: 16px;
`;
export const ContentProductName = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #ebe2e2;
  font-size: 14px;
`;
export const ColComment = styled.div`
  padding: 14px;
`;
export const RowImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
export const ImgWrap = styled.div`
  width: 20%;
  position: relative;
`;
export const imgContent = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
