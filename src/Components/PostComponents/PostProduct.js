import { useState } from "react";
import { postDataAPI } from "../APIs/APIs";
import "./PostProduct.css";
import Swal from "sweetalert2";

export default function PostProduct() {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    rate: "",
  });

  return (
    <div className="post-product">
      <form className="post-product-form" onSubmit={(e) => e.preventDefault()}>
        <div className="big-container">
          <div className="form-group">
            <label htmlFor="product-name">Product Title</label>
            <input
              id="product-name"
              type="text"
              className="form-control"
              placeholder="Enter product title"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-image">Product Image</label>
            <input
              id="product-image"
              type="text"
              className="form-control"
              placeholder="Enter product image"
              onChange={(e) => setData({ ...data, image: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-description">Product Description</label>
            <input
              id="product-description"
              type="text"
              className="form-control"
              placeholder="Enter product description"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-price">Product Price</label>
            <input
              id="product-price"
              type="text"
              className="form-control"
              placeholder="Enter product price"
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-rate">Product Rate</label>
            <input
              id="product-rate"
              type="text"
              className="form-control"
              placeholder="Enter product rate"
              onChange={(e) => setData({ ...data, rate: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={async() => {
            await Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            postDataAPI(data);
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
