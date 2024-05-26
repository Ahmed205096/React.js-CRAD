import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { GetDataAPI } from "../APIs/APIs";
import "./ViewProduct.css";

export default function ViewProduct() {
  const params = useParams();
  const allProducts = GetDataAPI();

  const productValues = allProducts
    .filter((product) => parseInt(params.ID) === parseInt(product.id))
    .map((product) => {
      return {
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        rating: product.rating.rate,
      };
    });

  if (productValues.length !== 0) {
    return (
      <div className="product-container-view">
        <div className="card card-view">
          <div>
            <div className="img-container">
              <img src={productValues[0].image} alt="" />
            </div>
            <h5>{productValues[0].title}...</h5>
            <p>{productValues[0].description} </p>
          </div>

          <div className="price-rate">
            <p className="bg-y">Price: {productValues[0].price}$</p>
            <p className="bg-y">
              Rate: {productValues[0].rating}
              <FontAwesomeIcon icon={faStar} pulse={true} color="yellow" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
