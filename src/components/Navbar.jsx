import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { persistor } from "../redux/store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
  height: 60px;
  background-color: black;
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Lg = styled.div``;

const Sc = styled.div`
  border: 1px solid white;
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: white;
`;

const Logo = styled.h1``;

const MenuItem = styled.div`
  margin-right: 25px;
  cursor: pointer;
`;

const Navbar = () => {
  const history = useHistory();
  const handleClick = (e) => {
    persistor.purge();
    history.push("/signin");
    location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Lg>ID</Lg>
          <Sc>
            <Input />
            <Search />
          </Sc>
        </Left>
        <Center>
          <Logo>Na`Vi.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem onClick={handleClick}>LOGOUT</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
