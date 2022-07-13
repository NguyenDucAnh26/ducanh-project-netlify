import React from "react";

import CollectionFilter from "./components/CollectionFilter";
import CollectionList from "./components/CollectionList";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getColorListAction } from "../../../redux/actions";
import { PAGE_SIZE } from "../../../constants/pagination";
function CollectionPage() {
  const dispatch = useDispatch();
  const { colorList } = useSelector((state) => state.color);

  const [filterParams, setFilterParams] = useState({
    keyword: "",
    categoryIds: [],
  });

  function handleSearh(value) {
    setFilterParams({
      ...filterParams,
      keyword: value,
    });
    dispatch(
      getColorListAction({
        ...filterParams,
        keyword: value,
      })
    );
  }
  function handleFilterCategory(values) {
    setFilterParams({
      ...filterParams,
      categoryIds: values,
    });
    dispatch(
      getColorListAction({
        ...filterParams,
        page: 1,
        limit: PAGE_SIZE.MINI,
        categoryIds: values,
      })
    );
  }
  function handleSortPrice(value) {
    setFilterParams({
      ...filterParams,
      sortOrder: value,
    });
    dispatch(
      getColorListAction({
        ...filterParams,
        page: 1,
        limit: PAGE_SIZE.MINI,
        sortOrder: value,
      })
    );
  }
  const handleShowMore = () => {
    dispatch(
      getColorListAction({
        ...filterParams,
        page: colorList.meta.page + 1,
        limit: PAGE_SIZE.SMALL,
        more: true,
      })
    );
  };
  return (
    <div>
      <CollectionFilter
        filterParams={filterParams}
        setFilterParams={setFilterParams}
        handleSearh={handleSearh}
        handleFilterCategory={handleFilterCategory}
        handleSortPrice={handleSortPrice}
      />

      <CollectionList
        filterParams={filterParams}
        handleShowMore={handleShowMore}
      />
    </div>
  );
}

export default CollectionPage;
