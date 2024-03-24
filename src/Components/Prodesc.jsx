import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import style from "../Css/Prodesc.module.css"
import { Button } from '@chakra-ui/react'

const Prodesc = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  async function getSingleData() {
    try {
      let { data } = await axios({
        method: "get",
        url: `http://localhost:3000/products/${id}`,
      });
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <div className={style.perdescdiv}>
      {data && <img className={style.perdescdivimg} src={data.image} alt="" />}
      {data && <h2 className={style.perdescdivtitle}>{data.title}</h2>}
      {data && <h3 className={style.perdescdivdesc}>{data.description}</h3>}
      {data && <h4 className={style.perdescdivprice}>₹ {data.price}</h4>}
      <Button colorScheme="blue" style={{marginTop:"18px"}}>Add to Cart</Button>
    </div>
  );
};

export default Prodesc;
