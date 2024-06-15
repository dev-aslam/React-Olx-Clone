import { Heart } from "../../assets/Heart.jsx";
import "./Cards.css";

export const Cards = ({ product }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
        <div className="favoriteIcon">
          <Heart />
        </div>
      </div>
      <div className="productDetails">
        <h1>{product.price}$</h1>
        <p className="productName">{product.title}</p>
        <div className="cardfooter">
          <p>SAMUDRAPUR, MAHARASHTRA</p>
          <p>JUN 02</p>
        </div>
      </div>
    </div>
  );
};
