import styled from "styled-components";

export const SiteContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 30px 0;
  font-size: 13px;
  line-height: 160%;
  color: #d9d9d9;
  margin-top: 30px;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const FooterContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`;

export const FooterInner = styled.div`
  display: flex;
  padding-bottom: 35px;
`;

export const FooterMain = styled.div`
  flex: 1;
  padding-right: 130px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MenuItem = styled.div`
  flex: 1;
  font-size: 13px;
  line-height: 200%;
  max-width: 160px;
`;
export const MenuItemHead = styled.h4`
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  line-height: 200%;
  margin-bottom: 8px;
`;
export const MenuItemLists = styled.ul`
  margin: 0;
  padding: 0;
  line-height: 2.4rem;
`;
export const MenuItemList = styled.li`
  font-weight: 500;
  color: #d9d9d9;
`;
export const Link = styled.a`
  font-weight: 500;
  color: #d9d9d9;
  &:hover {
    color: #f9f86c;
  }
`;

// side footer
export const FooterSide = styled.div`
  width: 30%;
  max-width: 260px;
`;
export const FooterSideHead = styled.h4`
  font-weight: 600;
  font-size: 21px;
  line-height: 27px;
  color: #fff;
  margin-bottom: 6px;
`;

export const sideBtn = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  background: #2f5acf;
  color: #d9d9d9;
  border-radius: 16px;
  padding: 0 30px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 25px;
  border: 0;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
export const SideInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 160%;
  letter-spacing: 0.03em;
  color: #fff;
  margin-bottom: 12px;
`;
export const SideInfoIcon = styled.div`
  margin-right: 15px;
`;
export const SideInfoContent = styled.div``;
export const ContentHead = styled.span`
  color: #fff;
`;
export const ContentDesc = styled.p`
  color: #fff;
`;
export const ContentNumber = styled.a`
  color: #fff;
`;
export const ContentMail = styled.a`
  color: #fff;
`;

export const SideSocial = styled.div`
  display: flex;
  margin-top: 25px;
`;
export const SocialLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  width: 17%;
  height: 30px;
`;
export const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  -o-object-position: left;
  object-position: left;
`;
export const FooterLast = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #d9d9d9;
`;
export const CopyRight = styled.div``;
export const CopyRightHead = styled.h4`
  letter-spacing: 0.03em;
  text-align: center;
  color: #fff;
`;
