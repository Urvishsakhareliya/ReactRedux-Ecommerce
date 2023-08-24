import { AllProducts, Error, Loading } from "../redux/action/AllProduct";
import axios from "axios";

const getAllProducts = async (dispatch) => {
  const Api = "https://dummyjson.com/products";
  dispatch(Loading());
  try {
    const res = await axios.get(Api);
    const products = await res.data;
    dispatch(AllProducts(products.products));
  } catch (error) {
    dispatch(Error());
  }
};
export default getAllProducts;
