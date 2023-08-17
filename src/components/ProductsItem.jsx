import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";

const Container = styled.div`
  height: 350px;
  min-width: 400px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;

const Image = styled.img`
  height: 60%;
`;

const Info = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    transition: all 0.2s ease;
  }
`;

const Icon = styled.div``;

const ProductsItem = ({ prd }) => {
  return (
    <Container>
      <Image src={prd.img} />
      <Info>
        <Icon>
          <Search />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductsItem;
