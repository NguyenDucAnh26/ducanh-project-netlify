import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  getOrderListAction,
  getUserListAction,
  getProductListAction,
} from "../../../redux/actions";
import * as S from "./styles";
import {
  DollarCircleOutlined,
  UsergroupAddOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
} from "@ant-design/icons";
ChartJS.register(ArcElement, Tooltip, Legend);
function Dashboard() {
  const { userList } = useSelector((state) => state.user);
  const { orderList } = useSelector((state) => state.order);
  const { productList } = useSelector((state) => state.product);
  const poloProducts = productList.data.filter((item) => item.categoryId === 1);
  const shirtProducts = productList.data.filter(
    (item) => item.categoryId === 2
  );
  const shortsProducts = productList.data.filter(
    (item) => item.categoryId === 3
  );
  const pantsProducts = productList.data.filter(
    (item) => item.categoryId === 4
  );
  const jeansProducts = productList.data.filter(
    (item) => item.categoryId === 5
  );
  const tshirtProducts = productList.data.filter(
    (item) => item.categoryId === 6
  );
  const tanktopProducts = productList.data.filter(
    (item) => item.categoryId === 7
  );
  const sportjacketProducts = productList.data.filter(
    (item) => item.categoryId === 8
  );

  const data = {
    labels: [
      "Polo",
      "T-shirt",
      "Shirt",
      "Sport-jacket",
      "Tanktop",
      "Jeans",
      "Shorts",
      "Pants",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          poloProducts.length,
          tshirtProducts.length,
          shirtProducts.length,
          sportjacketProducts.length,
          tanktopProducts.length,
          jeansProducts.length,
          shortsProducts.length,
          pantsProducts.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(128, 96, 192, 0.2)",
          "rgba(136, 74, 12, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(128, 96, 192, 0.2)",
          "rgba(136, 74, 12, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserListAction({}));
    dispatch(getOrderListAction({}));
    dispatch(getProductListAction({}));
  }, []);

  let totalOrder = 0;
  orderList.data.forEach((item) => {
    totalOrder += item.total;
  });
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };
  return (
    <S.DashboardContainer>
      <S.DashboardWrapper>
        {/* data report */}
        <S.DashboardData>
          <S.DashboardDataChart>
            <Doughnut
              width={"100%"}
              height={"100%"}
              options={options}
              data={data}
            />
          </S.DashboardDataChart>
          <S.DashboardDataReports>
            <S.ReportRow>
              <S.ReportData
                style={{
                  backgroundColor: "#151515",
                  marginBottom: "20px",
                }}
              >
                <S.ReportDataContent>
                  <S.ContentTitle
                    style={{
                      color: "#fff",
                    }}
                  >
                    Revenue
                  </S.ContentTitle>
                  <S.ContentNumber
                    style={{
                      color: "#fff",
                    }}
                  >
                    {totalOrder.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </S.ContentNumber>
                  <S.ContentSub
                    style={{
                      color: "#fff",
                    }}
                  >
                    Updated every order success
                  </S.ContentSub>
                  <S.ContentIcon>
                    <DollarCircleOutlined
                      style={{
                        color: "#151515",
                      }}
                    />
                  </S.ContentIcon>
                </S.ReportDataContent>
              </S.ReportData>
              <S.ReportData style={{ marginBottom: "20px" }}>
                <S.ReportDataContent>
                  <S.ContentTitle>Products</S.ContentTitle>
                  <S.ContentNumber>{productList.data.length}</S.ContentNumber>
                  <S.ContentSub></S.ContentSub>
                  <S.ContentIcon>
                    <ShoppingCartOutlined
                      style={{
                        color: "#8AC389",
                      }}
                    />
                  </S.ContentIcon>
                </S.ReportDataContent>
              </S.ReportData>
            </S.ReportRow>
            <S.ReportRow>
              <S.ReportData>
                <S.ReportDataContent>
                  <S.ContentTitle>orders</S.ContentTitle>
                  <S.ContentNumber>{orderList.data.length} </S.ContentNumber>
                  <S.ContentSub>Updated every order success</S.ContentSub>
                  <S.ContentIcon>
                    <WalletOutlined />
                  </S.ContentIcon>
                </S.ReportDataContent>
              </S.ReportData>
              <S.ReportData>
                <S.ReportDataContent>
                  <S.ContentTitle>Users</S.ContentTitle>
                  <S.ContentNumber>{userList.data.length}</S.ContentNumber>
                  <S.ContentSub>Updated every new user register</S.ContentSub>
                  <S.ContentIcon>
                    <UsergroupAddOutlined
                      style={{
                        color: "#c24222",
                      }}
                    />
                  </S.ContentIcon>
                </S.ReportDataContent>
              </S.ReportData>
            </S.ReportRow>
          </S.DashboardDataReports>
        </S.DashboardData>
        {/* table */}
        <S.DashboardTable></S.DashboardTable>
      </S.DashboardWrapper>
    </S.DashboardContainer>
  );
}

export default Dashboard;
