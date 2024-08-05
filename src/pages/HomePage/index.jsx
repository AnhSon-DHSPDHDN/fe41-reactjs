import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllProduct } from '../../redux/features/product/productSlice';
import { Spin } from 'antd';

const HomePage = () => {
  const { allProducts, isLoading } = useSelector(state => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchAllProduct())
  }, [])

  console.log(allProducts, "allProducts");
  console.log(isLoading, "isLoading");

  return (
    <div>
      <h1>HomePage</h1>
      {isLoading && <Spin />}
      <ul>
        {allProducts.map((_product) => {
          return <li key={_product.id}>
            {_product.productName} - {_product.productPrice} $
          </li>
        })}
      </ul>
    </div>
  )
}

export default HomePage
