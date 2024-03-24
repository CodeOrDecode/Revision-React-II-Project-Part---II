import React from "react";
import style from "../Css/Singleproduct.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'

const Singleproduct = ({ id, title, price, image }) => {
  const navigate = useNavigate();

  function handleNavigate(value) {
    navigate(`/prodesc/${value}`);
  }

  return (
    <div className={style.smalldiv}>
      <img className={style.image} src={image} alt="" />
      <h3>{title}</h3>
      <h4 className={style.price}>₹ {price}</h4>
      <Button colorScheme="blue">Add to Cart</Button>
      <Button colorScheme="blue"
        style={{ marginLeft: "20px" }}
        onClick={() => {
          handleNavigate(id);
        }}
      >
        View details
      </Button>
    </div>
  );
};

export default Singleproduct;
