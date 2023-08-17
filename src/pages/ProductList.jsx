import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  margin: 20px;
  font-size: 30px;
  font-weight: 400;
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;

const FilterText = styled.div`
  font-size: 30px;
  margin-right: 25px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 5px;
`;

const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title>Jersey</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>White</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>X</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <Option value="newest">newest</Option>
            <Option value="asc">asc</Option>
            <Option value="desc">desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
    </Container>
  );
};

export default ProductList;
