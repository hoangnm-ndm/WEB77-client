import React, { useEffect, useState } from "react";
import instance from "../../apis";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await instance.get("/products");
      console.log(data);
      setProducts(data.data);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <h1>San pham ban chay</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Gia: {product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
