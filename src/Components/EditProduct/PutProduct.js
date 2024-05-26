import { useEffect, useState } from "react";
import { putDataAPI, GetDataAPI } from "../APIs/APIs";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function PutProduct() {
  const products = GetDataAPI();

  const [data, setData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
    rate: "",
  });

  const params = useParams();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const feachedData = products
      .filter((product) => product.id === params.ID)
      // eslint-disable-next-line array-callback-return
      .map((product) => {
        setData({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
          rate: product.rating.rate,
        });
      });
  }, [params.ID, products]);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="post-product">
      <form
        className="post-product-form"
        onSubmit={async (e) => {
          e.preventDefault();
          await Swal.fire({
            title: "Are you sure?",
            text: "You will update the product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Updated!",
                text: "Your file has been update.",
                icon: "success",
              });
              putDataAPI(data);
            }
          });
        }}
      >
        <div className="big-container">
          <div className="form-group">
            <label htmlFor="product-name">Product Title</label>
            <input
              id="product-name"
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter product title"
              value={data.title}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-image">Product Image</label>
            <input
              id="product-image"
              name="image"
              type="text"
              className="form-control"
              placeholder="Enter product image"
              value={data.image}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-description">Product Description</label>
            <input
              id="product-description"
              name="description"
              type="text"
              className="form-control"
              placeholder="Enter product description"
              value={data.description}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-price">Product Price</label>
            <input
              id="product-price"
              name="price"
              type="text"
              className="form-control"
              placeholder="Enter product price"
              value={data.price}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-rate">Product Rate</label>
            <input
              id="product-rate"
              name="rate"
              type="text"
              className="form-control"
              placeholder="Enter product rate"
              value={data.rate}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
