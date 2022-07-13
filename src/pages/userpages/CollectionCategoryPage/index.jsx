import React from "react";
import CollectionFilter from "./components/CollectionFilter";
import CollectionList from "./components/CollectionList";
import { useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import {
  getColorListAction,
  getCategoryListAction,
} from "../../../redux/actions";
import { useLocation } from "react-router-dom";
function CollectionCategoryPage() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryListAction());
  }, []);
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
  function handleSortPrice(value) {
    setFilterParams({
      ...filterParams,
      sortOrder: value,
    });
    dispatch(
      getColorListAction({
        ...filterParams,
        sortOrder: value,
      })
    );
  }
  return (
    <div>
      <CollectionFilter
        filterParams={filterParams}
        setFilterParams={setFilterParams}
        handleSearh={handleSearh}
        handleSortPrice={handleSortPrice}
      />
      <CollectionList filterId={state} />
    </div>
  );
}

export default CollectionCategoryPage;
