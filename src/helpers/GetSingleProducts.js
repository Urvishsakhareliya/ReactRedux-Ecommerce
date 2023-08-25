import axios from "axios";
import {
  GetSingleProduct,
  Error,
  Loading,
} from "../redux/action/GetSingleProductAction";

const GetSingleProducts = async (dispatch, id) => {
  const Api = `https://dummyjson.com/products/${id}`;
  dispatch(Loading());
  try {
    const res = await axios.get(Api);
    const products = await res.data;
    // console.log(products);
    dispatch(GetSingleProduct(products));
  } catch (error) {
    dispatch(Error());
  }
};
export default GetSingleProducts;
