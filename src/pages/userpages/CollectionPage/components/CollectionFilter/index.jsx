import React from "react";

import * as S from "./styles";
import { Form, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCategoryListAction } from "../../../../../redux/actions";
const { Option } = Select;

function CollectionFilter({
  handleSearh,
  handleFilterCategory,
  handleSortPrice,
  filterParams,
}) {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const formattedCategoryOptions = categoryList.data.map((item) => {
    return (
      <Option key={item.id} value={item.id}>
        {item.name}
      </Option>
    );
  });

  return (
    <S.Filter>
      <S.FilterContainer>
        <S.FilterWrapper>
          <S.FilterInner>
            <S.FilterTitle>Sản phẩm</S.FilterTitle>
            <S.FilterSearch>
              <Form
                style={{
                  height: "60%",
                }}
              >
                <Form.Item>
                  <Input
                    onPressEnter={(e) => handleSearh(e.target.value)}
                    id="inputHeader"
                    placeholder="Tìm kiếm sản phẩm..."
                    prefix={<SearchOutlined />}
                    style={{
                      width: "220px",
                      height: "40px",
                      border: "1px solid #ccc",
                      borderRadius: "50px",
                    }}
                  />
                </Form.Item>
              </Form>
            </S.FilterSearch>
          </S.FilterInner>
          <S.FilterSelect>
            <S.SelectItem>
              <Select
                showSearch={false}
                mode="multiple"
                placeholder="Nhóm sản phẩm"
                onChange={(values) => {
                  handleFilterCategory(values);
                }}
                style={{
                  width: 300,
                }}
              >
                {formattedCategoryOptions}
              </Select>
            </S.SelectItem>
            <S.SelectItem>
              <Select
                placeholder="sắp xếp"
                style={{
                  width: 130,
                }}
                value={filterParams.sortOrder}
                allowClear
                onChange={(value) => handleSortPrice(value)}
              >
                <Option value="asc">Giá thấp đến cao</Option>
                <Option value="desc">Giá cao đến thấp</Option>
              </Select>
            </S.SelectItem>
          </S.FilterSelect>
        </S.FilterWrapper>
      </S.FilterContainer>
    </S.Filter>
  );
}

export default CollectionFilter;
