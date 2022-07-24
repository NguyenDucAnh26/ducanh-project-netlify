import styled from "styled-components";

export const HomeMoreContainer = styled.div`
  padding: 0 9px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
`;
export const HomePageMoreCaption = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #000;
  border-radius: 8px;
  color: #fff;
  font-size: 24px;
  height: 65px;
  margin-bottom: 16px;

  @media (max-width: 990px) {
    font-size: 13px;
    height: 40px;
    margin-bottom: 5px;
  }
`;
export const LinkCaption = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #2f5acf;
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
  padding: 0 35px;
  font-weight: 400;
  &:hover {
    color: #000;
  }
`;
export const HomePageMoreImages = styled.div``;

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const Marquee = styled.div`
  width: 100%;
  line-height: 40px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
`;
export const MarP = styled.p`
  color: white;
  display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;
