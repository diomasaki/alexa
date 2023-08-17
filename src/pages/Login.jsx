import React, { useRef, useState } from "react";
import {useDispatch} from "react-redux"
import styled from "styled-components";
import FormInput from "../components/FormInput";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
  background-position: center;
`;

const Form = styled.form`
  padding: 20px 60px;
  background-color: white;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: rgb(77, 1, 77);
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  font-size: 15px;
  margin-top: 20px;
  border: none;
  background-color: rebeccapurple;
  color: white;
  padding: 20px;
  border-radius: 5px;
`;

const Login = () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "Username",
      errorMessage: "username must be more than 3 characters",
      placeholder: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      label: "Password",
      errorMessage: "password need capital and special characters",
      placeholder: "Password",
      // pattern:
      //   "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login shop.navi.gg</Title>
        {inputs.map((input) => (
          <FormInput
            key={inputs.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;
