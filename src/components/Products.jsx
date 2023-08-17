import React, { useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";
import { productData } from "../data";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const dptPrd = async () => {
      try {
        const prd = await axios.get(`http://localhost:8000/api/products`);
        setProducts(prd.data);
      } catch (err) {}
    };
    dptPrd();
  }, [cat]);

  useEffect(() => {
    cat &&
    setFiltered(
      products.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
      item[key].includes(value)
      )
      )
      );
    });


  useEffect(() => {
    if (sort === "newest") {
      setFiltered((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFiltered((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFiltered((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  });

  return (
    <Container>
      {cat
        ? filtered.map((item) => <ProductsItem prd={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <ProductsItem prd={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
