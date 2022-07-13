/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as S from "./styles";
import { ROUTES } from "../../../../constants/routes";
import { generatePath, useNavigate } from "react-router-dom";
export const MenuHeader = ({ isShowMenuHeader, setIsShowMenuHeader }) => {
  const navigate = useNavigate();
  return (
    // <S.MenuContainer
    //   onMouseOver={() => setIsShowMenuHeader(true)}
    //   onMouseOut={() => setIsShowMenuHeader(false)}
    //   isShowMenuHeader={isShowMenuHeader}
    // >
    //   <S.MenuWarpper>
    //     <S.MenuInner>
    //       <S.MegaMenuItem>
    //         {/* NHU CAU */}
    //         <S.HeadLink>Nhu cầu</S.HeadLink>
    //         <ul>
    //           <S.ListMegaItem>
    //             <S.Link>
    //               Mặt nhà & Mặc trong
    //               <S.SubLink>Homewear & Underwear</S.SubLink>
    //             </S.Link>
    //           </S.ListMegaItem>
    //           <S.ListMegaItem>
    //             <S.Link>
    //               Mặc hàng ngày
    //               <S.SubLink>Casualwear</S.SubLink>
    //             </S.Link>
    //           </S.ListMegaItem>
    //           <S.ListMegaItem>
    //             <S.Link>
    //               Đồ thể thao
    //               <S.SubLink>Activewear</S.SubLink>
    //             </S.Link>
    //           </S.ListMegaItem>
    //         </ul>
    //       </S.MegaMenuItem>
    //       <S.MegaMenuItem style={{ flex: "0 0 33%" }}>
    //         {/* DANH MUC */}
    //         <S.HeadLink>Danh mục</S.HeadLink>
    //         <S.GridTwoColumn>
    //           <S.GridColumn>
    //             <ul>
    //               <S.ListMegaItem>
    //                 <S.Link>Áo nam</S.Link>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Áo Tank top</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Áo T-shirt</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Áo polo</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Áo sơ mi</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Áo thể thao</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Áo in hình</S.LinkProduct>
    //               </S.ListMegaItem>
    //             </ul>
    //             <S.Divider />
    //             <ul>
    //               <S.ListMegaItem>
    //                 <S.Link>Phụ kiện</S.Link>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Tất (vớ)</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Phụ kiện</S.LinkProduct>
    //               </S.ListMegaItem>
    //             </ul>
    //           </S.GridColumn>
    //           <S.GridColumn>
    //             <ul>
    //               <S.ListMegaItem>
    //                 <S.Link>Quần nam</S.Link>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Quần shorts</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Quần jeans</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Quần dài</S.LinkProduct>
    //               </S.ListMegaItem>
    //             </ul>
    //             <S.Divider />
    //             <ul>
    //               <S.ListMegaItem>
    //                 <S.Link>Quần lót nam</S.Link>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Quần Brief (Tam giác)</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Quần Trunk (Boxer)</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.ListMegaItem>
    //                 <S.LinkProduct>Quần Brief Boxer (Boxer dài)</S.LinkProduct>
    //               </S.ListMegaItem>
    //               <S.Divider />
    //             </ul>
    //             <S.ListMegaItem
    //               onClick={() => navigate(ROUTES.USER.COLLECTION)}
    //             >
    //               <S.Link>Tất cả sản phẩm</S.Link>
    //             </S.ListMegaItem>
    //             <S.ListMegaItem>
    //               <S.Link>Box đồ nam</S.Link>
    //             </S.ListMegaItem>
    //             <ul></ul>
    //           </S.GridColumn>
    //         </S.GridTwoColumn>
    //       </S.MegaMenuItem>
    //       <S.MegaMenuItem>
    //         {/* BO SUU TAP */}
    //         <S.HeadLink>Bộ sưu tập</S.HeadLink>
    //         <ul>
    //           <S.ListMegaItem>
    //             <S.Link>
    //               Coolmate Basics
    //               <S.SubLink>BST giá rẻ - chất lượng</S.SubLink>
    //             </S.Link>
    //           </S.ListMegaItem>
    //           <S.ListMegaItem>
    //             <S.Link>
    //               Care & Share
    //               <S.SubLink>10% doanh thu dành cho các bé</S.SubLink>
    //             </S.Link>
    //           </S.ListMegaItem>
    //         </ul>
    //       </S.MegaMenuItem>
    //       <S.MegaMenuItem>
    //         {/* CONG NGHE */}
    //         <S.HeadLink>Công nghệ</S.HeadLink>
    //         <ul>
    //           <S.ListMegaItem>
    //             <S.Link>
    //               Excool
    //               <S.SubLink>Công nghệ làm mát tối đa</S.SubLink>
    //             </S.Link>
    //           </S.ListMegaItem>
    //           <S.ListMegaItem>
    //             <S.Link>
    //               Cleandye
    //               <S.SubLink>Nhuộm không dùng nước</S.SubLink>
    //             </S.Link>
    //           </S.ListMegaItem>
    //         </ul>
    //       </S.MegaMenuItem>
    //     </S.MenuInner>
    //   </S.MenuWarpper>
    // </S.MenuContainer>

    <S.MenuContainer
      onMouseOver={() => setIsShowMenuHeader(true)}
      onMouseOut={() => setIsShowMenuHeader(false)}
      isShowMenuHeader={isShowMenuHeader}
    >
      <S.MenuWarpper>
        <S.MenuInner>
          <div className="background-one">
            <div className="link-container">
              <a
                className="link-one"
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
                Áo polo
              </a>
            </div>
          </div>
          <div className="background-one link-container">
            <a
              className="link-one"
              onClick={() => {
                const newPath = generatePath(ROUTES.USER.COLLECTION_CATEGORY, {
                  category: "t-shirt",
                });
                navigate(newPath, { state: 6 });
              }}
            >
              Áo thun
            </a>
          </div>
          <div className="background-one link-container">
            <a
              className="link-one"
              onClick={() => {
                const newPath = generatePath(ROUTES.USER.COLLECTION_CATEGORY, {
                  category: "shirt",
                });
                navigate(newPath, { state: 2 });
              }}
            >
              Áo sơ mi
            </a>
          </div>

          <div className="background-two">
            <div className="link-container">
              <a
                className="link-two"
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
                Áo tanktop
              </a>
            </div>
          </div>

          <div className="background-two">
            <div className="link-container">
              <a
                className="link-two"
                onClick={() => {
                  const newPath = generatePath(ROUTES.USER.COLLECTION);
                  navigate(newPath);
                }}
              >
                Tất cả
              </a>
            </div>
          </div>
          <div className="background-two">
            <div className="link-container">
              <a
                className="link-two"
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
                Quần shorts
              </a>
            </div>
          </div>
          <div className="background-three">
            <div className="link-container">
              <a
                className="link-three"
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
                Quần Pants
              </a>
            </div>
          </div>
          <div className="background-three">
            <div className="link-container">
              <a
                className="link-three"
                onClick={() => {
                  const newPath = generatePath(
                    ROUTES.USER.COLLECTION_CATEGORY,
                    {
                      category: "sportjacket",
                    }
                  );
                  navigate(newPath, { state: 8 });
                }}
              >
                Áo khoác
              </a>
            </div>
          </div>
          <div className="background-three">
            <div className="link-container">
              <a
                className="link-three"
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
                Quần jeans
              </a>
            </div>
          </div>
        </S.MenuInner>
      </S.MenuWarpper>
    </S.MenuContainer>
  );
};
