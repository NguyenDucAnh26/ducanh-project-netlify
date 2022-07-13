import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top: 30px;
`;
export const AboutWrapper = styled.div`
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
export const AboutCard = styled.div`
  display: flex;
  background-color: #f9f86c;
  border-radius: 50px;
`;
export const AboutCardImageWrapper = styled.div`
  border-radius: 50px;
  overflow: hidden;
  width: 720px;
  position: relative;
  z-index: 1;
  height: 556px;
`;
export const AboutCardImage = styled.img`
  position: absolute;
  object-fit: cover;
`;

export const AboutCardContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex: 1;
  padding: 70px 40px 80px 60px;
`;
export const ContentTitle = styled.h2`
  font-size: 52px;
  font-weight: 500;
  line-height: 3.8rem;
  @media (max-width: 768px) {
    line-height: 2rem;
    font-size: 28px;
  }
`;

export const AboutCardContentDesc = styled.div``;
export const AboutCardContentBtn = styled.div`
  margin-top: 20px;
`;
export const CardContentBtn = styled.a`
  background-color: #fff;
  color: #000;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 16px;
  padding: 0 30px;
  transition: all 0.2s;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #ccc;
    color: #000;
  }
  @media (max-width: 762px) {
    font-size: 14px;
  }
`;
