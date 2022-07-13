import React from "react";

import * as S from "./styles";
import ImgCrop from "antd-img-crop";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import {
  Space,
  Table,
  Button,
  Form,
  Select,
  InputNumber,
  Input,
  Upload,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import {
  getColorListAction,
  createColorAction,
  getVariantListAction,
  getProductImagesListAction,
  deleteProductImagesAction,
  createProductImagesAction,
  createVariantAction,
  getProductDetailAction,
  deleteColorAction,
} from "../../../redux/actions";
const { Option } = Select;

function DetailProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { productDetail } = useSelector((state) => state.product);
  const { variantList } = useSelector((state) => state.variant);
  const { productImagesList } = useSelector((state) => state.productImages);
  const { colorList } = useSelector((state) => state.color);

  useEffect(() => {
    dispatch(getVariantListAction());
    dispatch(getColorListAction({ limit: 100 }));
    dispatch(getProductImagesListAction());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const productId = productDetail.data.id;
  const imageProductFilter = productImagesList.data.filter(
    (images) => images.productId === productId
  );

  const colorProductFilter = colorList.data.filter(
    (item) => item.productId === productId
  );
  const imageProductDetailList = imageProductFilter.map((image) => {
    return {
      ...image,
      uid: image.id,
      name: image.color,
      status: "done",
    };
  });
  const colorProductDetailList = colorProductFilter.map((item) => {
    return {
      ...item,
      uid: item.id,
      name: item.color,
      status: "done",
    };
  });

  const ItemFilter = variantList.data.filter(
    (item) => item.productId === productId
  );
  const Item = ItemFilter.map((item, index) => {
    return {
      ...item,
      key: item.id,
    };
  });
  const columns = [
    {
      title: "Color",
      dataIndex: `color`,
      key: "color",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, record) => (
        <Space size="middle">
          <Button
            size="small"
            style={{
              borderRadius: "5px",
              backgroundColor: "#52c41a",
              borderColor: "#52c41a",
            }}
            type="danger"
          >
            <EditFilled
              style={{
                fontWeight: "600",
                color: "black",
              }}
            />
          </Button>
          <Button
            size="small"
            style={{
              borderRadius: "5px",
            }}
            type="danger"
          >
            <DeleteFilled
              style={{
                fontWeight: "600",
                color: "black",
              }}
            />
          </Button>
        </Space>
      ),
    },
  ];

  const initialValues = {
    color: "",
    size: "",
    quantity: null,
  };
  const initialValues2 = {
    url: "",
    color: "",
  };
  const initialValues3 = {
    url: "",
    color: "",
  };

  function handleCreateProduct(values) {
    dispatch(
      createVariantAction({
        data: {
          ...values,
          productId: parseInt(id),
        },
      })
    );
  }
  function handleCreateColor(values) {
    dispatch(
      createColorAction({
        data: {
          ...values,
          productId: parseInt(id),
          productName: productDetail.data.name,
          productPrice: productDetail.data.price,
          categoryId: productDetail.data.categoryId,
        },
      })
    );
  }
  function handleCreateImageProduct(values) {
    dispatch(
      createProductImagesAction({
        data: {
          ...values,
          productId: parseInt(id),
        },
      })
    );
  }
  return (
    <S.ProductsContainer>
      <S.ProductsWrapper>
        <S.HeadContainer style={{ marginBottom: "100px" }}>
          <S.HeadTitle>{productDetail.data.name}</S.HeadTitle>
          <S.HeadTitle style={{ marginTop: "10px" }}>
            ID:{productDetail.data.id}
          </S.HeadTitle>

          <S.AddProduct
            onClick={() => {
              navigate(ROUTES.ADMIN.PRODUCTS);
            }}
          >
            Products page
          </S.AddProduct>
        </S.HeadContainer>
        <S.BodyWrapper>
          <S.FormBody>
            <Form
              layout="vertical"
              name="Add Variant"
              onFinish={(values) => handleCreateProduct(values)}
              initialValues={initialValues}
              labelCol={{
                span: 12,
              }}
              wrapperCol={{
                span: 16,
              }}
            >
              <Form.Item name="color" label="Color">
                <Select>
                  <Option value="black">Black </Option>
                  <Option value="white"> White</Option>
                  <Option value="navyblue">Navy Blue</Option>
                </Select>
              </Form.Item>
              <Form.Item name="size" label="Size">
                <Select>
                  <Option value="s">S </Option>
                  <Option value="m"> M</Option>
                  <Option value="l">L </Option>
                </Select>
              </Form.Item>
              <Form.Item name="quantity" label="Quantity">
                <InputNumber />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Complete
                </Button>
              </Form.Item>
            </Form>
          </S.FormBody>
          <S.FormBody>
            <Form
              onFinish={(values) => handleCreateImageProduct(values)}
              initialValues={initialValues2}
              labelCol={{
                span: 12,
              }}
              wrapperCol={{
                span: 16,
              }}
              layout="vertical"
            >
              <Form.Item name="url" label="Image Product Link">
                <Input />
              </Form.Item>
              <Form.Item name="color" label="Color">
                <Select>
                  <Option value="black">Black </Option>
                  <Option value="white"> White</Option>
                  <Option value="navyblue">Navy Blue</Option>
                  <Option value="darkblue">Dark Blue</Option>
                  <Option value="aquablue">Aqua Blue</Option>
                  <Option value="lightblue">Light Blue</Option>
                  <Option value="beachblue">Beach Blue </Option>
                  <Option value="green"> Green</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Upload Image Link
                </Button>
              </Form.Item>
            </Form>
          </S.FormBody>
          <S.FormBody>
            <Form
              onFinish={(values) => handleCreateColor(values)}
              initialValues={initialValues3}
              labelCol={{
                span: 12,
              }}
              wrapperCol={{
                span: 16,
              }}
              layout="vertical"
            >
              <Form.Item name="url" label="Product color link">
                <Input />
              </Form.Item>
              <Form.Item name="color" label="Color">
                <Select>
                  <Option value="black">Black </Option>
                  <Option value="white"> White</Option>
                  <Option value="navyblue">Navy Blue</Option>
                  <Option value="darkblue">Dark Blue</Option>
                  <Option value="aquablue">Aqua Blue</Option>
                  <Option value="lightblue">Light Blue</Option>
                  <Option value="beachblue">Beach Blue </Option>
                  <Option value="green"> Green</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Upload Color Link
                </Button>
              </Form.Item>
            </Form>
          </S.FormBody>
        </S.BodyWrapper>
        <S.TableandImage>
          <S.FormTable>
            <Table pagination={false} columns={columns} dataSource={Item} />
          </S.FormTable>
          <S.ImagesWrap>
            <ImgCrop rotate>
              <Upload
                listType="picture-card"
                fileList={imageProductDetailList}
                onPreview={onPreview}
                onRemove={(e) =>
                  dispatch(deleteProductImagesAction({ id: e.id }))
                }
              ></Upload>
            </ImgCrop>
          </S.ImagesWrap>
          <S.ImagesWrap>
            <ImgCrop rotate>
              <Upload
                listType="picture-card"
                fileList={colorProductDetailList}
                onPreview={onPreview}
                onRemove={(e) => dispatch(deleteColorAction({ id: e.id }))}
              ></Upload>
            </ImgCrop>
          </S.ImagesWrap>
        </S.TableandImage>
      </S.ProductsWrapper>
    </S.ProductsContainer>
  );
}

export default DetailProductPage;
