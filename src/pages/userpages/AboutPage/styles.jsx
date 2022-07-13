import styled from "styled-components";

export const AboutContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  min-height: 300px;
`;

export const AboutWrapper = styled.div`
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const AboutImageHead = styled.div`
  background: url(https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?cs=srgb&dl=pexels-bich-tran-669996.jpg&fm=jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-bottom: 56.25%;
  position: relative;
`;
export const AboutImageContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  @media (max-width: 870px) {
    top: 20%;
  }
  @media (max-width: 414px) {
    font-size: 14px;
    top: 12%;
  }
`;
export const TitleImage = styled.h3`
  color: #fff;
  font-size: 32px;
  @media (max-width: 870px) {
    font-size: 20px;
    top: 20%;
  }
  @media (max-width: 414px) {
    font-size: 14px;
    top: 20%;
  }
`;
export const LinkToWeb = styled.a`
  color: #aaa;
  font-size: 28px;
  @media (max-width: 870px) {
    font-size: 14px;
    top: 20%;
  }
  @media (max-width: 414px) {
    font-size: 14px;
    top: 20%;
  }
`;
export const AuthorWeb = styled.h3`
  font-weight: 600;
  color: #000;
  @media (max-width: 870px) {
    font-size: 14px;
    top: 20%;
  }
  @media (max-width: 414px) {
    font-size: 14px;
    top: 20%;
  }
`;
export const PhoneNumber = styled.h3`
  color: #000;
  font-weight: 600;
  @media (max-width: 870px) {
    font-size: 14px;
    top: 20%;
  }
  @media (max-width: 414px) {
    font-size: 14px;
    top: 20%;
  }
`;
export const Place = styled.h3`
  font-weight: 600;
  color: #000;
  @media (max-width: 870px) {
    top: 20%;
  }
  @media (max-width: 414px) {
    font-size: 14px;
    top: 20%;
  }
`;
export const NeonText = styled.h3`
  @media (max-width: 414px) {
    font-size: 22px;
    top: 20%;
  }
  font-size: 52px;
  line-height: 100px;
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  animation: pulsate 1.5s infinite alternate;
  @keyframes pulsate {
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
        0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
    }

    0% {
      text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #0fa,
        0 0 45px #0fa, 0 0 55px #0fa, 0 0 70px #0fa, 0 0 80px #0fa;
    }
  }
`;
