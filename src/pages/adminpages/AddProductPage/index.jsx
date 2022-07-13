import React from "react";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, InputNumber, Button, Select } from "antd";

import {
  getProductListAction,
  createProductAction,
  getCategoryListAction,
} from "../../../redux/actions";
import * as S from "./styles";

const initialValues = {
  productName: "",
  price: 0,
  categoryId: undefined,
};
function AddProductPage() {
  const dispatch = useDispatch();
  const { createProductData } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getProductListAction());
    dispatch(getCategoryListAction());
  }, []);

  const renderCategoryOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      );
    });
  }, [categoryList]);

  function handleCreateProduct(values) {
    dispatch(createProductAction({ data: values }));
  }

  // const [disabled, setDisabled] = useState(true);
  // const toggle = () => {
  //   setDisabled(!disabled);
  // };

  return (
    <S.AddProductContainer>
      <S.AddProductWrapper>
        <S.HeadContainer>
          <S.HeadTitle>Add new product</S.HeadTitle>
        </S.HeadContainer>
        <S.ContentForm>
          <Form
            name="Add Product"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={(values) => handleCreateProduct(values)}
            initialValues={initialValues}
          >
            <Form.Item
              name="name"
              label="Product name"
              validateFirst
              rules={[
                {
                  required: true,
                  message: "Name là bắt buộc!",
                },
              ]}
            >
              <Input placeholder="product name..." />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Giá là bắt buộc!",
                },
                {
                  type: "number",
                  min: 10000,
                  message: "Giá phải lớn hơn 10.000!",
                },
              ]}
              name="price"
              label="Price"
            >
              <InputNumber
                placeholder=" product price..."
                prefix="đ"
                style={{
                  width: "200px",
                }}
              />
            </Form.Item>
            <Form.Item name="discount" label="Discount">
              <InputNumber
                disabled
                min={0}
                max={100}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace("%", "")}
              />
            </Form.Item>
            {/* <Button
              style={{
                // display: "inline-block",
                margin: "10px",
                marginLeft: "100px",
              }}
              onClick={toggle}
              type="primary"
            >
              have discount
            </Button> */}
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "category là bắt buộc!",
                },
              ]}
              label="category"
              name="categoryId"
            >
              <Select
                style={{
                  width: 200,
                }}
                placeholder="category..."
              >
                {renderCategoryOptions}
              </Select>
            </Form.Item>

            <Form.Item
              style={{
                textAlign: "left",
              }}
            >
              <Button
                className="btn btn-add-product"
                htmlType="submit"
                loading={createProductData.loading}
              >
                Complete
              </Button>
            </Form.Item>
          </Form>
        </S.ContentForm>
      </S.AddProductWrapper>
    </S.AddProductContainer>
  );
}

export default AddProductPage;
