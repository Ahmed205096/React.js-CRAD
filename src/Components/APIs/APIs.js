import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:9000/products";

export function GetDataAPI() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url,
    }).then((data) => setProducts(data.data));
  }, []);

  return products;
}

export async function deleteDataAPI(id) {
  console.log(id);
  if (id !== 0) {
    await axios({
      method: "DELETE",
      url: `${url}/${id}`,
    });
  }
  window.location.reload();
}

export function postDataAPI(data) {
  if (data.length !== 0)
    axios({
      method: "POST",
      url,
      data: {
        title: data.title,
        price: data.price,
        description: data.description,
        category: "xyz",
        image: data.image,
        rating: {
          rate: data.rate,
          count: 200,
        },
      },
    });
}

export function putDataAPI(data) {
  if (data.length !== 0)
    axios({
      method: "PUT",
      url: `${url}/${data.id}`,
      data: {
        title: data.title,
        price: data.price,
        description: data.description,
        category: "xyz",
        image: data.image,
        rating: {
          rate: data.rate,
          count: 200,
        },
      },
    });
}
