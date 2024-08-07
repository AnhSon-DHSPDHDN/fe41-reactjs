import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { actFetchProductById } from "../../redux/features/product/productSlice";

const ProductDetailsPage = () => {
  const params = useParams();
  const idProduct = params.idProduct;
  const dispatch = useDispatch();
  const productInfo = useSelector(state => state.product.productInfo)

  useEffect(() => {
    dispatch(actFetchProductById(idProduct))
  }, [idProduct])

  return <div>
    <img alt="" src={productInfo.productImage} width={300} height={250} />
    <h1>{productInfo.productName}</h1>
    <p>{productInfo.productPrice} $</p>
    <p>{productInfo.battery} kwh</p>
  </div>
}

export default ProductDetailsPage
