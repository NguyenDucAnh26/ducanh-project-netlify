import styled from "styled-components";

export const HomeContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  max-width: 1200px;
  padding-top: 30%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0.55;
    z-index: 1;
    border-radius: 10px;
  }
`;
export const VideoWrapper = styled.div`
  height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Video = styled.video`
  height: 100%;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const ContentWrapper = styled.div`
  top: 0;
  height: 100%;
  width: 72%;
  left: 15%;
  position: absolute;
  opacity: 1;
  z-index: 2;
`;
export const ContentInside = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 6%;
  text-align: center;
  @media (max-width: 1072px) {
    padding-top: 2%;
  }
  @media (max-width: 991px) {
    padding-top: 6%;
  }
  @media (max-width: 562px) {
    padding-top: 2%;
  }
`;
export const Content1 = styled.h4`
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  @media (max-width: 991px) {
    font-size: 20px;
  }
  @media (max-width: 562px) {
    font-size: 12px;
  }
`;
export const Content2 = styled.h2`
  line-height: 1.25;
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  @media (max-width: 991px) {
    font-size: 40px;
  }
  @media (max-width: 562px) {
    font-size: 32px;
    line-height: 1;
  }
`;
export const specialContent = styled.span`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;
  color: hsla(0, 0%, 100%, 0);
`;
export const Content3 = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  @media (max-width: 991px) {
    font-size: 12px;
  }
  @media (max-width: 562px) {
    font-size: 8px;
  }
`;
export const LinkBtn = styled.button`
  margin-top: 20px;
  background-color: black;
  color: #fff;
  border: none;
  padding: 10px 50px;
  border-radius: 30px;
  &:hover {
    background-color: #ccc;
  }
  @media (max-width: 816px) {
    padding: 10px 40px;
    margin-top: 10px;
  }
  @media (max-width: 784px) {
    display: none;
  }
`;
export const LinkBtnSmaillScreen = styled.button`
  display: none;
  position: absolute;
  font-size: 14px;
  z-index: 100;
  top: 8px;
  right: 10px;
  background-color: black;
  color: #fff;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  &:hover {
    background-color: #ccc;
  }

  @media (max-width: 784px) {
    display: block;
  }
  @media (max-width: 562px) {
    padding: 5px 5px;
    display: block;
  }
`;
