import { deleteDataAPI, GetDataAPI } from "../APIs/APIs";
import "./GetData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function GetData() {
  const products = GetDataAPI();

  function executeDeleteFunction(product) {
    return Swal.fire({
      title: `Do you want to remove ${product.title.slice(0, 50)}?`,
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancle`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Swal.fire("Deleted!", "", "success");
        deleteDataAPI(product.id);
      } else if (result.isDenied) {
        Swal.fire("Cancled", "", "error");
      }
    });
  }

  if (products !== undefined) {
    const productList = products.map((product) => {
      return (
        <div className="card" key={product.id}>
          <div>
            <div className="img-container">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt="" />
              </Link>
            </div>
            <h5>{product.title.slice(0, 30)}...</h5>
            <p>{product.description.slice(0, 80)} </p>
          </div>

          <div className="price-rate">
            <p className="bg-y">Price: {product.price}$</p>
            <p className="bg-y">
              Rate: {product.rating.rate}{" "}
              <FontAwesomeIcon icon={faStar} pulse={true} color="yellow" />
            </p>
          </div>
          <div className="buttons">
            <Link to={`/product/${product.id}`}>
              <button className="view btn">View</button>
            </Link>
            <Link to={`/edit-product/${product.id}`}>
            <button className="edit btn">Edit</button></Link>
            <button
              className="delete btn"
              onClick={() => {
                executeDeleteFunction(product);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

    return <div className="product-container">{productList}</div>;
  }
}
