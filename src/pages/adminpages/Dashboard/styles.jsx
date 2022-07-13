import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;
export const DashboardWrapper = styled.div`
  padding: 24px;
`;

// Dashboard data
export const DashboardData = styled.div`
  display: flex;
  height: 60vh;
  @media (max-width: 1072px) {
    flex-direction: column;
  }
`;

export const DashboardDataChart = styled.div`
  padding: 20px;
  width: 50%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 1072px) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media (max-width: 724px) {
    display: none;
  }
`;
export const DashboardDataReports = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 10px;
  @media (max-width: 1072px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 724px) {
    margin-top: 100px;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
export const ReportRow = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  @media (max-width: 1072px) {
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 724px) {
    width: 100%;
    height: 100%;
  }
`;
export const ReportData = styled.div`
  width: 50%;
  margin: 0 10px;
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 1072px) {
    width: 90%;
    height: 100%;
    margin: 10px 0;
  }
`;
export const ReportDataContent = styled.div`
  padding: 24px 24px;
`;
export const ContentTitle = styled.p``;
export const ContentNumber = styled.p`
  font-size: 28px;
  display: block;
  margin: 20px 0;
`;
export const ContentSub = styled.p`
  font-size: 14px;
`;
export const ContentIcon = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  font-size: 28px;
  background-color: #f0f0f0;
  color: black;
  padding: 8px 8px;
  border-radius: 10px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

// Dashboard table
export const DashboardTable = styled.div``;
