import React from "react";
import { ROUTES } from "../../../constants/routes";
import { useNavigate, generatePath } from "react-router-dom";
import * as S from "./styles";

function Footer() {
  const navigate = useNavigate();
  return (
    <S.SiteContainer>
      <S.FooterContainer>
        <S.FooterInner>
          <S.FooterMain>
            <S.Menu>
              <S.MenuItem>
                {/* kham pha coolmate */}
                <S.MenuItemHead>Khám phá</S.MenuItemHead>
                <S.MenuItemLists>
                  <S.MenuItemList
                    onClick={() => {
                      const newPath = generatePath(
                        ROUTES.USER.COLLECTION_CATEGORY,
                        {
                          category: "polo",
                        }
                      );
                      navigate(newPath, { state: 1 });
                    }}
                  >
                    <S.Link>Áo Polo</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList
                    onClick={() => {
                      const newPath = generatePath(
                        ROUTES.USER.COLLECTION_CATEGORY,
                        {
                          category: "t-shirt",
                        }
                      );
                      navigate(newPath, { state: 6 });
                    }}
                  >
                    <S.Link>Áo T-shirt</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList
                    onClick={() => {
                      const newPath = generatePath(
                        ROUTES.USER.COLLECTION_CATEGORY,
                        {
                          category: "tanktop",
                        }
                      );
                      navigate(newPath, { state: 7 });
                    }}
                  >
                    <S.Link>Áo tanktop</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
              <S.MenuItem>
                <S.MenuItemLists>
                  <S.MenuItemList
                    onClick={() => {
                      const newPath = generatePath(
                        ROUTES.USER.COLLECTION_CATEGORY,
                        {
                          category: "shirt",
                        }
                      );
                      navigate(newPath, { state: 2 });
                    }}
                  >
                    <S.Link>Áo sơ mi</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList
                    onClick={() => {
                      const newPath = generatePath(
                        ROUTES.USER.COLLECTION_CATEGORY,
                        {
                          category: "pants",
                        }
                      );
                      navigate(newPath, { state: 4 });
                    }}
                  >
                    <S.Link>Quần Pants</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList
                    onClick={() => {
                      const newPath = generatePath(
                        ROUTES.USER.COLLECTION_CATEGORY,
                        {
                          category: "jeans",
                        }
                      );
                      navigate(newPath, { state: 5 });
                    }}
                  >
                    <S.Link>Quần Jeans</S.Link>
                  </S.MenuItemList>
                  <S.MenuItemList
                    onClick={() => {
                      const newPath = generatePath(
                        ROUTES.USER.COLLECTION_CATEGORY,
                        {
                          category: "shorts",
                        }
                      );
                      navigate(newPath, { state: 3 });
                    }}
                  >
                    <S.Link>Quần Shorts</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
              <S.MenuItem>
                {/* dich vu khach hang */}
                <S.MenuItemHead>Dịch vụ khách hàng</S.MenuItemHead>
                <S.MenuItemLists>
                  <S.MenuItemList>
                    <S.Link>Hướng dẫn chọn size</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
              <S.MenuItem>
                {/* tài liệu tuyen dung */}
                <S.MenuItemHead>Về Chúng tôi</S.MenuItemHead>
                <S.MenuItemLists>
                  <S.MenuItemList onClick={() => navigate(ROUTES.USER.ABOUT)}>
                    <S.Link>Câu chuyện về chúng tôi</S.Link>
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
              <S.MenuItem>
                {/* dia chi lien he */}
                <S.MenuItemHead>Địa chỉ liên hệ</S.MenuItemHead>
                <S.MenuItemLists style={{ lineHeight: "1.8rem" }}>
                  <S.MenuItemList style={{ marginBottom: "14px" }}>
                    <span
                      style={{
                        fontWeight: "400",
                        color: "#d9d9d9",
                      }}
                    >
                      Một nơi nào đó Đà Nẵng
                    </span>
                  </S.MenuItemList>
                </S.MenuItemLists>
              </S.MenuItem>
            </S.Menu>
          </S.FooterMain>
          <S.FooterSide>
            {/* tel */}
            <S.SideInfo>
              <S.SideInfoIcon>
                <img
                  src="https://www.coolmate.me/images/footer/icon-hotline.svg"
                  alt="Hotline"
                ></img>
              </S.SideInfoIcon>
              <S.SideInfoContent>
                <S.ContentHead>Hotline</S.ContentHead>
                <S.ContentDesc>
                  <S.ContentNumber href="tel: 0766616660">
                    0766616660
                  </S.ContentNumber>
                  <S.ContentNumber href="tel: 0703853542">
                    &nbsp; (0703853542)
                  </S.ContentNumber>
                </S.ContentDesc>
              </S.SideInfoContent>
            </S.SideInfo>

            <S.SideInfo>
              <S.SideInfoIcon>
                <img
                  src="https://www.coolmate.me/images/footer/icon-email.svg"
                  alt="Hotline"
                ></img>
              </S.SideInfoIcon>
              <S.SideInfoContent>
                <S.ContentHead>Email</S.ContentHead>
                <S.ContentDesc>
                  <S.ContentMail href="mailto:Cool@coolmate.me">
                    nguyenducanh261003@gmail.com
                  </S.ContentMail>
                </S.ContentDesc>
              </S.SideInfoContent>
            </S.SideInfo>
            {/* Social icons link */}
            <S.SideSocial>
              <S.SocialLink href="https://www.facebook.com/profile.php?id=100041190876653">
                <S.SocialIcon
                  src="https://www.coolmate.me/images/footer/icon-facebook.svg"
                  alt="Facebook"
                ></S.SocialIcon>
              </S.SocialLink>
              <S.SocialLink href="https://www.instagram.com/nda.2610/">
                <S.SocialIcon
                  src="https://www.coolmate.me/images/footer/icon-instar.svg"
                  alt="instagram"
                ></S.SocialIcon>
              </S.SocialLink>
              <S.SocialLink href="/">
                <S.SocialIcon
                  src="https://www.coolmate.me/images/footer/icon-youtube.svg"
                  alt="youtube"
                ></S.SocialIcon>
              </S.SocialLink>
            </S.SideSocial>
          </S.FooterSide>
        </S.FooterInner>
        <S.FooterLast>
          <S.CopyRight>
            <S.CopyRightHead>@Nguyen Duc Anh</S.CopyRightHead>
            <S.CopyRightHead>Thanks for visiting my project</S.CopyRightHead>
          </S.CopyRight>
        </S.FooterLast>
      </S.FooterContainer>
    </S.SiteContainer>
  );
}

export default Footer;
