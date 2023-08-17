import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  flex: 1;
  display: flex;
  margin: 5px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 60%;
  z-index: 1;
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  color: white;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1``;

const Button = styled.button`
  margin: 25px 0px;
  background: transparent;
  color: white;
  cursor: pointer;
  padding: 10px;
  border: 1px solid white;
`;

const CategoryItem = ({ item }) => {
  const history = useHistory();
  const handleClick = (e) => {
    history.push(`/products/${item.cat}`);
    location.reload()
  };

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleClick}>see more.</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
