import { useEffect } from "react";
import { useState } from "react";
import { Cards } from "../Cards/Cards";
import axios from "axios";
import "./Body.css";

export const Body = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setProducts(response.data);
        console.log(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bodyContent">
      <div className="headingContainer">
        <h1>Fresh recommendations</h1>
      </div>
      <div className="cardCollection">
        {products.length > 0
          ? products.map((product) => (
              <div key={product.id}>
                <Cards product={product} />
              </div>
            ))
          : "Loading"}
      </div>
      <div className="bottomBtn">
        <button className="bbtn">Load more</button>
      </div>
    </div>
  );
};
