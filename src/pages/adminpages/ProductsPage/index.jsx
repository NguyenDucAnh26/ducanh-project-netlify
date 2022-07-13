import React from "react";

import * as S from "./styles";
import {
  Card,
  Space,
  Table,
  Button,
  Pagination,
  Input,
  Select,
  message,
  Popconfirm,
} from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { PAGE_SIZE } from "../../../constants/pagination";
import {
  getProductListAction,
  getCategoryListAction,
  deleteProductAction,
} from "../../../redux/actions";
function ProductsPage() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const navigate = useNavigate();
  const [filterParams, setFilterParams] = useState({
    keyword: "",
    categoryIds: [],
  });
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    dispatch(getProductListAction({ page: 1, limit: PAGE_SIZE.SMALL }));
    dispatch(getCategoryListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFilterCategory(values) {
    setFilterParams({
      ...filterParams,
      categoryIds: values,
    });
    dispatch(
      getProductListAction({
        ...filterParams,
        page: 1,
        limit: PAGE_SIZE.SMALL,
        categoryIds: values,
      })
    );
  }
  const formattedCategoryOptions = categoryList.data.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  function handleSearh(value) {
    setKeyword(value);

    dispatch(
      getProductListAction({ page: 1, limit: PAGE_SIZE.SMALL, keyword: value })
    );
  }
  // pagination  change
  function handleChanglePage(page) {
    dispatch(
      getProductListAction({
        ...filterParams,
        page: page,
        limit: PAGE_SIZE.SMALL,
        keyword: keyword,
      })
    );
  }
  const item = productList.data.map((item, index) => {
    return {
      ...item,
      key: item.id,
      categoryName: item.category.name,
    };
  });
  const confirm = () => {
    dispatch(deleteProductAction({ id: deleteId }));
    message.success("Deleted complete");
  };

  const cancel = () => {
    message.info("Not Deleted ");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: `name`,
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => {
        return `${price.toLocaleString()}đ`;
      },
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "category",
    },

    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id, record) => (
        <>
          <Space size="middle">
            <Button
              size="small"
              onClick={() => {
                const newPath = generatePath(ROUTES.ADMIN.PRODUCT_DETAIL, {
                  id: record.id,
                });
                navigate(newPath);
              }}
              style={{
                borderRadius: "5px",
                backgroundColor: "white",
                borderColor: "black",
              }}
              type="primary"
            >
              <span
                style={{
                  color: "black",
                }}
              >
                {" "}
                Detail
              </span>
            </Button>
            <Button
              onClick={() =>
                navigate(
                  generatePath(ROUTES.ADMIN.PRODUCT_UPDATE, { id: record.id })
                )
              }
              size="small"
              style={{
                borderRadius: "5px",
                backgroundColor: "#121212",
                borderColor: "white",
              }}
            >
              <EditFilled
                style={{
                  fontWeight: "600",
                  color: "white",
                }}
              />
            </Button>

            <Popconfirm
              title="Are you sure to delete this product"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                onClick={() => {
                  setDeleteId(record.id);
                }}
                size="small"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#121212",
                  borderColor: "white",
                }}
              >
                <DeleteFilled
                  style={{
                    fontWeight: "600",
                    color: "white",
                  }}
                />
              </Button>
            </Popconfirm>
          </Space>
        </>
      ),
    },
  ];

  return (
    <S.ProductsContainer>
      <S.ProductsWrapper>
        <S.HeadContainer>
          <S.HeadTitle>products</S.HeadTitle>
          <S.AddProduct onClick={() => navigate(ROUTES.ADMIN.PRODUCT_ADD)}>
            Add Product
          </S.AddProduct>
        </S.HeadContainer>
        <Card
          style={{
            marginBottom: "20px",
          }}
        >
          <S.CardFilter>
            <S.CardContent>
              <Input
                size="small"
                onChange={(e) => handleSearh(e.target.value)}
                placeholder="Tìm kiếm"
              />
            </S.CardContent>
            <S.CardContent>
              <Select
                size="small"
                mode="multiple"
                allowClear
                options={formattedCategoryOptions}
                onChange={(values) => handleFilterCategory(values)}
                placeholder="Hãng sản xuất"
                style={{ width: "100%" }}
              />
            </S.CardContent>
          </S.CardFilter>
        </Card>
        <Table
          style={{
            marginBottom: "10px",
          }}
          pagination={false}
          columns={columns}
          dataSource={item}
        />
        <Pagination
          style={{
            textAlign: "center",
          }}
          current={productList.meta.page}
          total={productList.meta.total}
          onChange={(page) => handleChanglePage(page)}
        />
      </S.ProductsWrapper>
    </S.ProductsContainer>
  );
}

export default ProductsPage;
