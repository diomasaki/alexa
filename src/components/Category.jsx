import React from "react";
import { categoryData } from "../data";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`;
const Category = () => {
  return (
    <Container>
      {categoryData.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;
