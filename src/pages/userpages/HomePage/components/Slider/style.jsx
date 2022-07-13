import styled from "styled-components";

export const SliderImage = styled.div`
  height: 420px;
  color: #fff;
  line-height: 420px;
  text-align: center;
  background-color: #0e0f11;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;
export const SliderBackground = styled.div`
  top: 59%;
  height: 200px;
  background-image: linear-gradient(transparent, #524e4e);
  position: relative;
`;
export const SliderContentWrapper = styled.div`
  position: absolute;
  bottom: 62px;
  left: 50%;
  width: 100%;
  max-width: 1280px;
  padding: 0 32px;
  transform: translate3d(-50%, 0, 0);
`;
export const SliderContentBtn = styled.a`
  position: relative;
  flex: 1;
  margin: 0 15px;
  height: 100%;
  border-radius: 16px;
  color: #000;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15em;
  transition: all 0.3s;
  overflow: hidden;
  padding: 5px 15px;
  border: 1px solid #fff;
  color: #fff;
  &:hover {
    color: black;
    background-color: white;
  }

  @media (max-width: 990px) {
    margin: 10px 0;
  }
`;

export const flexContentWrapper = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
