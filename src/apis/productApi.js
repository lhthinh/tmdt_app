import axios from "axios";

class ProductApi {
  getAllProduct = () => {
    const url = `${process.env.REACT_APP_API_ENDPOINT}/product/all`;
    return axios.get(url, { headers: { "Content-Type": "application/json" } });
  };
}

const productApi = new ProductApi();
export default productApi;
